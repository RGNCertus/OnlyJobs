document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const contrasena = document.getElementById('contrasena').value;
  const confirmar = document.getElementById('confirmarContrasena').value;

  if (contrasena !== confirmar) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  window.location.href = '/OnlyJobs/Verificacion/verificacion.html';
});
