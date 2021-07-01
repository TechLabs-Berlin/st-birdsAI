var layerTypes = {
    fill: ["fill-opacity"],
    line: ["line-opacity"],
    circle: ["circle-opacity", "circle-stroke-opacity"],
    symbol: ["icon-opacity", "text-opacity"],
    raster: ["raster-opacity"],
    "fill-extrusion": ["fill-extrusion-opacity"],
    heatmap: ["heatmap-opacity"],
  };

  var alignments = {
    left: "lefty",
    center: "centered",
    right: "righty",
    full: "fully",
  };

  function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
  }

  function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
      var options = {};
      if (layer.duration) {
        var transitionProp = prop + "-transition";
        options = { duration: layer.duration };
        map.setPaintProperty(layer.layer, transitionProp, options);
      }
      map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
  }

  var story = document.getElementById("story");
  var features = document.createElement("div");
  features.setAttribute("id", "features");

  var header = document.createElement("div");

// try inserting whole html section
  var flyingBirds = document.createElement("div");
  header.appendChild(flyingBirds);
  flyingBirds.setAttribute("id", "birds");
  

  if (config.title) {
    var titleText = document.createElement("h1");
    titleText.innerText = config.title;
    header.appendChild(titleText);
    
  }

  if (config.subtitle) {
    var subtitleText = document.createElement("h2");
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
  }

  if (config.byline) {
    var bylineText = document.createElement("p");
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
  }

  if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute("id", "header");
    story.appendChild(header);
    // insert flying birds
    document.getElementById('birds').innerHTML = 
    '<div class="bird-container bird-container--one">\
      <div class="bird bird--one"></div>\
    </div>\
    <div class="bird-container bird-container--two">\
      <div class="bird bird--two"></div>\
    </div>\
    <div class="bird-container bird-container--three">\
      <div class="bird bird--three"></div>\
    </div>\
    <div class="bird-container bird-container--four">\
      <div class="bird bird--four"></div>\
    </div>'; 
  }

  var nav = document.createElement("div");
  story.appendChild(nav);
  nav.setAttribute("class", "nav_placeholder");


  config.chapters.forEach((record, idx) => {
    var container = document.createElement("div");
    var chapter = document.createElement("div");

    if (record.title) {
      var title = document.createElement("h3");
      title.innerText = record.title;
      chapter.appendChild(title);
    }

    if (record.image) {
      var image = new Image();
      image.src = record.image;
      chapter.appendChild(image);
    }

    if (record.description) {
      var story = document.createElement("p");
      story.innerHTML = record.description;
      chapter.appendChild(story);
    }

    container.setAttribute("id", record.id);
    container.classList.add("step");
    if (idx === 0) {
      container.classList.add("active");
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || "centered");
    if (record.hidden) {
      container.classList.add("hidden");
    }
    features.appendChild(container);
  });

  story.appendChild(features);

  var footer = document.createElement("div");

  if (config.footer) {
    var footerText = document.createElement("p");
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
  }

  if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute("id", "footer");
    story.appendChild(footer);
  }

  mapboxgl.accessToken = config.accessToken;

  const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery
      ? "&pluginName=scrollytellingV2"
      : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix,
    };
  };

  var map = new mapboxgl.Map({
    container: "map",
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
  });

  // navigation control that can be added some chapters
  // var nav = new mapboxgl.NavigationControl();

  // two fake datapoints for markers
  // TODO: source with link?
  var timelapsePoints = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-59.9, -6.88],
        },
        properties: {
          title: "Timelapse",
          description: "Deforestation near Santarém, Pará, 2011-2021",
          media: '<img class="tlapse" src="./src/img/timelapse.gif"/>',
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-54.76, -3.43],
        },
        properties: {
          title: "Timelapse",
          description: "Deforestation near Tenharim, Rondonia, 2011-2021",
          media: '<img class="tlapse" src="./src/img/timelapse1.gif"/>',
        },
      },
    ],
  };

  // add markers to map
  timelapsePoints.features.forEach(function (marker) {
    // create a HTML element for each feature
    var el = document.createElement("div");
    el.className = "marker";

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            "<p>" +
              marker.properties.description +
              "</p>" +
              marker.properties.media
          )
      )
      .addTo(map);
  });

  // instantiate the scrollama
  var scroller = scrollama();

  map.on("load", function () {
    // to enable navigation by dragging, add this line
    // map.dragPan.enable();
    // problematic on mobile though...

    // Add a data source: SAD 2019 Alerts dataset (GeoJSON data).
    map.addSource("Alerts", {
      type: "geojson",
      data: "https://opendata.arcgis.com/datasets/9c4a16f9520447349159fa30abcea08b_2.geojson",
    });

    // Add a new layer to visualize the 2019 polygons.
    map.addLayer({
      id: "Alerts",
      type: "fill",
      source: "Alerts", // reference the data source
      layout: {
        visibility: "visible",
      },
      paint: {
        "fill-color": "red", // red color fill
        "fill-opacity": 0.7,
      },
    });

    // add data source: brazil states geojson
    map.addSource("States", {
      type: "geojson",
      // data: 'sumarea.geojson'
      data: "http://localhost:8080/api/v1/amazon/area", // the route on express
    });

    // Add a new layer to visualize states polygons
    map.addLayer({
      id: "States",
      type: "fill",
      source: "States",
      layout: {},
      paint: {
        "fill-color": [
          "step",
          ["get", "Area_km"],
          "#ffeda0",
          50,
          "#ffeda0",
          250,
          "#fed976",
          2100,
          "#feb24c",
          2200,
          "#fd8d3c",
          4000,
          "#fc4e2a",
          6000,
          "#e31a1c",
          7000,
          "hsl(348, 100%, 37%)",
          8000,
          "#bd0026",
        ],
      },
    });

    // setup the instance, pass callback functions
    scroller
      .setup({
        step: ".step",
        offset: 0.5,
        progress: true,
      })
      .onStepEnter((response) => {
        var chapter = config.chapters.find(
          (chap) => chap.id === response.element.id
        );
        response.element.classList.add("active");
        map[chapter.mapAnimation || "flyTo"](chapter.location);
        // if (config.showMarkers) {
        //     marker.setLngLat(chapter.location.center);
        // }
        if (chapter.onChapterEnter.length > 0) {
          chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
          window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
          map.once("moveend", function () {
            const rotateNumber = map.getBearing();
            map.rotateTo(rotateNumber + 90, {
              duration: 24000,
              easing: function (t) {
                return t;
              },
            });
          });
        }
        // when entering the timelapse chapters, make the markers visible
        if (chapter.id == "timelapse" || chapter.id == "timelapse-big") {
          var markers = document.getElementsByClassName("marker");
          for (let i = 0; i < markers.length; i++) {
            markers[i].style.visibility = "visible";
          }
        }
      })
      .onStepExit((response) => {
        var chapter = config.chapters.find(
          (chap) => chap.id === response.element.id
        );
        response.element.classList.remove("active");
        if (chapter.onChapterExit.length > 0) {
          chapter.onChapterExit.forEach(setLayerOpacity);
        }

        // make the markers invisible again
        // also hide any pop up that is still open
        if (chapter.id != "timelapse") {
          let markers = document.getElementsByClassName("marker");
          for (let i = 0; i < markers.length; i++) {
            markers[i].style.visibility = "hidden";
          }
          let popups = document.getElementsByClassName("mapboxgl-popup");
          for (let i = 0; i < popups.length; i++) {
            popups[i].style.visibility = "hidden";
          }
        }
      });
  });

  // callback function to be used in the choropleth chapters:
  // When a click event occurs on a feature in the states layer, open a popup at the
  // location of the click, with description HTML from its properties.

  // TODO: remove these popups when exiting the chapter
  function addStatePopups() {
    map.on("click", "States", function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(
          e.features[0].properties.State +
            ": <br>" +
            e.features[0].properties.Area_km.toFixed(2) +
            " &#13218;"
        )
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on("mouseenter", "States", function () {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.on("mouseleave", "States", function () {
      map.getCanvas().style.cursor = "";
    });
  }

  // setup resize event
  window.addEventListener("resize", scroller.resize);

  function testCallback() {
    console.log("successful callback from chapter");
  }

  // function that switches the style of the map
  // can be used as callback in on the chapter when we want to switch (in config.js)
  // replace the style url with the desired style (for example 'mapbox://styles/mapbox/satellite-v9')
  function switchStyle() {
    map.setStyle("mapbox://styles/mapbox/light-v10");
  }