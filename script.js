document.addEventListener('DOMContentLoaded', () => {
  // Array of background images for each project box
  const backgrounds = [
      'url("Access-images/p2.jpg")',
      'url("Access-images/banner bg_11zon.jpg")',
      'url("Access-images/product-2.jpg")',
      'url("Access-images/form-image_11zon.png")',
      'url("Access-images/p1.jpg")',
      'url("Access-images/African Skies - Neptune.png")'
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


document.addEventListener('DOMContentLoaded', () => {
  // Array of background images for each project box
  const backgrounds = [
      'url("Access-images/service-1.jpg")',
      'url("Access-images/service-2.jpg")',
      'url("Access-images/service-3.jpg")',
      'url("Access-images/service-4.png")',
  ];

  // Select all elements with the class 'project-box'
  const projectBoxes = document.querySelectorAll('.service-box');

  // Loop through each project box and set the background image from the array
  projectBoxes.forEach((box, index) => {
      if (backgrounds[index]) { // Check if there's a background image for this box
          box.style.backgroundImage = backgrounds[index];
      }
  });
});



function navigateToPage() {
  window.location.href = "about.html";
}