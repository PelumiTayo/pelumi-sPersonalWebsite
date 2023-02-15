/* This file is used to add interactivity onto your website */
var elements = document.getElementsByClassName("nav-link");

for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function() {
    let inputs = document.getElementById('check');
    inputs.checked = false;
  }
}

