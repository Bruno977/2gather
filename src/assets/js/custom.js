// Padding Body

const header = document.querySelector('header');
const logoHeader = header.querySelector('[data-logo] img');
const heightHeader = header.offsetHeight;

function handleScrollWindow() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > heightHeader) {
    header.setAttribute('style', 'padding: 10px;');
    header.classList.add('bg-body-default');
    header.classList.remove('bg-transparent');
    logoHeader.setAttribute('style', 'max-height: 70px;');
  } else {
    header.removeAttribute('style');
    header.classList.remove('bg-body-default');
    header.setAttribute('style', 'bg-transparent');

    logoHeader.removeAttribute('style');
  }
}

window.addEventListener('scroll', handleScrollWindow);

// Menu Side
const menuSide = document.querySelector('[data-menu-side]');
const btnOpenSide = document.querySelector('[data-open-side]');
const btnCloseSide = document.querySelector('[data-close-side]');
const overlay = document.querySelector('[data-overlay]');

const sidebar = document.querySelector('[data-sidebar]');

if (menuSide && btnOpenSide && btnCloseSide && sidebar && overlay) {
  function handleOpenMenu() {
    menuSide.setAttribute('data-is-open', 'true');
    sidebar.classList.remove('translate-x-full');
    sidebar.classList.add('translate-x-0');

    btnCloseSide.setAttribute('style', 'opacity:1 ; pointer-events: initial;');
    overlay.setAttribute('style', 'opacity:1; pointer-events: initial;');
  }

  function handleCloseMenu() {
    menuSide.removeAttribute('data-is-open');
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('translate-x-full');

    btnCloseSide.removeAttribute('style');
    btnCloseSide.setAttribute('style', 'opacity: 0;');
    overlay.setAttribute('style', 'opacity:0; pointer-events: none;');
  }

  btnOpenSide.addEventListener('click', handleOpenMenu);
  btnCloseSide.addEventListener('click', handleCloseMenu);
}
