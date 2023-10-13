const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_mw7d099';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Your email has been sent successfully!');
      // Restablecer los valores de los campos de entrada
      document.getElementById('to_name').value = '';
      document.getElementById('email_id').value = '';
      document.getElementById('from_name').value = '';
      document.getElementById('message').value = '';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
