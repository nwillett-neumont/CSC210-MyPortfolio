// Constants
const slideshowDisplay = document.getElementById('slideshow');

// Variables
let count = 0;
// Event Listeners

// Run
changeImage();

// Functions
function changeImage() {
    setInterval(function () {
        document.getElementById('slideshow').src = setImage();
    }, 8000);
}

function randomImage() {
    let rand = Math.floor(Math.random() * 3) + 1;

    switch(rand) {
        case 1:
            return "./assets/images/slideshow/dylan.png";
        case 2:
            return "./assets/images/slideshow/vscode.png";
        case 3:
            return "./assets/images/slideshow/dark-souls.jpg"
    }
}

function setImage() {
    if (count == 3) count = 0;
    count++;
    switch(count) {
        case 1:
            return "./assets/images/slideshow/dylan.png";
        case 2:
            return "./assets/images/slideshow/vscode.png";
        case 3:
            return "./assets/images/slideshow/dark-souls.jpg"
    } 
}