// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', (event) => {
      // Prevent the form from submitting to a server
      event.preventDefault();

      // Capture form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const sslc = document.getElementById('sslc').value;
      const puc = document.getElementById('puc').value;
      const gender = document.getElementById('gender').value;
      const address = document.getElementById('address').value || 'Not Provided';
      const message = document.getElementById('message').value || 'No Message';

      // Populate the success message with form values
      document.getElementById('outputName').textContent = name;
      document.getElementById('outputEmail').textContent = email;
      document.getElementById('outputPhone').textContent = phone;
      document.getElementById('outputSSLC').textContent = sslc;
      document.getElementById('outputPUC').textContent = puc;
      document.getElementById('outputGender').textContent = gender;
      document.getElementById('outputAddress').textContent = address;
      document.getElementById('outputMessage').textContent = message;

      // Hide the form and show the success message
      form.style.display = 'none';
      successMessage.style.display = 'block';
  });
});
