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

This section shows the main drivers of deforestation. Using findings from DS Team we created 2 charts to visualize their data results using Chart.js.
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

![areakm_trends_alltimes](https://user-images.githubusercontent.com/60686512/125079357-cac3b480-e0c3-11eb-9d28-782ba46c0655.png)

- From this visualization, 2008 is extremley high, while, for the most part, trends dip from 2009 - 2017.
- Discovering from research, Brazil saw a decline in deforestation rates from 2008 to around 2018.
  According to an article published November 2020 by [BBC](https://www.bbc.com/news/world-latin-america-55130304), in collaboration with Prodes data:
  > "Amazon deforestation highest since 2008"

Why? [BBC](https://www.bbc.com/news/world-latin-america-55130304) states:

> "Scientists say it has suffered losses at an accelerated rate since Jair Bolsonaro took office in January 2019.
> The Brazilian president has encouraged agriculture and mining activities in the world's largest rainforest."

Thank you for reading.

---

### DS Pavai

---

### DS Yulia Guseva

---

### DS Oyeyinka Akinloye

---

## If we had more time

**[UX]**

The next steps would be the following:

1.  conduct of user testing with the first complete prototype
2.  further development of scenarios and storyboards accordingly
3.  application of the results of test and repetitive improvement of the web application. After deployment, it is necessary to find methods to approach users, help them visit the web app recurrently, and create a UX value loop. Furthermore, similar apps and websites can be analyzed and referred for positioning the web app in the market.

**[WD]**

We would try to get the App running with ReactJS. Since the Mapbox Template we used was very sensitive to changes, when adding features and functions or even sections, we decided to stick with plain Javascript for this first prototype. If we had more time I would try to split up the code in different React components without breaking the funcitonality of the scrollytelling map. This would make the App more streamlined and the code even easier to read.

## Final words

[...]
