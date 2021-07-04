var config = {
    style: 'mapbox://styles/neryfu/ckqnf8c360aqf17vvgkfysjh4',
    accessToken: 'pk.eyJ1IjoibmVyeWZ1IiwiYSI6ImNrb3g0ZGg0NzBjaXIydnBkaDhmNjEydnMifQ.xAcvXosphr3xX8thBLwUXg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    background: true,
    use3dTerrain: false,
    title: 'BirdsAI',
    subtitle: 'Monitoring deforestation from a birds eye view',
    byline: 'By a Digital Storyteller',
    headerText: 'This is a short story about the close relationship between the rainforest and our lives, no matter how far away we live from it. Behind many of the products we buy and use every day, the deforestation of the Amazon is hiding. So, what does deforestation look like from a bird\'s eye view?\
    Let\'s begin our journey.',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'intro',
            alignment: '',
            hidden: false,
            title: 'The Amazon rainforest spreads across nine countries...why focus on Brazil?',
            // image: './path/to/image/source.png',
            description: 'something intro about brazil and why the rainforest...?',
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
                { layer: "mapbox-satellite", opacity: 0 },
                { layer: "States", opacity: 0 },
                { layer: "sad-alerts", opacity: 1 },
                
            ],
            onChapterExit: [
                { layer: "sad-alerts", opacity: 1 },
            ]
        },
        {
            id: 'intro2',
            alignment: 'left',
            hidden: false,
            title: 'At current rates of deforestation,\
            27%\ of the Amazon will be without trees by 2030',
            // image: './path/to/image/source.png',
            description: 'Powered by murky sources of capital and rising demand for beef, a violent and corrupt frontier is now pushing into indigenous land, national parks and one of the most preserved parts of the jungle.',
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
                { layer: "sad-alerts", opacity: 1 },
                { layer: "States", opacity: 0 }
            ],
            onChapterExit: [
                { layer: "sad-alerts", opacity: 0 },
            ]
        },
        {
            id: 'choropleth',
            alignment: 'center',
            hidden: false,
            title: 'Deforestation per state',
            // image: './path/to/image/source.png',
            description: "Based on patterns and observed trends from the last 12 years, it is projected* that every year, 12 percent more of the current rainforest disappears due to farming. This means that if rates do not slow down, by 2026 we will see an increase of almost 200% the amount of deforestation rates that we saw in 2020. ",
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
                { layer: "sad-alerts", opacity: 0 },
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
            callback: '',
            onChapterEnter: [
                { layer: "sad-alerts", opacity: 0 },
                { layer: "States", opacity: 0.7 }
            ],
            onChapterExit: []
        },
        {
            id: 'choropleth3',
            alignment: 'right',
            hidden: false,
            title: 'Our appetite for (any kind of) meat has shrinked the Amazon by 17% in the last 50 years.',
            // image: './path/to/image/source.png',
            description: "The brazilian state Rondônia is the most deforested place in the Amazon. The area deforested in Rondônia since 2008 is equivalent to 10 times the size of Berlin. In 2018 alone, Brazil exported some $6 billion worth of beef, more than any other country in history. Jaru, Rondônia, is home to one of the biggest slaugtherhouses in Brazil. Which, after it's current expansion is complete, will kill one cow every eight seconds.",
            location: {
                center: [-63.30602, -10.12598],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: "sad-alerts", opacity: 0 },
                { layer: "States", opacity: 0.3 }
            ],
            onChapterExit: []
        },
        {
            id: 'second',
            alignment: 'right',
            hidden: false,
            title: 'Time Series',
            // image: './path/to/image/source.png',
            description: "Using an exponential smoothing model to forecast future trends, shown here are the predictions for the years from 2020 to 2026 for the rate of deforestation (area km squarred) in the combined 9 states of the Legal Amazonia.",
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
                 { layer: "sad-alerts", opacity: 0 },
                 { layer: "States", opacity: 0 }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'timelapse',
            alignment: 'left',
            hidden: false,
            title: 'Timelapse points',
            // image: './path/to/image/source.png',
            description: "President Bolsonaro\'s message is: the Amazon is open for business. Since his inauguration in January, the rate of deforestation has soared by as much as 92%, according to satellite imaging. See for yourself in below timelapse videos",
            location: {
                center: [-56.3, -5.35],
                zoom: 5.5,
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
                pitch: 0,
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
        
    ]
};
