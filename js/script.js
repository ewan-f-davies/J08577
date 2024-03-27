//Code taken from https://codepen.io/abdosteif/pen/bRoyMb 
var mainList = document.getElementById("mainListDiv");
var mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    "use strict";

    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
};

function dropDown() {
    if (mediaButton.className === "mediaButton") {
        mediaButton.className += " responsive";
    } else {
        mediaButton.className = "mediaButton";
    }
}
