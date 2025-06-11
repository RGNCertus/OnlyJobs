function seleccionarMetodo(metodo) {
  localStorage.setItem("metodoPago", metodo);
  window.location.href = "ingresar-datos.html";
}


