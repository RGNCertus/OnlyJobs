document.addEventListener('DOMContentLoaded', function() {
  
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    document.getElementById('numerito').textContent = carrito.length;
    document.getElementById('numerito-mobile').textContent = carrito.length;

    const metodoPago = localStorage.getItem('metodoPago');
    if (metodoPago) {
        document.getElementById('metodo-seleccionado').textContent = metodoPago;
    }

    const numeroTarjeta = document.getElementById('numero-tarjeta');
    numeroTarjeta.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (value.length > 0) {
            value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        e.target.value = value;
        document.getElementById('tarjeta-numero-preview').textContent = value || '•••• •••• •••• ••••';
    });

    document.getElementById('nombre-titular').addEventListener('input', function(e) {
        const value = e.target.value.toUpperCase() || 'NOMBRE TITULAR';
        document.getElementById('tarjeta-nombre-preview').textContent = value;
    });

    document.getElementById('fecha-expiracion').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
        document.getElementById('tarjeta-fecha-preview').textContent = value || 'MM/AA';
    });

    document.getElementById('formulario-tarjeta').addEventListener('submit', function(e) {
        e.preventDefault();

        const numero = document.getElementById('numero-tarjeta').value.replace(/\s+/g, '');
        const nombre = document.getElementById('nombre-titular').value.trim();
        const fecha = document.getElementById('fecha-expiracion').value;
        const cvv = document.getElementById('cvv').value.trim();

        let valido = true;

        if (numero.length !== 16) {
            document.getElementById('error-numero').textContent = 'El número de tarjeta debe tener 16 dígitos';
            document.getElementById('error-numero').style.display = 'block';
            valido = false;
        } else {
            document.getElementById('error-numero').style.display = 'none';
        }

        if (nombre.length < 3) {
            document.getElementById('error-nombre').textContent = 'Nombre demasiado corto';
            document.getElementById('error-nombre').style.display = 'block';
            valido = false;
        } else {
            document.getElementById('error-nombre').style.display = 'none';
        }

        if (!/^\d{2}\/\d{2}$/.test(fecha)) {
            document.getElementById('error-fecha').textContent = 'Formato inválido (MM/AA)';
            document.getElementById('error-fecha').style.display = 'block';
            valido = false;
        } else {
            document.getElementById('error-fecha').style.display = 'none';
        }

        if (cvv.length !== 3 || !/^\d{3}$/.test(cvv)) {
            document.getElementById('error-cvv').textContent = 'CVV debe tener 3 dígitos';
            document.getElementById('error-cvv').style.display = 'block';
            valido = false;
        } else {
            document.getElementById('error-cvv').style.display = 'none';
        }

        if (valido) {
            document.querySelector("aside")?.classList.remove("aside-visible");

            Swal.fire({
                icon: 'success',
                title: '¡Pago realizado con éxito!',
                text: 'Tu transacción ha sido completada satisfactoriamente',
                confirmButtonColor: '#4082d8',
                willClose: () => {
                }
            });
        }
    });
});