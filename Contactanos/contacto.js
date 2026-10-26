document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const problema = document.getElementById('problema').value.trim();
    
    if(nombre === '' || apellido === '' || correo === '' || problema === '') {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor complete todos los campos requeridos',
        confirmButtonColor: '#1d56ac'
      });
      return;
    }

    if(!correo.includes('@') || !correo.includes('.')) {
      Swal.fire({
        icon: 'error',
        title: 'Correo inválido',
        text: 'Por favor ingrese un correo electrónico válido',
        confirmButtonColor: '#1d56ac'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      html: 'Su informe se ha enviado correctamente.<br>Un administrador le responderá a su correo en breve.',
      confirmButtonColor: '#1d56ac',
      confirmButtonText: 'Entendido',
      timer: 5000,
      timerProgressBar: true
    }).then(() => {

      contactForm.reset();
    });
  });
});