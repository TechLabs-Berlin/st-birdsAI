# BirdsAI

A story of the past, present, and future of the Amazon rainforest in Brazil from a bird's-eye view.

## Introduction

When considering our consuming habits, we are sometimes displaced, distant from any environmental repercussions. Specifically, we are so far from the Amazon, that often, deforestation is invisible to us. Even when we see information about it in headlines, often it is not relatable and hard to picture or see the connection between us, as individuals, and the deforestation in Brazil.

This project 'BirdsAI' is an attempt to bring awareness to the deforestation in the Amazon, through forming a connection between the user and the Amazon rainforest. By showing what deforestation looks like, the leading causes of deforestation, and deforestation rates, we wish to form a more comprehensive picture of our relationship with the Amazon.

BirdsAI was developed as an interactive Scrollytelling story, which combines data visualizations on maps, as well as charts, textual information and a deforestation area counter.

---

## Team: UX

**So Jin Park**

**Tech Stack**

Figma, Studio Mapbox, UX Pressia, Illustrator, Photoshop, GoogleForm

**Research, User Interview, User Survey**

In order to define the target group, online research was conducted on the following topics: environmental awareness, recent consuming habits, demographics of smartphone users and digital literacy. Environmental awareness tends to increase continuously in recent years, especially during the COVID-19 pandemic. Also, consumers between 18 and 39-year-old inclined to change their consuming habits (much) more easily than other age groups. This may indicate that if they become aware of the deforestation issue, they might try more often to change their current habits of buying certain products related to it. Regarding the Internet usage time per devices, mobile takes up to 55%, Desktop 42% and tablet only 3% respectively as of February 2021. When we look at the mobile usage closely, it consists of 90% of using apps and 10% browsing on the Internet. Meanwhile, 72% of the surveyees and interviewee were not aware of the deforested Amazon, according to the user interview and user surveys. However, they wished to acquire information about its current state and find ways to protect it.
![sustainability_afterCOVID](https://user-images.githubusercontent.com/60686512/125176870-714caa00-e1d7-11eb-9c91-fadc196bd528.jpg)

**Definition of the Target Group and the Type of Product**

Based on the information obtained from research and survey, the type of product and the target audience were set: a web application for all residents in Europe, who are older than 6 years old – adults may show and explain it to children and adolescents – and have access to smartphones or computers. Users prefer apps over mobile sites due to user experience, speed, extra features and special offers. However, considering the technical conditions and limited time frame for this project, we decided to make a web application. This web app tells a story about the current and future state of the deforestation and the reasons behind it. The most easily acquired user group would be those who are already aware of the environmental issues, such as Sandra, one of our personas.

**Persona: Sandra**

Sandra is willing to know more about environmental issues and take measures, which she can do easily in daily life. Although, she is a workaholic. Thus, she rarely has time and energy to look into those issues. She recently noticed that more articles and new researches about glaciers and the rainforest are being published. She spontaneously decides to take a swift look into the deforestation, because she just read an article about it. She searches 'deforestation' on the Internet and discoveres the web application of BirdsAI and clicks the link.

**Design of the Product (UI)**

We visualised the story for the user using Mapbox, a provider of custom online maps for websites and applications. UX designer made custom styles for the map and conducted user tests with 8 selected styles. Thereafter, the visual identity was created and the web application were designed according to it as well as the logo. Due to various types of data, main challenge was to keep interface simple and intuitive. After considering options for the information structure, we decided to use 'scrollytelling', which can present our data in the simpliest way and keep users engaged through interactive function. Once we settled on finding the correct data, our next challenge was to work together as a team to visualize it. This included all disciplines of the team – data science, web development and UX design.

https://www.figma.com/file/kLjHiudCtCSFPlp4p4crXY?embed_host=notion&kind=&node-id=163%3A2&viewer=1

---

## Team: Webdev

[Evelien Dexters, Chukwuka Akibor, Nery Machtiger]

**Tech Stack**

Backend:

- Flask - Processing and serving datasets in 2 endpoints [Set up by Stephanie, DS Team]
- Express JS - Serving GeoJSON data, static files, and routes to flask end points

Frontend:

- HTML
- SASS/CSS
- JavaScript
- Mapbox GL JS - for visualizations and content displayed on maps
- Scrollama - for Scrollytelling

**Interactive Scrollytelling**

birdsAI was developed as an interactive Scrollytelling story, which combines data visualizations on maps, as well as charts, textual information and a JS hectare counter. As the user swipes (or scrolls) through the story, new 'chapters' with content dynamically appear and change. Interaction with the story is encouraged: the different 'chapters' include a slider element for displaying deforestation predictions per year, as well as dynamic charts, clickable markers/points on the map and popups that reveal additional data.

We chose **Mapbox GL JS** to power our map visualizations, due to its ease of use and the wide variety of possible visual and functional elements that this library offers: High res satellite views, choropleth and bubble maps, interactive slider and popup elements and more.

For the scroll events, we use a JavaScript library called **Scrollama**, which simplifies the creation of Scrollytelling sites using the IntersectionObserver API. This is common choice for Scrollytelling with maps, often used in journalism.

For displaying the charts, we use **Chart.js**, an open-source JavaScript charting library with visually appealing solutions for plotting line and pie charts (among other things).

Additionally, a hectare counter was created using pure **JavaScript**. It provides an estimate of the area of primary forest lost in Brazil for a given moment in the day. The estimate is calculated using the user's current time and the average rate of forest loss in Brazil. A line of text is added under the number of hectares for illustration, and changes dynamically as the number grows throughout the day. Further explanations can be found in the documentation under the counter.js file.

**Mapbox visualizations**

Since our data processing does not happen 'on demand' (machine learning jobs tend to take a long time), most of the logic in our Scrollytelling webapp happens at the frontend. The already processed datasets that feed our Mapbox visualizations are either served from end points in the flask server, or as static files from the express server.

Our Mapbox visualizations are based on datasets in GeoJSON format. These datasets are the fruits of our DS team's work. They are added as layers to the map at runtime from source (through the express server). As the user progresses through the story, scrolling events trigger the display of different layers and other elements on the screen.

The config.js file holds configuration for the map and the content for each chapter, as well as callback functions that are called in each chapter to provide additional functionality. It follows the structure suggested in this [Mapbox Scrollytelling tutorial](https://blog.mapbox.com/how-to-build-a-scrollytelling-map-ead6baf2cd1b) [link].

**Structure**

We split up the different components of the app into their own JS files, so we wouldn’t end up with one gigantic script. These closely resemble the division of sections in the index.html file:
map.js holds the code responsible for creating all HTML and all functionality of the scrollytelling part with map visualizations of the app.
graphs.js is crucial for the HTML and chart visualizations. counter.js displays all that is in the counter section. Last but not least, the social share buttons have their own social.js script.

- Time series chapter:

The first interactive chapter in the story. It shows predictions on deforested area for each year in 2020-2026. The data was based on predictions from DS team, then transformed into GeoJSON format. A slider element was created to select which year to show. The slider controls a filter expression that returns only the selected year from the dataset. A bubble (circle) on the map grows 12% each year in accordance with the values in the dataset. Another javascript function makes slider appear when correct chapter is entered and disappear on exit.

<img width="461" alt="Bildschirmfoto 2021-07-11 um 08 57 15" src="https://user-images.githubusercontent.com/49592794/125185656-5ce3ce00-e226-11eb-83d1-647ff2fdb18e.png">


- Time lapse chapter:

Satellite time lapse animations of two hand picked locations. This chapter adds markers to the map, with popups containing text and images - gif animations served by express server from static files. When the user clicks the markers, the popups appear. Time lapse animations were created using The Copernicus EO browser.

<img width="461" alt="Bildschirmfoto 2021-07-11 um 08 57 36" src="https://user-images.githubusercontent.com/49592794/125185706-987e9800-e226-11eb-8e84-3ce4a2554ac6.png">

- Choropleth map:

Shows the differences in deforested area between states of Brazil. Deeper color means larger value (more area deforested). This map uses GeoJSON data served from flask and express. When the user clicks a state on the map, a pop up appears, revealing the features from the dataset. The deforested area (in km<sup>2</sup>) appears as text in the pop up.

<img width="461" alt="Bildschirmfoto 2021-07-11 um 08 57 48" src="https://user-images.githubusercontent.com/49592794/125185694-8997e580-e226-11eb-91b3-60a76ddb090f.png">

- Charts section:

This was done using the npm chart.js library. The chart is an interactive chart as information regarding the deforestation drivers can be gotten from it.  

This section shows the main drivers of deforestation. Using findings from DS Team we created 2 charts to visualize their data results.

<img width="461" alt="Bildschirmfoto 2021-07-11 um 08 57 56" src="https://user-images.githubusercontent.com/49592794/125185721-aa603b00-e226-11eb-9439-7971842b5be6.png">
<img width="461" alt="Bildschirmfoto 2021-07-11 um 08 58 01" src="https://user-images.githubusercontent.com/49592794/125185726-b51ad000-e226-11eb-94c1-749b6be4e5ef.png">

- Counter section:

A counter that counts the area of forest lost per day in hectares using pure Javascript. The counter starts counting upwards from zero every day at midnight. Different known areas in Berlin are displayed with their respective sizes for comparison, so user can get more of an idea about the rate of forest loss.

<img width="461" alt="Bildschirmfoto 2021-07-11 um 08 58 09" src="https://user-images.githubusercontent.com/49592794/125185735-c663dc80-e226-11eb-8b3e-c00de98f61e8.png">

**SASS**

A pre-processor for CSS (SASS) was used as a way to keep the styles organized as well. SASS has various features that are useful for creating more manageable stylesheets. Such features include: variables, nesting selectors, inline imports and more.
A SASS Boilerplate by Hugo Giraudel was used as a pattern to make the code more readable and easily accessible [[Link](https://github.com/KittyGiraudel/sass-boilerplate) ]. From the initial 7 folders, only 5 that were relevant to our project were used. The main.scss file holds all the imports from these folders.

## Team: Data Science

### A look into time series

**Stephanie Mennear**

> [Prodes dataset](https://data.globalforestwatch.org/datasets/gfw::prodes-deforestation-in-amazonia/about) </br>

The Prodes dataset offers insight into the deforestation rates of the Legal Amazonia in Brazil. It logs datapoints from all nine countries in which the amazon forest resides. The data points are generated from satellite images, spanning from the years 2008 to 2019.

While exploring the dataset, I observed a pattern of time and forest loss. I decided then to explore the path of time series predictions.

**Hypothesis**: Deforestation rates, that are measured in areakm, grow yearly.

##### Version 1:

> Data prep:

To test the rate of deforestation yearly, the Prodes dataset was processed in preperation for a time series.

Due to the nature of the weather and cloud coverage over the Amazon rainforest, satellite images of deforestation are not recorded consistently, i.e. many dates are missing due to unusable satellite images.

Because the clouds obstruct the image of the satellite data, there are no consistent patterns for date ranges that the data is collected; most of the satellite images are taken from August - September, which are the months of the year that the Amazon is not mostly covered by clouds. It is during this time, that the satellite images can be taken for evaluation.

To prepare for forecasting, the dataset is separated into the unique states and organized and separated by year into new dataframes. The dates are reindexed as a date time index.

Each respective new dataframe is then reformatted to cover the span of a year, without losing or adding any values to the original data.

The intention is to look at data from a yearly perspective. Thus, the method of preparing the data and the reason the data should not be used for any other purpose as it could give the user false information.
<br>

### Methods:

_below all of the data, unless otherwise stated, is using the singular state of Amazonas_
**Testing for white noise, stationary, non-stationary**

- The first step to visualize the type of time series data is to use the `seasonal_decompose` method from `statsmodels`.

  - Multiplicative:

    ![multiplicativesd](https://user-images.githubusercontent.com/60686512/125081562-7110b980-e0c6-11eb-8f9e-1676cf91948a.png)

  - Additive:

    ![additivesd](https://user-images.githubusercontent.com/60686512/125081698-96052c80-e0c6-11eb-8fc7-7da0b485ba1f.png)

  * The above figure uses seasonal_decompose to visualize if there are any trends in the time series. Specifically, this is using the data for the state of Amazonas, years from 2008-2019.
    Observing data from the seasonal_decompose method, there is reason to beleive there are no trends and in addition that the time series could be white noise. <br>

- The next step is to look at the **autocorrelation** of the datapoints. Auto correlation results can show whether the data is positively, negatively, or independent of itself (i.e time vs areakm)

  ![autocorrelation](https://user-images.githubusercontent.com/60686512/125081757-a61d0c00-e0c6-11eb-9b6c-a91a2bff85e7.png)

  - The above `lag_plot` verifies whether a time series is random. Based on the visualization, it provides more confirmation that time series could be white noise.

- Next is to look at the `acf_plot`

  ![autocorrelationa](https://user-images.githubusercontent.com/60686512/125081805-b634eb80-e0c6-11eb-820c-9cec38332b9e.png)

  - The above plot visualizes whether the data has correlation; do variables act independently of one another. As with the `lag_plot`, this plot confirms that there is no correlation as well as no seasonality.
    Similarly, the pacf plot resembles the acf plot.
    <br>

- As a last method to understand the data, the Augmended Dickey-Fuller (ADF) Test was applied. This is to understand further if the time series is stationary or non stationary. By doing this, it will further confirm that the dataset is sationary, and possibly white noise. The results of the ADF test for the time series are:

        Augmented Dickey-Fuller Test:
        ADF test stats           -1.756014e+01
        p-value                   4.100536e-30
        number of lags used       5.400000e+01
        number of observations    3.939200e+04
        critical value (1%)      -3.430516e+00
        critical value (5%)      -2.861613e+00
        critical value (10%)     -2.566809e+00
        Strong evidence against null hypthesis.
        Reject null hypothesis.
        Data has no unit root and is stationary

##### At this point, the data set is not ideal for time series forecasting.

#### Version 2:

> Data prep:

After looking at the satellite images, I came to the discovery that the areakm data points detailed the measurement of deforestation from the previous year. Therefore, after the data is cleaned, the cumulative sum is the value the time series forecast model will use.

To adjust the methods to test the hypothesis, instead of using the data points of the areakm recorded each year, the cumulative sum is calculated and added to the dataframe.

From here, I repeated all the above steps, but with cumulative sum instead of independent data points.

- Plot of cmmulative areakm values (y) and time (x):

  ![amlineplot](https://user-images.githubusercontent.com/60686512/125081837-c3ea7100-e0c6-11eb-8e53-8b8876f88993.png)

  - Visualized here is a better look at the trends of deforestation.

- the `seasonal_decompose` visualizations using the time series.

  ![ammonthsd](https://user-images.githubusercontent.com/60686512/125081886-d49ae700-e0c6-11eb-922a-2ca299eef93b.png)

  - Here it shows strong seasonality and clear trends. The residual is not as strong as in version 1.

- ADF results:
  > Augmented Dickey-Fuller Test:
  > ADF test stats -3.087875
  > p-value 0.027464
  > number of lags used 0.000000
  > number of observations 4382.000000
  > critical value (1%) -3.431843
  > critical value (5%) -2.862200
  > critical value (10%) -2.567121
  > Strong evidence against null hypthesis.
  > Reject null hypothesis.
  > Data has no unit root and is stationary

##### Before moving forward, and testing/refining models, I wanted to verify if the trends are similar in all states. Attempted models can be seen in the collab notebook under section "CUMMALATIVE SUM--> text train split". Please refer to this section to view failed attempts with ARIMA, SARIMA models.

As my method stands, I have cumulative all the states into individual dataframes, to predict time series on each state. At this point, I did not think whether the states would have different trends or not. (As up to this point, I've only been using the dataframe for the state of Amazonas).

- Plotting the line plots of areakm cummulative sum vs time:

  ![cumsumallStates](https://user-images.githubusercontent.com/60686512/125081932-debce580-e0c6-11eb-8fc5-186c33a367dd.png)

  - Shown here, all of the trends for the cumulative sum of area deforested from 2008-2019 = each state has different rates of deforestation. At this point, I realize that I would have to fit models to each individual state, or I would have to start over and use all states together. Due to time limitations, I decide to go for the latter.

##### Version 3:

> Data Prep:

To further adjust to the time series, I added all the states into one dataframe. To note, the cumulative areakm value is the value of measurement.

In order to prepare the dataset for the time series forecast model, the data must be prepared with a datetime index, as well as the data points to fit the date time index. Because of the cumulative data points (due to cloud cover), the cumulative method works as follows:

1. The data points for each specific state of each specific year are redistributed to fit 365 days.
2. The left over rows that did not fit into 365 days are summed, and divided amoung the 356 rows evenly. This means- each row value is added with the divided remaining value. This was to keep the integrity of the total amount of areakm that was deforested, and to prepare the dataset for yearly forecasting.
3. Due to the method that it was distributed, no daily, or monthly trends should be observed. Only yearly.

Time series predictions:
The model that was the most successful is an exponential smoothing model that predicts rates until 2026.
I split the dataset (`df_y`) into test and train. For a recap, the dataset being used is the cumulative sum of areakm deforested of every state indexed by year. The time series starts from 2008 and ends at 2019.
Below is the model.

```bash
train_yearly = df_y.iloc[:9]
test_yearly = df_y.iloc[8:]
fitted_model = ExponentialSmoothing(train_yearly['cumsum'], trend='mul', seasonal_periods=1).fit()
test_predictions = fitted_model.forecast(10)
```

Visualized:

```bash
train_yearly['cumsum'].plot(figsize=(12,5), legend=True, label='Train')
test_yearly['cumsum'].plot(legend=True, label='Test')
test_predictions.plot(legend=True, label='Prediction')
plt.title('Predictions from 2017 - 2026 \nAreakm of total deforestation \n All 9 State of Legal Amazonia', fontsize=20)
plt.xlabel('Years', fontsize=12)
plt.ylabel('Areakm total deforestation', fontsize=12)
```

![ExponentionSmoothingForecastALLSTATES](https://user-images.githubusercontent.com/60686512/125075938-8c2bfb00-e0bf-11eb-8b4e-222d9f3f5687.PNG)

Based on patterns and observed trends from the last 12 years, it is projected\* that every year, 12 percent more of the current rainforest disappears due to farming. This means that if rates do not slow down, by 2026 we will see an increase of almost 200% the amount of deforestation rates that we currently see in 2020.

According to `Philip Fearnside, a scientist at Brazil’s National Institute of Amazonian Research in Manaus*`, in and interview with [Sciencemag.org](https://www.sciencemag.org/news/2019/11/brazil-s-deforestation-exploding-and-2020-will-be-worse):

> "The deforestation rate in the following months exploded to levels far above those for the same months in the previous year [according to DETER data], reaching 222% above the 2018 value in August. This part of the Bolsonaro effect will only be reflected in the PRODES numbers that will be released a year from now."

\*quoted from the above article

### Visualizations

Independent of the timeseries data visualization, using the same Prodes dataset, I visualized the rates of deforestation by State, as discovered that each state is impacted differently.

- Using the areakm values (not the cumsum() values as in the time series method) the total amount of deforested areakm for each state over the total years 2008-2019 are calculated.

```bash
state_area = df.groupby(by='STATE')['AREA_KM'].sum().sort_values(ascending=False).reset_index()
state_area = state_area.sort_values(by='AREA_KM', ascending=True)
```

Visualized:

![bargraph](https://user-images.githubusercontent.com/60686512/125077457-67d11e00-e0c1-11eb-83f6-780830074f86.png)

Some articles explaining the data:
[WWF on deforested states in Brazilian Amazon](https://www.wwf.org.co/en/?2342/Brazilian-Amazon-environmental-awareness-higher-in-deforested-areas)

> "Rondonia, the most deforested Amazonian state, has lost 31 percent of its forests and most of the remaining areas are degraded.
> This is similar to what happened in Pará, the second most deforested state in the Amazon region, with 18 percent of its forests having been lost."

##### An overall view:

Below is a visualization of every each state's areakm deforestation rates plotted from 2008 - 2019.

![areakmTrends](https://user-images.githubusercontent.com/60686512/125196061-a1885d00-e258-11eb-8338-003a1e02b3af.png)

- THe above visualizes the years 2008-2019. It is not clear by the marks, so for readability, each group of peaks represents a year. 
- From this visualization, 2008 is extremley high, while trends dip from 2009 - 2017.
- Discovering from research, Brazil saw a decline in deforestation rates from 2008 to around 2018.
  According to an article published November 2020 by [BBC](https://www.bbc.com/news/world-latin-america-55130304), in collaboration with Prodes data:
  > "Amazon deforestation highest since 2008"

Why? [BBC](https://www.bbc.com/news/world-latin-america-55130304) states:

> "Scientists say it has suffered losses at an accelerated rate since Jair Bolsonaro took office in January 2019.
> The Brazilian president has encouraged agriculture and mining activities in the world's largest rainforest."

Thank you for reading.

---

### DS Pavai

To examine types of dominant drivers of deforestation, we downloaded the tree cover loss data from

[tree cover loss dataset](https://gfw.global/3pu7Hjc) </br>

The dataset contains deforested area from 2001 to 2020. It shows that there are six types of deforestation drivers with commodity driven deforestation being the largest driver which is shown in the following plot.

![deforestation drivers percentage barplot](https://github.com/TechLabs-Berlin/st21-birdsAI/blob/main/data/deforestation_drivers_percentage.png)

A stacked bar plot showing the areas deforested by six different types of drivers, over the years 2001 – 2020, was plotted from the tree cover loss data which is shown below. It can be seen that the  commodity driven deforestation (like meat, metals, and palm) is the largest driver all through the recorded years.

![deforestation drivers stacked barplot](https://github.com/TechLabs-Berlin/st21-birdsAI/blob/main/data/deforestation_drivers_stack.png)

A significant percentage of deforestation in the Amazon rainforest area of Brazil is due to mining activities. The mining data used for the project was downloaded from 

[mining dataset](https://beta-gfw.opendata.arcgis.com/datasets/brazil-mining-concessions/explore?location=-14.246250%2C-54.241550%2C4.70&showTable=true) </br>

This dataset contains information on mining activities for 340 minerals in 27 states of Brazil during 1935 – 2015. The mining data was cleaned to remove the duplicate rows and NaN (in Portuguese) values. Deforestation data contains deforested area only for nine states in Brazil during 2008 – 2019, so to compare mining and deforestation data, we created a combined data, with mining and deforestation data, for nine states in Brazil during 2008 – 2015 was created. 

We examined the percentage of mining-related deforestation from 2008 to 2015, and the following plot shows that mining-related deforestation was 14% in 2008, peaked at 48% in 2012, and later declined to 30% in 2015.

![deforestation drivers percentage bargraph](https://github.com/TechLabs-Berlin/st21-birdsAI/blob/main/data/mining_%25_deforestation.png)

The following plot shows the top 10 minerals causing the largest area of deforestation during 2008 – 2015. It shows that gold, iron, and copper ore are the top three minerals causing mining-related deforestation.

![top 10 minerals](https://github.com/TechLabs-Berlin/st21-birdsAI/blob/main/data/deforested_area_top10_minerals.png)
deforested_area_top10_minerals.png

A lasso regression for feature selection was carried out to find the minerals that are important in predicting the mining-related deforestation, which is shown in the following plot. The minerals with non-zero values of lasso coefficient are the important features in prediction.

![lasso mining](https://github.com/TechLabs-Berlin/st21-birdsAI/blob/main/data/lasso_mining%20.png)lasso_mining.png

The prediction for mining-related deforestation needs few other parameters which are the availability of minerals and its location (which are not available) so we decided not to perform prediction.

### DS Yulia Guseva

Whereas the Prodes dataset provides extended information on deforestation rates in Amazonia in Brazil, it does not provide any information on causes of deforestation and any relationship between consumers in Europe and deforestation rates. To explore the causes of deforestation, I explored the [World Development Indicators](https://databank.worldbank.org/source/world-development-indicators) and [FAOSTAT](http://www.fao.org/faostat/en/?#data/RL) datasets.

As both datasets are extremely large and only small part of the data was related to agricultural development in Brazil, I had to retrieve information on Livestock Production Index, Crop Production Index and Palm Oil Production Area, as well as other land use related information separately. After constructing and cleaning up datasets, Lasso Regression was used to identify features that are correlated with the forest area loss significantly. Firstly, 2 two features 'Livestock Production Index' and 'Stock Production Index' were identified.

![LassoRegression](https://github.com/TechLabs-Berlin/st21-birdsAI/blob/db12595f1b556058d062aa5aebee8aeafff54aa4/data/variables_lasso.png)

Secondly, the Palm Oil Area Harvested was identified as a significant feature in the second round.

![LassoRegressionPalmOil](https://github.com/TechLabs-Berlin/st21-birdsAI/blob/db12595f1b556058d062aa5aebee8aeafff54aa4/data/Lassopalm.png)

After the data for the forest area and significant causes were provided to the backend, I started to explore machine learning models to predict forest area and Livestock/Crop Production Indexes with three machine learning models: Logistic Regression, Random Forest Classifier, Ridge Regression. Unfortunately, none of the models delivered satisfying results. That could be explained by the rather small size of the dataset (28 rows) and by the fact that I didn't use Time Series.

---

### DS Oyeyinka Akinloye
The dataset (shapefile) deployed for the deforestation's location prediction shows annual deforestation between 2008 and 2019 and was taking from 
'https://betagfw.opendata.arcgis.com/datasets/a37b42723a1b4a759fe51ee4e99f49da_0/about'. 

#### Data preprocessing
The dataset comes majorly with features that are more of intrinsic traits of deforestation, it does not have features that could be identified as either major or minor causes of the deforestation, which in a way a limitation on the prediction, but the Geo dat gave an option of geometry by which we could improvised for longitude and latitude to be the target features in order to predict location of deforestation. The following features 'day', 'month', 'year', 'state', 'area_km' were used for predicting the 'longitude' and 'latitude' as target features. By longitude and latitude, the location of deforestation can be represented on map. The figure below shows the histogram distribution of longitude and latidude on the train_set population.

![image](https://user-images.githubusercontent.com/38508834/125186801-b7802880-e22c-11eb-9aa8-ccc6cec6594e.png)

#### Modelling
After cleanup and preprocessing, three different models were deployed in the predicting the target features for the location of deforestation. Xgbooost regressor performed better than others. However, the accuracy of the model was not precise enough because of the problem of longitude and latitude not being able to represent a three dimensional space with two features (i.e. not good enough to represent 3D space in 2D with the two target_features). 

#### Ridge Regression Model
The metrics value for this Ridge model on validation set are listed below:
MAE: 1.929156 lon; MAE: 1.347259 lat
RMSE loss: 6.071610 lon; RMSE loss: 2.861498 lat
R^2 coefficient: 0.861630 lon; R^2 coefficient: 0.783521 lat.
Also the scatter plot shows the comparison of the look of actual data longitude and latitude to the predicted ones by Ridge model

![image](https://user-images.githubusercontent.com/38508834/125187069-12fee600-e22e-11eb-8851-1df5e9b80f80.png)

#### Decision tree Model
The metrics for this model are presented below:
MAE: 4.797137 lon; MAE: 1.862873 lat
RMSE loss: 28.544813 lon; RMSE loss: 5.593452 lat
R^2 coefficient: 0.349471 lon; R^2 coefficient: 0.576842 lat. 
This model have a close look to the actual dataset plot than the ridge regression model as shown below:

![image](https://user-images.githubusercontent.com/38508834/125187700-324b4280-e231-11eb-95ca-c8104cc10344.png)

#### Xgboost Model
Xgboost performed better in both metric and vizualization than decision tree and selected to be the workable model of the three.
MAE: 4.381586 lon; MAE: 1.711661 lat
RMSE loss: 25.236562 lon; RMSE loss: 4.552240 lat
R^2 coefficient: 0.424865 lon; R^2 coefficient: 0.655612 lat
The comparison plot of the longitude and latitude of the actual dataset to the predicted is shown below:

![image](https://user-images.githubusercontent.com/38508834/125187976-80ad1100-e232-11eb-996e-3317e81b1ce6.png)

#### Deployment
Prediction on test set using Xgboost got similar result to the that of validation. The scatter plot for the comparison look of both the actual and predicted  test set is shown below:

![image](https://user-images.githubusercontent.com/38508834/125188450-17c69880-e234-11eb-9935-b5123cc87e56.png)

#### Summary
End users can use the model for future prediction with the provision of the following features (day, month, year, state, area_km) used in training the model.                   With this functionality, the model can be easily handled.
A sample future prediction is presented below with provision of the following features (year, area_km, day, month, states):

![image](https://user-images.githubusercontent.com/38508834/125188938-1302e400-e236-11eb-89d3-a4d82fe7e80d.png)

However, with features that could have better implication on the prediction and target features that could represent the location on 3D space effectively, this model will perform more better.

## If we had more time

**[UX]**

The next steps would be the following:

1.  conduct of user testing with the first complete prototype
2.  further development of scenarios and storyboards accordingly
3.  application of the results of test and repetitive improvement of the web application. After deployment, it is necessary to find methods to approach users, help them visit the web app recurrently, and create a UX value loop. Furthermore, similar apps and websites can be analyzed and referred for positioning the web app in the market.

**[WD]**

We would try to get the App running with ReactJS. Since the Mapbox Template we used was very sensitive to changes, when adding features and functions or even sections, we decided to stick with plain Javascript for this first prototype. If we had more time I would try to split up the code in different React components without breaking the funcitonality of the scrollytelling map. This would make the App more streamlined and the code even easier to read.

From the backend perspective, we would try to serve most of the larger files from express connect to a database (MongoDB). We would write a logic for the Rest API to optimize the queries so as to only access only the data needed when necessary. Software Testing of the codes after development and before deployment using popular library such as mochai would also be taking into consideration. Also, we would also need to introduce some npm dependencies such as babel and eslint to futher improve the code while also properly documenting and commenting the coding for readability and future referencing. 

**[DS]**

We would definitely try to process satelite data and use them to train a model for recognizing deforestation patterns and detecting new areas indangered by deforestation. 

## Final words

We would like to thank the team at TechLabs Berlin for helping and guiding us through this learning journey. We appreciate the opportunity we had to work as a team and learn so much from eachother, as well as all the different tracks involved in this Project. Everybody put their on special touch on BirdsAI and we hope the TechLabs Berlin volunteers like what we have presented to them. 
