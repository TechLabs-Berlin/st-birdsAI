// var body = document.body;
// var element = document.getElementById("scrolly-map");
// //Update DOM on scroll
// document.addEventListener("scroll", function() { 
//     var scrollAmt = window.pageYOffset || document.documentElement.scrollTop
// 	if(window.innerHeight/2 >= scrollAmt)
// 	 	element.style.display = "none"; 
//   else	
// 		element.style.display = "block";
// });

// when pressing button no scroll class is removed
function removeNoScroll() {
    const element = document.getElementById("hero");
    element.classList.remove("noscroll");
  } 

  // show/hide section or div
  function showDiv()
{
const div = document.getElementById("scrolly-map");
if (div.style.display === "none")
{
div.style.display = "block";
}else{
    div.style.display = "none";
}
}