/*-----------------------------------------------------------------------------*/
/* This file contains the code for the social media share buttons. */
/* ----------------------------------------------------------------------------- */
// create share button div
var counterDiv = document.getElementById('counter-div');

var shareStory = document.createElement("div");
counterDiv.appendChild(shareStory);
shareStory.innerHTML = '<img class="share"\
src="./src/img/share.svg"\
alt="share story">';

// create social share buttons
var btnWrapper = document.createElement("div");
btnWrapper.setAttribute("id", "btn__wrapper");
counterDiv.appendChild(btnWrapper); 
var btn1 = document.createElement("BUTTON");   // Create a <button> element
btn1.innerHTML = '<a class="social__twit">\
<img src="./src/img/twit.svg" alt="twitter icon">\
</a>';
document.getElementById("btn__wrapper").appendChild(btn1);    
var btn2 = document.createElement("BUTTON");  
btn2.innerHTML = '<a class="social__linkd">\
<img src="./src/img/linkedin-figma.svg" alt="linkedin icon">\
</a>';
document.getElementById("btn__wrapper").appendChild(btn2);  
var btn3 = document.createElement("BUTTON");  
btn3.innerHTML = '<a class="social__fb">\
<img src="./src/img/fb.svg" alt="facebook icon">\
</a>'; 
document.getElementById("btn__wrapper").appendChild(btn3);

// make buttons functional
const twitterBtn = document.querySelector(".social__twit");
const linkdBtn = document.querySelector(".social__linkd");
const fbBtn = document.querySelector(".social__fb");

function share(){
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("BirdsAI, a Story of the Past, Present and Future of the Amazon Rainforest from a Bird's eye view. ");

    twitterBtn.setAttribute("href", `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
    linkdBtn.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`);
    fbBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);
}
share();