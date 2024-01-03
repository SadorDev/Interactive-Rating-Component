document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[type="radio"]');
  
    const dynamicText = document.querySelector('.dynamic-text');
  
    const form = document.querySelector('.rating_container');
    const thankYouSection = document.querySelector('#thank-you-section');
    const starContainer = document.querySelector('.star_container');
    const howDidWeDo = document.querySelector('h2');
    const description = document.querySelector('p');
  
    radios.forEach(radio => {
      radio.addEventListener('change', function () {
        
        document.querySelectorAll('label').forEach(label => {
          label.style.color = 'hsl(217, 12%, 63%)'; 
          label.style.backgroundColor = 'hsl(213, 19%, 20%)'; 
        });
  
        const label = document.querySelector(`label[for="${this.id}"]`);
        label.style.color = 'hsl(0, 0%, 100%)';
        label.style.backgroundColor = 'hsl(217, 12%, 63%)';
  
        dynamicText.textContent = `You selected ${this.value} out of 5`;
      });
    });
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      starContainer.style.display = 'none';
      howDidWeDo.style.display = 'none';
      description.style.display = 'none';
  
      form.style.display = 'none';
  
      thankYouSection.style.display = 'block';
    });
  });
  