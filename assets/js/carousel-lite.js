
function plusSlides(elem, n) {
	var item = elem.dataset.item;
  	showSlides(item, slideIndex[item] += n);
}

function currentSlide(elem, n) {
	var item = elem.dataset.item;
	showSlides(item, slideIndex[item] = n);
}

function showSlides(item, n) {
  var i;
  var elem = document.getElementById('carousel' + item);
  var slides = elem.getElementsByClassName("mySlides");
  var dots = elem.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex[item] = 1}
  if (n < 1) {slideIndex[item] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[item] - 1].style.display = "block";
  dots[slideIndex[item] - 1].className += " active";
}

var slideIndex = [];
window.addEventListener("load", function(event) {
	var elements = document.getElementsByClassName("carousel");
	for (var i = 0, len = elements.length; i < len; i++) {
	    var elem = elements[i];
		elem.setAttribute("id", "carousel" + i);
		elem.getElementsByClassName('prev')[0].dataset.item = i;
		elem.getElementsByClassName('next')[0].dataset.item = i;
		for (var j = 0, lenJ = elem.getElementsByClassName('dot').length; j < lenJ; j++) {
			elem.getElementsByClassName('dot')[j].dataset.item = i;
		}
		slideIndex[i] = 1;

		showSlides( i, 1);
	}
});
