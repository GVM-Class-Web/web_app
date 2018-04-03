var marginY = 0;
// var destination = 0;
var distance = 40;
var speed=50;
// var scroller =null;

// Buat scroll kebawah
function autoScrollTo(el){
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	 var bodyHeight = document.body.offsetHeight;
	 var yPos = currentY + innerHeight;
	 var animator = setTimeout('autoScrollTo("'+el+'")',50);
	 if(yPos > bodyHeight){
	 	clearTimeout(animator);
	 }
	 else{
	 	if(currentY < targetY-distance){
	 		scrollY = currentY+distance;
	 		window.scroll(0, scrollY);
	 	}else{
	 		clearTimeout(animator);
	 	}
	 }
	 event.preventDefault();
}
//buat scroll ke atas pas home di klik
function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}


// javaScript buat munculin gambar

let menu1 = document.getElementById('picture1');
let menu2 = document.getElementById('picture2');
let menu3 = document.getElementById('picture3');
let menu4 = document.getElementById('picture4');
let menu5 = document.getElementById('picture5');
let menu6 = document.getElementById('picture6');

let popup1 = document.getElementById('popup1');
let popup2 = document.getElementById('popup2');
let popup3 = document.getElementById('popup3');
let popup4 = document.getElementById('popup4');
let popup5 = document.getElementById('popup5');
let popup6 = document.getElementById('popup6');

menu1.onclick = function(){
	popup1.style.display="block";
}
menu2.onclick = function(){
	popup2.style.display="block";
}
menu3.onclick = function(){
	popup3.style.display="block";
}
menu4.onclick = function(){
	popup4.style.display="block";
}
menu5.onclick = function(){
	popup5.style.display="block";
}
menu6.onclick = function(){
	popup6.style.display="block";
}

// harus di panggil duluu
// khusus span1 click black window juga ilangs
var span1 = document.getElementById("isinya");

var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");
var span5 = document.getElementById("close5");
var span6 = document.getElementById("close6");


// Ketika di klik gambar pop up nya tutup
span1.onclick = function(){
	popup1.style.display="none";
	// dipanggil disini jadi kalo span1 di click stop dia videonya
	stop();
}	
//Stop the video 
function stop(){
	var iframe = document.getElementById("video");
	iframe.src = iframe.src;
}

span2.onclick =  function(){
	popup2.style.display="none";
}
span3.onclick =  function(){
	popup3.style.display="none";
}
span4.onclick =  function(){
	popup4.style.display="none";
}
span5.onclick =  function(){
	popup5.style.display="none";
}
span6.onclick =  function(){
	popup6.style.display="none";
}

//Validasi input keluhan
let submit = document.getElementById('submit');
let name = document.getElementById('name');
let email = document.getElementById('email');
let feedback = document.getElementById('feedback');

let regex = /^\w+([\.-]?\w+)\@(yahoo|ymail|gmail)\.(com)$/;

submit.onclick = function(){
	if(name.value == ""){
		alert("Name is required");
		return false;
	}
	else if (name.value.length<6){
		alert ("Name cannot be less than 6 letter");
		return false;
	}
	else if (email.value == "" ){
		alert("Email is required");
		return false;
	}
	else if (!email.value.match(regex)){
		alert ("Email Invalid");
		return false;
	}
	else if (feedback.value == ""){
		alert("Fill the feedback form");
		return false
	}
	alert("Thank you for the feedback :D")
	return true;
	
}