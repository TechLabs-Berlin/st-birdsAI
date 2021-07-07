
// Layer setup //

// Layer types
var layerTypes = {
    fill: ["fill-opacity"],
    line: ["line-opacity"],
    circle: ["circle-opacity", "circle-stroke-opacity"],
    symbol: ["icon-opacity", "text-opacity"],
    raster: ["raster-opacity"],
    "fill-extrusion": ["fill-extrusion-opacity"],
    heatmap: ["heatmap-opacity"],
  };

  // Textbos alignments
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

// HTML Setup //

// HTML creation for the webapp
  var story = document.getElementById("story");
  var features = document.createElement("div");
  features.setAttribute("id", "features");

  var header = document.createElement("div");

// insert flying birds div
  var flyingBirds = document.createElement("div");
  header.appendChild(flyingBirds);
  flyingBirds.setAttribute("id", "birds");  
  
// get info from config file onto the page
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

  
  if (config.headerText) {
    var headerText = document.createElement("div");
    headerText.setAttribute ("id", "header__text");
    headerText.innerText = config.headerText;
    header.appendChild(headerText);
  }
  if (config.swipeText) {
    var swipeText = document.createElement("div");
    swipeText.setAttribute ("id", "swipe__text");
    swipeText.innerText = config.swipeText;
    header.appendChild(swipeText);
  }
// creating a navbar placeholder (logo will be added)
  /* var nav = document.createElement("div");
  story.appendChild(nav);
  nav.setAttribute("class", "nav_placeholder");
 */
 // div for  auto-changing text
  /* var sequenceText = document.createElement("div");
  nav.appendChild(sequenceText);
  sequenceText.setAttribute("id", "sequence"); */

  // populate nav with auto-changing text !!
  /* var example = ['Can you try to eat less meat?', 'Can you try to drink less coffee?', 'Would you care for your mobile phone and use it for longer than 4 years?', 'Can you try to eat less avocado?', 'Or dare I say...eat less chocolate?'];

        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    document.getElementById("sequence").innerHTML = example[i];
                    textSequence(++i);
                }, 4000); // 4 seconds (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }

        }  */


// configure the chapters
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

    if (record.slider){
    var sliderDiv = document.createElement("div");
    sliderDiv.setAttribute ("id", "console");
    header.appendChild(sliderDiv);
    sliderDiv.innerHTML = 
    "<h1 id='slider-header'>Timeseries predicitons</h1>\
      <div class='session'>\
        <h2>Area deforested (sq km)</h2>\
        <div class='session' id='sliderbar'>\
          <h2>Year: <label id='active-year'>2020</label></h2>\
          <input id='slider' class='row' type='range' min='2020' max='2026' step='1' value='2020' />\
      </div>\
      <div class='row'>\
        <div class='label' id='first'>100k</div>\
        <div class='label'>137k</div>\
        <div class='label' id='last'>195k</div>\
        </div>\
      </div>";
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


  // Fetch access Token to make map work
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

// Create the actual map in the browser
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

  // two fake datapoints for markers on map
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
          description: "Deforestation near Tenharim, Rondonia, 2011-2021",
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
          description: "Deforestation near Santarém, Pará, 2011-2021",
          media: '<img class="tlapse" src="./src/img/timelapse1.gif"/>',
        },
      },
    ],
  };

  // add markers to map
  timelapsePoints.features.forEach(function (marker) {
    // create an HTML element for each feature
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

  // Instantiate the scrollama
  var scroller = scrollama();

  map.on("load", function () {
    // to enable navigation by dragging, add this line
    // map.dragPan.enable();
    // problematic on mobile though...

    // Add data source: ESM geojson.
     // 1. add the source for the timeseries layer
     map.addSource('ESM', {
      type: 'geojson',
      data: 'src/data/ESM.geojson'
      });

      // 2. add the layer
      map.addLayer({
          'id': 'ESM',
          'type': 'circle',
          'source': 'ESM',
          'paint': {
          'circle-radius': {
          property: 'year',
          stops: [
          [2020, 30],
          [2021, 33.6],
          [2022, 37.6],
          [2023, 42.1],
          [2024, 47.2],
          [2025, 52.9],
          [2026, 59.2],
          ]
          },
          // Color circles by ethnicity, using a `match` expression.
          'circle-color': '#eb5423'
          },
          filter: ['==', ['number', ['get', 'year']], 2020]
      });

    // add data source: brazil states geojson
    // 1. add the source for the chloropleth layer
    map.addSource("States", {
      type: "geojson",
     data: 'src/data/sumarea.geojson'
       // data: "http://localhost:8080/api/v1/amazon/area", // the route on express
    });

    // 2. Add layer to visualize states polygons
    map.addLayer({
      id: "States",
      type: "fill",
      source: "States",
      layout: {},
      paint: {
        "fill-color": [
          "step",
          ["get", "Area_km"],
          "#e0cb80",
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
          "#df8d44",
          7000,
          "#eb5423",
          8000,
          "#d6233f",
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
        if (chapter.id == "timelapse-big") {
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

  //hide slider element when user scrolls back to top!
  /* function hideSLiderElement (){
    const div = document.getElementById("console");
    div.style.opacity = "0";
  } */
// make slider visible on chapter
  function createSliderElement (){
    const div = document.getElementById("console");
    div.style.opacity = "1";
    div.style.position = "fixed";
    div.style.top = "0";

    addSliderListener()
  }
// make slider disappear from chapter
function removeSliderElement (){
  const div = document.getElementById("console");
  div.style.opacity = "0";
  div.style.position = "absolute";
    div.style.top = "";
}

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
    
  function addSliderListener() {
  // event listener for the slider
  // changes the data shown according to the position of the slider
    document.getElementById('slider').addEventListener('input', function(e) {
      var year = parseInt(e.target.value);
      // update the map
      map.setFilter('ESM', ['==', ['number', ['get', 'year']], year]);
      // update text in the UI
      document.getElementById('active-year').innerText = year;
    });
  }

  function testCallback() {
    console.log("successful callback from chapter");
  }
