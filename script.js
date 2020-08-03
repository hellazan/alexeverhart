
//Slidshow
var slideIndex = 0;
showSlides();


function showSlides() {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//clickHere button
function revealMessage() {

	var x = document.getElementById("hiddenMessage");

	if (x.style.display === "none") {
		x.style.display = "block";

	}

	else{
		x.style.display = "none";
	}

}

//Menu Icon
function myFunction(x) {
  x.classList.toggle("change");
}