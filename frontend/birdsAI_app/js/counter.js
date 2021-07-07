

document.getElementById('counter-div').innerHTML = 
'<h1 class="title">Hectares of primary forest <br><span id="highlight-word">lost today in Brazil</span></h1>\
      <div id="counter"></div>\
      <div id="info"></div>\
      <p id="disclaimer">\
        This is an estimate based on the average rate of primary forest loss in\
        the years 2016-2020.\
        <a href="https://gfw.global/3cptlA8">Source</a>\
      </p>';



var counter = document.getElementById('counter');
var info = document.getElementById('info');



// depending on what we want to show, select value for hectaresPerYear
// var hectaresPerYear = 10000000; // 10 million hectares of forest lost per year worldwide
// according to UN FAO estimation from 2010-2020

var hectaresPerYear = 1874000; // 1.874 million hectars of forest lost per year in Brazil
// calculated as average of 2016-2020 from here:
// https://gfw.global/3cptlA8

var secondsPerYear = 365 * 24 * 60 * 60; // days * hrs * minutes * seconds
var hectarsPerSecond = hectaresPerYear / secondsPerYear;

update();

function update() {
    var lastMidnight = new Date().setHours(0, 0, 0, 0); // sets the count to start 12am last night
    var now = new Date().getTime();
    var diffSeconds = (now - lastMidnight) / 1000   // the number of seconds passed today (since midnight)
    var hectaresToday = diffSeconds * hectarsPerSecond

    // if the number is euqal or larger than 1000, separate the first digit with a comma
    // i.e: show it as 1,234 instead of 1234
    var firstDigit = ('' + hectaresToday)[0]; // cast it to a string and select the first char
    var restDigits = ('' + hectaresToday.toFixed(2)).substr(1);

    if (hectaresToday > 999) {
        counter.innerText = firstDigit + ',' + restDigits;
    } else {
        counter.innerText = hectaresToday.toFixed(2);
    }

    // this part adds a line of text to help illustrate what the numbers mean
    // the line changes as the numbers grow throughout the day
    // TODO: find good comparisons to display
    if (hectaresToday > 0 && hectaresToday < 210) {
        info.innerText = "Hectare = equal to a square with 100-meter sides"
    } else if (hectaresToday < 355) {
        info.innerText = "Berlin's Tiergaten park is 210 hectares in size"
    } else if (hectaresToday < 1470) {
        info.innerText = "Berlin's Tempelhofer Feld is 355 hectares in size"
    } else if (hectaresToday < 3000){
        info.innerText = "Berlin Brandenburg Airport Willy Brandt is 1470 hectares in size"
    } else if (hectaresToday < 3950){
        info.innerText = "Berlin's Grunewald Forest is approx. 3,000 hectares in size"
    } else if (hectaresToday < 5910){
        info.innerText = "Berlin Mitte is 3,950 hectares in size"
    }
     else {
        info.innerText = "Manhattan, NYC is 5,910 hectares in size"
    }
}

setInterval(update, 100); // run update every 100 miliseconds

// share button section
var counterDiv = document.getElementById('counter-div');

var shareStory = document.createElement("div");
counterDiv.appendChild(shareStory);
shareStory.innerHTML = '<img class="share"\
src="../src/img/share.svg"\
alt="share story">';

var btnWrapper = document.createElement("div");
btnWrapper.setAttribute("id", "btn__wrapper");
counterDiv.appendChild(btnWrapper); 
var btn1 = document.createElement("BUTTON");   // Create a <button> element
btn1.innerHTML = '<img class="social__twit"\
src="../src/img/twit.svg"\
alt="twitter icon">';
document.getElementById("btn__wrapper").appendChild(btn1);    
var btn2 = document.createElement("BUTTON");   // Create a <button> element
btn2.innerHTML = '<img class="social__insta"\
src="../src/img/insta.svg"\
alt="instagram icon">';                   // Insert text
document.getElementById("btn__wrapper").appendChild(btn2);  
var btn3 = document.createElement("BUTTON");   // Create a <button> element
btn3.innerHTML = '<img class="social__fb"\
src="../src/img/fb.svg"\
alt="facebook icon">';                    // Insert text
document.getElementById("btn__wrapper").appendChild(btn3);             // Append <button> to <body> 