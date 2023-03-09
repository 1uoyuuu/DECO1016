// Create a variable to reference the toggle <button>
const navbarToggle = document.querySelector("#nav-menu-icon");
// Create a variable to reference the nav menu container <div>
const navbarMenu = document.querySelector("#nav-link-container");
// Create a variable to reference the <ul> list of nav links
const navbarLinks = navbarMenu.querySelector(".nav-links");
// Add or remove the 'active' class on the toggle <button> when clicked
navbarToggle.addEventListener("click", () => {navbarToggle.classList.toggle('active')});
// Remove the 'active' class on the menu container <div> when clicked 
// This will close the menu if the user clicks outside the nav link <ul>
navbarMenu.addEventListener("click", () => {navbarToggle.classList.remove('active')});
// Stop clicks on the navbar links from toggling the menu (for when it's not mobile)
navbarLinks.addEventListener("click", (e) => e.stopPropagation());




// My experiment to make the interative map
var destination = document.getElementById('destination-page');
var instruction = document.getElementById('description-instruction');
var descriptionWrapper = document.getElementById('description-wrapper');
const regions = document.getElementsByClassName('regions');
const mapOutline = document.getElementsByTagName('path');

document.addEventListener('click', function (e) {
    var background = "images/destination-page/regions/";
    // Detect if it is currently clicking on a valid path
    if (e.target.tagName == 'path') {
        // Hide the instruction and reveal the region description
        instruction.style.display = "none";
        descriptionWrapper.style.display = "block";
        var content = e.target.dataset.name;
        background += content;
        background += '.png';
        // I don't know how to fix the bug that sometiems it will flicker when changing different backgrounds
        destination.style.background = 'url("' + background + '")';
        // Reset the map path to outline by disabling the fill
        for (let i = 0; i < mapOutline.length; i++) {
            mapOutline[i].style.fill = "transparent";
        }
        // Change corresponding description text
        for (let i = 0; i < regions.length; i++) {
            var currentOutline = document.getElementById(content + '-outline');
            if (regions[i].id == content) {
                regions[i].style.display = "block";
                currentOutline.style.fill = "white";
            } else {
                regions[i].style.display = "none";
            }
        }
    }
});




// --------------------------Clickable slideshow with text caption under it------------------------------- //
var i = 0;
var images = [];
var groupName = [];
var groupIntro = [];

// image list
images[0] = 'images/discovery-page/ethnic-cultures/groups/group-bai.png';
images[1] = 'images/discovery-page/ethnic-cultures/groups/group-dai.png';
images[2] = 'images/discovery-page/ethnic-cultures/groups/group-hani.png';
images[3] = 'images/discovery-page/ethnic-cultures/groups/group-naxi.png';
images[4] = 'images/discovery-page/ethnic-cultures/groups/group-tibetan.png';
images[5] = 'images/discovery-page/ethnic-cultures/groups/group-yi.png';

// group name list
groupName[0] = 'Bai';
groupName[1] = 'Dai';
groupName[2] = 'Hani';
groupName[3] = 'Naxi';
groupName[4] = 'Tibetan';
groupName[5] = 'Yi';

// group introduction list
groupIntro[0] = 'Optimistic Poets of Eternal Romance';
groupIntro[1] = 'Waterside Passionate Dancers';
groupIntro[2] = 'Skillful Agricultural Artists on Earth';
groupIntro[3] = 'Mysterious Pure Wise Men and Women';
groupIntro[4] = 'Devout Believers on Holy Land';
groupIntro[5] = 'Ancient Tribe of Fire for Luminosity';

// change image
function changeLeft() {
    if (i > 0) {
        i--;
    } else {
        i = 5;
    }
    document.slide.src = images[i];
    document.getElementById('group-name').innerHTML = groupName[i];
    document.getElementById('group-introduction').innerHTML = groupIntro[i];
}

function changeRight() {
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    document.slide.src = images[i];
    document.getElementById('group-name').innerHTML = groupName[i];
    document.getElementById('group-introduction').innerHTML = groupIntro[i];
}

// only execute this following lines if it is on the ethnic-culture page, in order to avoid the uncaught error
// inspiration from this post: https://stackoverflow.com/questions/50692992/how-to-run-a-javascript-function-only-on-a-certain-page-or-pages
if (window.location.pathname=='/ethnic-culture.html') {
    window.onload = document.slide.src = images[0];
    window.onload = document.getElementById('group-name').innerHTML = groupName[0];
    window.onload = document.getElementById('group-introduction').innerHTML = groupIntro[0];
}