// Get all elements with the class "event"
const events = document.querySelectorAll('.event');
const images = document.querySelectorAll('.img');

// Loop through each .event element
events.forEach((event, index) => {
  // Get the current width and height of the element
  const currentWidth = event.clientWidth;
  const currentHeight = event.clientHeight;

  // Calculate the new width and height by increasing by 10%
  const newWidth = currentWidth * 1.1; // Increase by 10%
  const newHeight = currentHeight * 2.5; // Increase by 10%

  // Add event listeners to each .event element
  event.addEventListener('mouseenter', function() {
    event.style.width = newWidth + 'px';
    event.style.height = newHeight + 'px';

    // Display the corresponding image
    images[index].style.display = 'block';
  });

  event.addEventListener('mouseleave', function() {
    event.style.width = currentWidth + 'px';
    event.style.height = currentHeight + 'px';

    // Hide the corresponding image
    images[index].style.display = 'none';
  });
});
