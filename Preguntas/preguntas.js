document.addEventListener('DOMContentLoaded', function() {

    const bgShapes = document.getElementById('bgShapes');
    for (let i = 0; i < 10; i++) {
        const shape = document.createElement('div');
        shape.classList.add('bg-shape');
        
        const size = Math.random() * 200 + 50;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.1 + 0.05;
        const duration = Math.random() * 30 + 20;
        
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        shape.style.opacity = opacity;
        shape.style.animation = `move-shapes ${duration}s linear infinite alternate`;
        
        bgShapes.appendChild(shape);
    }

    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {

            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });
});