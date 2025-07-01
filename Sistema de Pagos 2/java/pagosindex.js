document.addEventListener('DOMContentLoaded', function() {
    // Cargar número de items del carrito
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    document.getElementById('numerito').textContent = carrito.length;
    document.getElementById('numerito-mobile').textContent = carrito.length;
    
    // Cargar método seleccionado si existe
    const metodoGuardado = localStorage.getItem('metodoPago');
    if (metodoGuardado) {
        seleccionarMetodo(metodoGuardado);
    }
});

function seleccionarMetodo(metodo) {
    // Deseleccionar todos los métodos primero
    document.querySelectorAll('.metodo-option').forEach(option => {
        option.classList.remove('seleccionado');
    });
    
    // Seleccionar el método clickeado
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
    
    // Redirigir al carrito con el método seleccionado
    window.location.href = 'carrito.html';
}