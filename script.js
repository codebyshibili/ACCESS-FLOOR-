document.addEventListener('DOMContentLoaded', () => {
  // Array of background images for each project box
  const backgrounds = [
      'url("Access-images/project1.jpeg")',
      'url("Access-images/project2.jpeg")',
      'url("Access-images/project3.jpeg")',
      'url("Access-images/project4.jpeg")',
      'url("Access-images/project5.jpeg")',
      'url("Access-images/project6.jpeg")'
  ];

  // Select all elements with the class 'project-box'
  const projectBoxes = document.querySelectorAll('.project-box');

  // Loop through each project box and set the background image from the array
  projectBoxes.forEach((box, index) => {
      if (backgrounds[index]) { // Check if there's a background image for this box
          box.style.backgroundImage = backgrounds[index];
      }
  });
});


const numbers = document.querySelectorAll('.number');
let animationTriggered = false;

const container = document.querySelector('.detail-container'); // Target the specific container

container.addEventListener('mouseenter', () => {
  if (!animationTriggered) {
    animationTriggered = true; // Ensure animation runs only once on hover
    numbers.forEach((num) => {
      const target = +num.getAttribute('data-target'); // Target number
      let count = 0; // Start from 0

      const updateCounter = () => {
        if (count < target) {
          count += Math.ceil(target / 100); // Increment step
          if (count > target) count = target; // Ensure no overshoot
          num.textContent = count;
          requestAnimationFrame(updateCounter); // Smooth animation
        }
      };

      updateCounter();
    });
  }
});