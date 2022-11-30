window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
        hamburgerLine = document.querySelectorAll('.hamburger span'),
        hamburgerMenu = document.querySelector('.hamburger__menu');

    hamburger.addEventListener('click', () => {
        hamburgerLine[0].classList.toggle('rotateRight');
        hamburgerLine[1].classList.toggle('hide');
        hamburgerLine[2].classList.toggle('rotateLeft');
        hamburgerMenu.classList.toggle('show');
    });

    
});
