/* show modals */
// var button1 = document.getElementById("sec-grid-1");

/* when click on area button for displaying modals */
// button1.onclick = function() {
// 	modal.style.display = "block";
// }

var modal   = document.getElementById("modal-wrap");
var clicked = document.getElementsByClassName("sec-grid");
var span    = document.getElementsByClassName("close")[0];
/* when click on area close the modals */
span.onclick = function() {
	modal.style.display = "none";
} 
/* when click on area windows, modal will close */
window.onclick = function() {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
/* looping when clicked area grid profile */
for (let index = 0; index < clicked.length; index++) {
  console.log(clicked.length);
  const element = clicked[index];
  element.onclick = showModal;
  console.log("click");
}
/* function for show modal */
function showModal(){
  modal.style.display = "block";
  console.log("open");
}


/* menu smooth scrolling */
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}
/* events click menu */
document.getElementById("click-sec1").addEventListener('click', () => {
  scrollTo(document.getElementById("sec-1"));
});
document.getElementById("click-sec2").addEventListener('click', () => {
  scrollTo(document.getElementById("sec-2"));
});
document.getElementById("click-sec3").addEventListener('click', () => {
  scrollTo(document.getElementById("sec-3"));
});
document.getElementById("click-sec4").addEventListener('click', () => {
  scrollTo(document.getElementById("sec-4"));
});


/* slider slideshow */
var slideIndex = 1;
showSlides(slideIndex);
/* next slide*/ 
function plusSlides(n) {
  showSlides(slideIndex += n);
}
/* previous slide */
function currentSlide(n) {
  showSlides(slideIndex = n);
}
/* dots navigation */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  // looping for each slide display none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  // looping for each slide dots active
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}