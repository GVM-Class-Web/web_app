/*script for popup modals*/
var modal  = document.getElementById("modal-wrap");
var button1 = document.getElementById("sec-grid-1");
var button2 = document.getElementById("sec-grid-2");
var button3 = document.getElementById("sec-grid-3");
var button4 = document.getElementById("sec-grid-4");

var span   = document.getElementsByClassName("close")[0];
/*when click on area button for displaying modals*/
button1.onclick = function() {
	modal.style.display = "block";
}
button2.onclick = function() {
  modal.style.display = "block";
}
button3.onclick = function() {
  modal.style.display = "block";
}
button4.onclick = function() {
  modal.style.display = "block";
}

/*when click on area close the modals*/
span.onclick = function() {
	modal.style.display = "none";
}
/*when click on area windows, modal will close*/
window.onclick = function() {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}




/*smooth scrolling*/
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

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




/*slideshow*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}