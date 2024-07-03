//Copyright Erica The Developer All Rights Reserved.

//Adapted from w3Schools src:"https://www.w3schools.com/howto/howto_js_slideshow.asp"

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("arch-photos");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 4 seconds
}

//Adapted from w#Schools:https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("get-in-touch");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
