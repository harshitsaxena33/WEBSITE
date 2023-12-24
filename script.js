// JavaScript to trigger the typing animation
const text = "I'M HARSHIT SAXENA";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById('typedText').innerText += text.charAt(index);
    index++;
    setTimeout(type, 150); // Adjust typing speed here (in milliseconds)
  }
}

// Start the typing animation when the window loads
window.onload = function() {
  type();
};
