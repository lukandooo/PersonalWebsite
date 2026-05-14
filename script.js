const toggle = document.querySelector('.nav__toggle');
const mobileMenu = document.querySelector('#mobileMenu');
const nav = document.querySelector('.nav');

if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
        const isOpen = toggle.classList.toggle('open');
        mobileMenu.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
        mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    mobileMenu.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('open');
            mobileMenu.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        });
    });
}

if (nav) {
    window.addEventListener('scroll', () => {
        nav.style.borderBottomColor =
            window.scrollY > 10 ? 'var(--clr-border-hover)' : 'var(--clr-border)';
    }, { passive: true }); // Zamykamy passive!
}