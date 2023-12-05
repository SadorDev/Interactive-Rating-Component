// Select all the radio buttons
const radios = document.querySelectorAll('input[type="radio"]');

// Select the dynamic text element
const dynamicText = document.querySelector('.dynamic-text');

// Add a 'change' event listener to each radio button
radios.forEach(radio => {
  radio.addEventListener('change', function() {
    // When a radio button is checked, change the color of all labels back to the default color
    document.querySelectorAll('label').forEach(label => {
      label.style.color = 'hsl(217, 12%, 63%)'; // replace with your default color
      label.style.backgroundColor = 'hsl(213, 19%, 20%)'; // replace with your default background color
    });

    // Then change the color of the clicked radio button's label
    const label = document.querySelector(`label[for="${this.id}"]`);
    label.style.color = 'hsl(0, 0%, 100%)';
    label.style.backgroundColor = 'hsl(217, 12%, 63%)';

    // Update the dynamic text with the selected rating
    dynamicText.textContent = `You selected ${this.value} out of 5`;
  });
});

// Select the form, the thank-you section, and the containers to hide
const form = document.querySelector('.rating_container');
const thankYouSection = document.querySelector('#thank-you-section');
const starContainer = document.querySelector('.star_container');
const textContainer = document.querySelector('.text_container');

// Add a 'submit' event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting (you can remove this if you want the form to submit normally)
  event.preventDefault();

  // Hide the form and the other containers
  form.style.display = 'none';
  starContainer.style.display = 'none';
  textContainer.style.display = 'none';

  // Show the thank-you section
  thankYouSection.style.display = 'block';
});
