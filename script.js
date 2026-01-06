document.addEventListener('DOMContentLoaded', () => {

    // 1. Menú Responsivo
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Cambiar ícono de hamburguesa a X
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // 2. Configuración de ScrollReveal (Animaciones al hacer scroll)
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true // Las animaciones se repiten al subir y bajar
    });

    sr.reveal('.hero-content', {});
    sr.reveal('.about-image', { origin: 'right', delay: 400 });
    sr.reveal('.about-text', { origin: 'left', delay: 400 });

    // Animación en cascada para las tarjetas de producto
    sr.reveal('.product-card', { interval: 200 });

    sr.reveal('.contact-box', { scale: 0.9 });

    // 3. Funcionalidad Ingeniosa: WhatsApp Dinámico
    // Esta función global será llamada por los botones HTML
    window.pedirProducto = function (nombreProducto) {
        // Tu número de WhatsApp (Reemplazar con el real)
        const telefono = "5519119393";

        // Saludo personalizado con emojis y el producto específico
        const saludo = `Hola Mt_Sell 🎀! Quedé encantad@ con el producto "${nombreProducto}" que vi en su web. ¿Podrían darme más detalles?`;

        // Codificar el texto para URL
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(saludo)}`;

        // Abrir en nueva pestaña
        window.open(url, '_blank');
    };
});