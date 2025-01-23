// This file contains JavaScript code for the website. 
// You can add interactivity, event handling, and other client-side functionality here.

document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to my static website!');
    
    // Example of a simple interaction
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});