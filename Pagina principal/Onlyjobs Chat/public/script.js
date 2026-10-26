const openModal = document.querySelector('.button__open');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

const sinFiltro = document.querySelector('.button--sinfiltro')
const filtroComentarios = document.querySelector('.button--comentario');
const filtroMensajes = document.querySelector('.button--mensaje');
const filtroPagos = document.querySelector('.button--pago');
const notificacionComentarios = document.querySelectorAll('.modal__notificacionC');
const notificacionMensajes = document.querySelectorAll('.modal__notificacionM');
const notificacionPagos = document.querySelectorAll('.modal__notificacionP');

sinFiltro.addEventListener('click', (e)=>{
    e.preventDefault();
    notificacionComentarios.forEach(el => el.classList.remove('modal--comentario'));
    notificacionMensajes.forEach(el => el.classList.remove('modal--mensaje'));
    notificacionPagos.forEach(el => el.classList.remove('modal--pago'));
});

filtroComentarios.addEventListener('click', (e) => {
    e.preventDefault();
    notificacionComentarios.forEach(el => el.classList.remove('modal--comentario'));
    notificacionMensajes.forEach(el => el.classList.add('modal--mensaje'));
    notificacionPagos.forEach(el => el.classList.add('modal--pago'));
});

filtroMensajes.addEventListener('click', (e) => {
    e.preventDefault();
    notificacionComentarios.forEach(el => el.classList.add('modal--comentario'));
    notificacionMensajes.forEach(el => el.classList.remove('modal--mensaje'));
    notificacionPagos.forEach(el => el.classList.add('modal--pago'));
});

filtroPagos.addEventListener('click', (e) => {
    e.preventDefault();
    notificacionComentarios.forEach(el => el.classList.add('modal--comentario'));
    notificacionMensajes.forEach(el => el.classList.add('modal--mensaje'));
    notificacionPagos.forEach(el => el.classList.remove('modal--pago'));
});