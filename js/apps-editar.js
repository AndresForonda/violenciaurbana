var nav=document.getElementById('nav');
function myFunction() {
    nav.classList.toggle('mostrar');
    nav.classList.toggle('fixed');
}
//var rutaAbsoluta = self.location.href;        // http://asdas.asd/uno/dos/index.html
//var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
//var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );       // index.html
//alert(rutaRelativa);
/*Modal*/
	function openModal() {
	  document.getElementById('myModal').style.display = "block";
	}

	function closeModal() {
	  document.getElementById('myModal').style.display = "none";
	}

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
	  var dots = document.getElementsByClassName("demo");
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
	};
/*Fin modal*/
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       plusSlides(-1);
    }
    else if (e.keyCode == '39') {
       plusSlides(1);
    }
    else if (e.keyCode == '27') {
       closeModal();
    }
}
document.onkeyup = function(evt) {
    console.log(evt.keyCode);
}