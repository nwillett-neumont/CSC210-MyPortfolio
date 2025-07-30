// Constants
const quoteDisplay = document.getElementById('quote');
const attributionDisplay = document.getElementById('attribution');

// Variables
/*
// Couldn't use the other API without proxy magic, so I found this one.
// I needed something called a CORS proxy, and I got it working to discover that it was meant only for testing, so I went API hunting.
*/
const quoteUrl = 'https://zenquotes.io/api/random';
const corsProxy = `https://whateverorigin.org/get?url=${encodeURIComponent(quoteUrl)}`
// Event Listeners

// Run
fetchQuote();

// Functions
function fetchQuote() {
    fetch(corsProxy)
    .then(response => response.json())
    .then(data => {
        data = JSON.parse(data.contents)
        console.log(data);
        setHtml(data);
    })
    .catch(e => console.log(e));
}

function setHtml(data) {
    quoteDisplay.innerHTML = data[0].q;
    attributionDisplay.innerHTML = `-- ${data[0].a}`;
}