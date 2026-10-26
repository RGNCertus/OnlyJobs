const CREDENCIALES_VALIDAS = {
  usuario: "Juanpe123",
  contraseña: "Juanpe123"
};

const imagenes = [
  "carrusel1.jpg",
  "carrusel2.jpg",
  "carrusel3.png",
  "carrusel4.png",
];

let indice = 0;
const imgElement = document.getElementById("carousel-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

setInterval(() => {
  indice = (indice + 1) % imagenes.length;
  imgElement.src = imagenes[indice];
}, 2000);

prevBtn.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  imgElement.src = imagenes[indice];
});

nextBtn.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  imgElement.src = imagenes[indice];
});

document.addEventListener('DOMContentLoaded', function() {

  localStorage.setItem('credencialesValidas', JSON.stringify(CREDENCIALES_VALIDAS));
  
  const loginBtn = document.getElementById('login-btn');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  
  loginBtn.addEventListener('click', function() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (username === CREDENCIALES_VALIDAS.usuario && password === CREDENCIALES_VALIDAS.contraseña) {

      Swal.fire({
        icon: 'success',
        title: '¡Inicio de sesión exitoso!',
        text: 'Redirigiendo...',
        confirmButtonColor: '#4082d8',
        timer: 3000,
        showConfirmButton: false
      });
      
      setTimeout(() => {
        window.location.href = '/OnlyJobs/Pagina principal/main.html';
      }, 1000);
    } else {

      Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        text: 'Usuario o contraseña incorrectos',
        confirmButtonColor: '#4082d8'
      });

      usernameInput.value = '';
      passwordInput.value = '';
      usernameInput.focus();
    }
  });

  [usernameInput, passwordInput].forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        loginBtn.click();
      }
    });
  });
});