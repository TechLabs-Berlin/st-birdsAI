var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiZXZvLWRleCIsImEiOiJja3ByNzJtaXEzMW9hMnBvOGVucHNmMTBjIn0.HTRKElfhwcBU8n_7W6Hiyw',
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
                { layer: "2019 Alerts", opacity: 0 },
                { layer: "States", opacity: 0 }
            ],
            onChapterExit: [
                { layer: "2019 Alerts", opacity: 1 },
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
                 { layer: '2009 Alerts', opacity: 1 },
                 { layer: "States", opacity: 0 }
            ],
            onChapterExit: [
                { layer: "2019 Alerts", opacity: 0 },
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
                { layer: "2019 Alerts", opacity: 0 },
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
                { layer: "2019 Alerts", opacity: 0 },
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
            description: "This chapter will show the choropleth",
            location: {
                center: [-56.3, -5.35],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: "2019 Alerts", opacity: 0 },
                { layer: "States", opacity: 1 }
            ],
            onChapterExit: []
        }        
    ]
};
