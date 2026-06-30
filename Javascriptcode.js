/*i want a button that when pressed in Javascript talks to html to change the color and the text to say "you pressed me!"*/


const color = document.getElementById("color-button");
const textElement = document.getElementById("my-text");
const myImage = document.getElementById("Pride");
let angle = 0;
const description = document.getElementById("describe");

// 1. Define the animation function completely
function animateHue() {
  angle = (angle + 1) % 360; 
  myImage.style.filter = `hue-rotate(${angle}deg)`;
  requestAnimationFrame(animateHue); // This keeps the loop spinning!
} // <--- This curly brace closes the animateHue function perfectly!

// 2. Setup the button click to START the animation
color.addEventListener("click", function() {
  textElement.textContent = "You pressed me!";
      description.textContent = "thank you";
  document.body.style.backgroundColor = "#ff7979"; 
  // When they click, we kick off the forever loop!
  animateHue(); 
}); // <--- This closes the event listener perfectly!
