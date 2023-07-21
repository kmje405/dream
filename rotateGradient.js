// JavaScript
let angle = 0;
const rotateGradient = () => {
    angle = (angle + .3) % 360; // Update the angle, keep it between 0-359
    document.documentElement.style.setProperty("--gradient-angle", `${angle}deg`); // Set the new angle in CSS variable
    requestAnimationFrame(rotateGradient); // Call the next frame
};
rotateGradient(); // Start rotation
