var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Testing if we can add layers on the go',
    subtitle: 'instead of creating a custom style with mapbox studio',
    byline: 'By birdsAI',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'first',
            alignment: 'left',
            hidden: false,
            title: 'First Chapter',
            // image: './path/to/image/source.png',
            description: 'This is the first map. We can use it to show our area of interest (Brazil) and add some intro text maybe?.',
            location: {
                center: [-58.3, -6.35],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: "Alerts", opacity: 0 },
                { layer: "States", opacity: 0 }
            ],
            onChapterExit: [
                { layer: "Alerts", opacity: 1 },
            ]
        },
        {
            id: 'second',
            alignment: 'right',
            hidden: false,
            title: 'Second Chapter',
            // image: './path/to/image/source.png',
            description: "This section presents the GLAD 2019 Alerts dataset. It's a geojson file that's hosted somewhere. <br> \
                            The layer was loaded as invisible when the map was created, and only became visible when entering this 'chapter'. <br> \
                            Also demonstrated here: Zoom, center, pitch (viewing from an angle instead of straight above), bearing (rotation)",
            location: {
                center: [-63.21047, -9.35312], // [-60.3, -7.35],
                zoom: 8.5,
                pitch: 45,
                bearing: 43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 { layer: 'Alerts', opacity: 1 },
                 { layer: "States", opacity: 0 }
            ],
            onChapterExit: [
                { layer: "Alerts", opacity: 0 },
            ]
        },
        {
            id: 'timelapse',
            alignment: 'left',
            hidden: false,
            title: 'Timelapse points',
            // image: './path/to/image/source.png',
            description: "This section makes the markers visible on the map. Clicking on a marker should open a pop-up. <br> \
                             It's still a little buggy because sometimes the text box makes the marker un-clickable. <br>\
                             Notice that the red layer is now hidden again",
            location: {
                center: [-56.3, -5.35],
                zoom: 5.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: "Alerts", opacity: 0 },
                { layer: "States", opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'timelapse-big',
            alignment: 'center',
            hidden: true,
            title: 'Timelapse - bigger picture',
            // image: './path/to/image/source.png',
            description: "a chapter without a text box: zoom out to see all the timelapse markers",
            location: {
                center: [-56.3, -5.35],
                zoom: 4.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: "Alerts", opacity: 0 },
                { layer: "States", opacity: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'choropleth',
            alignment: 'center',
            hidden: false,
            title: 'Deforestation per state',
            // image: './path/to/image/source.png',
            description: "This chapter shows the choropleth. Data is currently served from file, but should be served by express server (the flask endpoint is /sumarea)",
            location: {
                center: [-56.3, -5.35],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'addStatePopups',
            onChapterEnter: [
                { layer: "Alerts", opacity: 0 },
                { layer: "States", opacity: 0.7 }
            ],
            onChapterExit: []
        },
        {
            id: 'choropleth2',
            alignment: 'center',
            hidden: true,
            title: 'Deforestation per state',
            // image: './path/to/image/source.png',
            description: "This text box is invisible",
            location: {
                center: [-56.3, -5.35],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'testCallback',
            onChapterEnter: [
                { layer: "Alerts", opacity: 0 },
                { layer: "States", opacity: 0.7 }
            ],
            onChapterExit: []
        },
        {
            id: 'choropleth3',
            alignment: 'right',
            hidden: false,
            title: 'Deforestation in Rondônia',
            // image: './path/to/image/source.png',
            description: "The brazilian state Rondônia is the most deforested place in the Amazon. The area deforested in Rondônia since 2008 is equivalent to 10 times the size of Berlin",
            location: {
                center: [-63.30602, -10.12598],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'testCallback',
            onChapterEnter: [
                { layer: "Alerts", opacity: 0 },
                { layer: "States", opacity: 0.3 }
            ],
            onChapterExit: []
        }
    ]
};
