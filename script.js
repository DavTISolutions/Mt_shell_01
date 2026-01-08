document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    const sr = ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true,
        mobile: true
    });

    sr.reveal('.navbar', { origin: 'top', delay: 100 });
    sr.reveal('.hero .badge', { origin: 'top', distance: '20px' });
    sr.reveal('.hero .headline', { origin: 'left', delay: 300 });
    sr.reveal('.hero p', { origin: 'right', delay: 400 });
    sr.reveal('.hero-btns', { origin: 'bottom', delay: 500 });

    sr.reveal('.about-text', { origin: 'left', delay: 300 });
    sr.reveal('.about-image', { origin: 'right', delay: 400 });

    sr.reveal('.section-title.center', { origin: 'top' });
    sr.reveal('.section-subtitle', { origin: 'bottom', delay: 200 });

    sr.reveal('.product-card', {
        origin: 'bottom',
        interval: 200
    });

    sr.reveal('.contact-box', {
        origin: 'bottom',
        scale: 0.9,
        duration: 1500
    });

    window.pedirProducto = function (nombreProducto) {
        const telefono = "5519119393";
        const saludo = `Hola Mt_Sell 🎀! Quedé encantad@ con el producto "${nombreProducto}" que vi en su web. ¿Podrían darme más detalles?`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(saludo)}`;
        window.open(url, '_blank');
    };
});