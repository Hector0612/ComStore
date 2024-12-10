document.addEventListener('DOMContentLoaded', () => {
    // Mostrar el popup al hacer clic en "Contáctanos"
    const contactButton = document.querySelector('.contact-button');
    const popupForm = document.getElementById('popup-form');
    const closePopupButton = popupForm.querySelector('.close-popup');
    const contactForm = document.getElementById('contact-form');

    contactButton.addEventListener('click', () => {
        popupForm.classList.remove('hidden');
    });

    // Cerrar el popup
    closePopupButton.addEventListener('click', () => {
        popupForm.classList.add('hidden');
    });

    // Cerrar al hacer clic fuera del contenido
    popupForm.addEventListener('click', (event) => {
        if (event.target === popupForm) {
            popupForm.classList.add('hidden');
        }
    });

    // Validar y enviar el formulario
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío predeterminado

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !phone || !message) {
            alert('Por favor, completa todos los campos.');
        } else {
            alert('Mensaje enviado correctamente.');
            popupForm.classList.add('hidden');
            contactForm.reset();
        }
    });
});

