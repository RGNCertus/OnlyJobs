function abrirModal() {
  document.getElementById('modalCartera').style.display = 'block';
}

function cerrarModal() {
  document.getElementById('modalCartera').style.display = 'none';
  document.getElementById('formulario-seguridad').style.display = 'block';
  document.getElementById('cartera-virtual').style.display = 'none';
}


function validarSeguridad() {
  const nombre = document.getElementById('nombre').value.trim();
  const dni = document.getElementById('dni').value.trim();
  const tarjeta = document.getElementById('tarjeta').value.trim();
  const cvv = document.getElementById('cvv').value.trim();
  const fecha = document.getElementById('fecha').value;

  const hoy = new Date();
  const fechaIngresada = new Date(fecha + "-01");

  if (!nombre || dni.length !== 8 || tarjeta.length !== 16 || cvv.length !== 3 || !fecha) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  if (isNaN(dni) || isNaN(tarjeta) || isNaN(cvv)) {
    alert("DNI, tarjeta y CVV deben ser solo números.");
    return;
  }

  if (fechaIngresada <= hoy) {
    alert("La fecha de vencimiento debe ser posterior a la fecha actual.");
    return;
  }


  document.getElementById('formulario-seguridad').style.display = 'none';
  document.getElementById('cartera-virtual').style.display = 'block';
}


function enviarDinero(event) {
  event.preventDefault();

  const destinatario = document.getElementById('destinatario').value.trim();
  const monto = parseFloat(document.getElementById('monto-enviar').value);
  const saldoElemento = document.getElementById('saldo');
  let saldoActual = parseFloat(saldoElemento.textContent);

  if (!destinatario || isNaN(monto) || monto <= 0) {
    alert("Ingresa un destinatario y un monto válido.");
    return;
  }

  if (monto > saldoActual) {
    alert("Saldo insuficiente.");
    return;
  }

  saldoActual -= monto;
  saldoElemento.textContent = saldoActual.toFixed(2);
  agregarHistorial(`Enviaste S/ ${monto.toFixed(2)} a ${destinatario}`);
  document.getElementById('form-enviar').reset();
}


function recibirDinero(event) {
  event.preventDefault();

  const monto = parseFloat(document.getElementById('monto-recibir').value);
  const saldoElemento = document.getElementById('saldo');
  let saldoActual = parseFloat(saldoElemento.textContent);

  if (isNaN(monto) || monto <= 0) {
    alert("Ingresa un monto válido.");
    return;
  }

  saldoActual += monto;
  saldoElemento.textContent = saldoActual.toFixed(2);
  agregarHistorial(`Recibiste S/ ${monto.toFixed(2)}`);
  document.getElementById('form-recibir').reset();
}


function agregarHistorial(mensaje) {
  const historial = document.getElementById('historial');
  const entrada = document.createElement('li');
  entrada.textContent = mensaje;
  historial.insertBefore(entrada, historial.firstChild);
}
