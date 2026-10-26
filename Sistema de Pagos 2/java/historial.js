document.addEventListener("DOMContentLoaded", () => {
  const botonesBoleta = document.querySelectorAll(".ver-boleta");
  const popup = document.getElementById("popup-boleta");
  const contenidoBoleta = document.getElementById("popup-content");

  const boletas = {
    1: {
      nombre: "Programador Junior",
      trabajador: "Luis Herrera",
      fecha: "01/07/2025",
      costo: "S/. 1500.00",
      codigo: "BJ-2025-001",
    },
    2: {
      nombre: "Diseñador Frontend",
      trabajador: "Karla Ruiz",
      fecha: "03/07/2025",
      costo: "S/. 750.00",
      codigo: "FRONT-2025-002",
    },
    3: {
      nombre: "Tester de Software Junior",
      trabajador: "Renzo Morales",
      fecha: "05/07/2025",
      costo: "S/. 950.00",
      codigo: "QA-2025-003",
    },
    4: {
      nombre: "Desarrollador Backend Junior",
      trabajador: "Sandra Paredes",
      fecha: "06/07/2025",
      costo: "S/. 1200.00",
      codigo: "BACK-2025-004",
    },
  };

  botonesBoleta.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = boton.getAttribute("data-id");
      const data = boletas[id];

      if (data) {
        contenidoBoleta.innerHTML = `
          <h2 class="boleta-titulo">🧾 Boleta de Servicio</h2>
          <div class="boleta-detalle">
            <p><strong>Trabajo:</strong> ${data.nombre}</p>
            <p><strong>Realizado por:</strong> ${data.trabajador}</p>
            <p><strong>Fecha:</strong> ${data.fecha}</p>
            <p><strong>Código:</strong> ${data.codigo}</p>
            <p><strong>Total:</strong> <span class="precio-resaltado">${data.costo}</span></p>
          </div>
          <button class="close-popup boton-cerrar" onclick="cerrarPopup()">Cerrar</button>
        `;
        popup.style.display = "flex";
      }
    });
  });
});

function cerrarPopup() {
  document.getElementById("popup-boleta").style.display = "none";
}

