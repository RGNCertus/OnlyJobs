function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

let actual = '';

function confirmarEliminacion(pub) {
  actual = pub;
  document.getElementById('msg').innerText = `¿Estás seguro de eliminar "${pub}"?`;
  document.getElementById('modal').style.display = 'flex';
}

function cerrarModa() {
  document.getElementById('modal').style.display = 'none';
 
}

function eliminarPublicacion() {
  alert(`"${actual}" eliminado correctamente.`);
  cerrarModal();
}

function confirmarEliminacio(pub) {
  actual = pub;
  document.getElementById('m').innerText = `Compartir la   "${pub}"?`;
  document.getElementById('Modal').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('Modal').style.display = 'none';
}

