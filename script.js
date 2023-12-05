// Select all the radio buttons
const radios = document.querySelectorAll('input[type="radio"]');

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
  });
});
