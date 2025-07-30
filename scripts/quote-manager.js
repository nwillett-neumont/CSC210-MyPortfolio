// Constants
const quoteDisplay = document.getElementById('quote');
const attributionDisplay = document.getElementById('attribution');

// Variables
/*
// Couldn't use the other API without proxy magic, so I found this one.
// I needed something called a CORS proxy, and I got it working to discover that it was meant only for testing, so I went API hunting.
*/
let quoteUrl = 'https://thequoteshub.com/api/';
// Event Listeners

// Run
fetchQuote();

// Functions
function fetchQuote() {
    fetch(quoteUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setHtml(data);
    })
    .catch(e => console.log(e));
}

function setHtml(data) {
    quoteDisplay.innerHTML = data.text;
    attributionDisplay.innerHTML = `-- ${data.author}`;
}