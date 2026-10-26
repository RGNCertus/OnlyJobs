document.addEventListener('DOMContentLoaded', function() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    document.getElementById('numerito').textContent = carrito.length;
    document.getElementById('numerito-mobile').textContent = carrito.length;

    const metodoGuardado = localStorage.getItem('metodoPago');
    if (metodoGuardado) {
        seleccionarMetodo(metodoGuardado);
    }
});

function seleccionarMetodo(metodo) {
    document.querySelectorAll('.metodo-option').forEach(option => {
        option.classList.remove('seleccionado');
    });

    const metodoSeleccionado = document.querySelector(`.metodo-option[data-metodo="${metodo}"]`);
    if (metodoSeleccionado) {
        metodoSeleccionado.classList.add('seleccionado');
        localStorage.setItem('metodoPago', metodo);
    }
}

function confirmarMetodo() {
    const metodoSeleccionado = localStorage.getItem('metodoPago');
    
    if (!metodoSeleccionado) {
        alert('Por favor selecciona un método de pago');
        return;
    }

    window.location.href = 'carrito.html';
}