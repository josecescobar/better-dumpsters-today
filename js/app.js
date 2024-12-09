document.addEventListener('DOMContentLoaded', () => {
    // Navigation Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            menuToggle.classList.toggle('open');
        });
    }

    // Modal functionality
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close');

    if (modal && closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
