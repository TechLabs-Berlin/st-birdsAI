var config = {
    style: 'mapbox://styles/neryfu/ckqnf8c360aqf17vvgkfysjh4',
    accessToken: 'pk.eyJ1IjoibmVyeWZ1IiwiYSI6ImNrb3g0ZGg0NzBjaXIydnBkaDhmNjEydnMifQ.xAcvXosphr3xX8thBLwUXg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    background: true,
    use3dTerrain: false,
    title: 'BirdsAI',
    subtitle: '',
    byline: '',
    headerText: 'A story of the past, present, and future of the Amazon rainforest in Brazil from a bird\'s-eye view. \n\nSwipe up to begin',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'intro',
            alignment: '',
            hidden: false,
            title: '',
            // image: './path/to/image/source.png',
            description: 'The Amazon rainforest is the world\'s largest rainforest. 60% of the Amazon is located in Brazil.',
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
                { layer: "state-label", opacity: 0 },
                { layer: "country-label", opacity: 1 },
                { layer: "mapbox-satellite", opacity: 0 },
                { layer: "States", opacity: 0 },
                { layer: "sad-alerts", opacity: 1 },
                { layer: "ESM", opacity: 0 }
                
            ],
            onChapterExit: [
                { layer: "state-label", opacity: 0 },
                { layer: "country-label", opacity: 0 },
                { layer: "sad-alerts", opacity: 1 },
            ]
        },
        {
            id: 'ESM',
            alignment: 'left',
            hidden: false,
            title: 'The Amazon rainforest is disappearing',
            // image: './path/to/image/source.png',
            description: 'Based on observed trends from the last 12 years, it is projected that if rates do not slow down, by 2026 we will see an increase of almost 200% in deforestation',
            location: {
                center: [-58.3, -6.35],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'createSliderElement',
            onChapterEnter: [
                { layer: "sad-alerts", opacity: 1 },
                { layer: "States", opacity: 0 },
                { layer: "ESM", opacity: 1 }
            ],
            onChapterExit: [
                { layer: "sad-alerts", opacity: 0 },
            ]
        },
        {
            id: 'ESM-2',
            alignment: 'right',
            hidden: true,
            title: 'The Amazon rainforest is disappearing',
            // image: './path/to/image/source.png',
            description: 'Based on observed trends from the last 12 years, it is projected that if rates do not slow down, by 2026 we will see an increase of almost 200% in deforestation',
            location: {
                center: [-58.3, -6.35],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'createSliderElement',
            onChapterEnter: [
                { layer: "sad-alerts", opacity: 1 },
                { layer: "States", opacity: 0 },
                { layer: "ESM", opacity: 1 }
            ],
            onChapterExit: [
                { layer: "sad-alerts", opacity: 0 },
                { layer: "ESM", opacity: 0}
            ]
        },
        {
            id: 'timelapse',
            alignment: 'left',
            hidden: false,
            title: '',
            // image: './path/to/image/source.png',
            description: "Forest loss in the amazon can even be seen clearly from space. Tap the markers to open a time lapse view",
            location: {
                center: [-56.3, -5.35],
                zoom: 4.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{ layer: "mapbox-satellite", opacity: 1 },
                { layer: "sad-alerts", opacity: 0 },
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
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ { layer: "mapbox-satellite", opacity: 1 },
                { layer: "sad-alerts", opacity: 0 },
                { layer: "States", opacity: 0 }
            ],
            onChapterExit: [
                { layer: "mapbox-satellite", opacity: 0 }
            ]
        },
        // {
        //     id: 'timelapse-big2',
        //     alignment: 'center',
        //     hidden: true,
        //     title: 'Timelapse - emtpy chapter',
        //     // image: './path/to/image/source.png',
        //     description: "an emtpy chapter to create more space for the user to scroll.",
        //     location: {
        //         center: [-56.3, -5.35],
        //         zoom: 4.5,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [ { layer: "mapbox-satellite", opacity: 1 },
        //         { layer: "sad-alerts", opacity: 0 },
        //         { layer: "States", opacity: 0 }
        //     ],
        //     onChapterExit: [
        //         { layer: "mapbox-satellite", opacity: 0 }
        //     ]
        // },
        {
            id: 'choropleth',
            alignment: 'right',
            hidden: false,
            title: 'Deforestation per state',
            // image: './path/to/image/source.png',
            description: "The situation is worse in some states than others. In the state of Rondônia, 8,561 square km of rainforest were cut down since 2008 - an area equivalent to 10 times the size of Berlin.",
            location: {
                center: [-56.3, -5.35],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'addStatePopups',
            onChapterEnter: [
                { layer: "state-label", opacity: 1 },
                { layer: "sad-alerts", opacity: 0 },
                { layer: "States", opacity: 0.8 }
            ],
            onChapterExit: [
                { layer: "sad-alerts", opacity: 0 }
            ]
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
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: "sad-alerts", opacity: 0 },
                { layer: "States", opacity: 0.8 }
            ],
            onChapterExit: [
                
            ]
        },
        // {
        //     id: 'choropleth3',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'Our appetite for (any kind of) meat has shrinked the Amazon by 17% in the last 50 years.',
        //     // image: './path/to/image/source.png',
        //     description: "The brazilian state Rondônia is the most deforested place in the Amazon. The area deforested in Rondônia since 2008 is equivalent to 10 times the size of Berlin. In 2018 alone, Brazil exported some $6 billion worth of beef, more than any other country in history. Jaru, Rondônia, is home to one of the biggest slaugtherhouses in Brazil. Which, after it's current expansion is complete, will kill one cow every eight seconds.",
        //     location: {
        //         center: [-63.30602, -10.12598],
        //         zoom: 5,
        //         pitch: 40,
        //         bearing: 2
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         { layer: "sad-alerts", opacity: 0 },
        //         { layer: "States", opacity: 0.3 }
        //     ],
        //     onChapterExit: [
        //         { layer: "state-label", opacity: 0 },
        //         { layer: "sad-alerts", opacity: 0 },
        //         { layer: "States", opacity: 0 }
        //     ]
        // },
        // {
        //     id: 'second',
        //     alignment: 'right',
        //     hidden: false,
        //     title: 'Time Series',
        //     // image: './path/to/image/source.png',
        //     description: "Using an exponential smoothing model to forecast future trends, shown here are the predictions for the years from 2020 to 2026 for the rate of deforestation (area km squarred) in the combined 9 states of the Legal Amazonia.",
        //     location: {
        //         center: [-63.21047, -9.35312], // [-60.3, -7.35],
        //         zoom: 8.5,
        //         pitch: 45,
        //         bearing: 43.2
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //          { layer: "sad-alerts", opacity: 0 },
        //          { layer: "States", opacity: 0 },
        //          { layer: "mapbox-satellite", opacity: 0 }
        //     ],
        //     onChapterExit: [
        //         { layer: "mapbox-satellite", opacity: 0 },
        //         { layer: "sad-alerts", opacity: 0 }
        //     ]
        // },
        
    ]
};
