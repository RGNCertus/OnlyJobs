// Si viene del botón de métodos de pago
function seleccionarMetodo(metodo) {
  localStorage.setItem("metodoPago", metodo);
  window.location.href = "ingresar-datos.html";
}

// Manejo del formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-tarjeta");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const datos = {
        numero: document.getElementById("numero").value,
        nombre: document.getElementById("nombre").value,
        vencimiento: document.getElementById("vencimiento").value,
        cvv: document.getElementById("cvv").value,
        metodo: localStorage.getItem("metodoPago") || "Desconocido"
      };

      console.log("Datos capturados:", datos);

      // Aquí conectarás con el backend en el futuro
      alert("Pago procesado con éxito (simulado)");

      // Simulación de redirección
      window.location.href = "confirmacion.html";
    });
  }
});
//window.location.href = "confirmacion.html";
