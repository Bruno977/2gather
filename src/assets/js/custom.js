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
const btnsCloseSide = document.querySelectorAll('[data-close-side]');
const overlay = document.querySelector('[data-overlay]');

if (menuSide && btnOpenSide && btnsCloseSide && overlay) {
  function handleOpenMenu() {
    menuSide.classList.add('active');
    overlay.setAttribute('style', 'opacity:1; pointer-events: initial;');
  }

  function handleCloseMenu() {
    menuSide.classList.remove('active');
    overlay.setAttribute('style', 'opacity:0; pointer-events: none;');
  }

  btnOpenSide.addEventListener('click', handleOpenMenu);
  btnsCloseSide.forEach((btn) => {
    btn.addEventListener('click', handleCloseMenu);
  });
}

// Footer Mobile
const menuMobile = document.querySelectorAll('[data-menu-mobile]');

if (menuMobile.length) {
  menuMobile.forEach((menu) => {
    const btnToggle = menu.querySelector('[data-open-menu-mobile]');
    const menuContent = menu.querySelector('[data-content-menu]');

    btnToggle.addEventListener('click', () => {
      const heightMenu = menuContent.scrollHeight;
      const arrow = btnToggle.querySelector('i');
      if (menuContent.offsetHeight === 0) {
        menuContent.setAttribute('style', `max-height: ${heightMenu}px;`);
        arrow.setAttribute('style', 'transform: rotate(90deg);');
      } else {
        menuContent.setAttribute('style', `max-height: 0px;`);
        arrow.setAttribute('style', 'transform: rotate(0deg);');
      }
    });
  });
}

const btnOpenFooter = document.querySelectorAll('[data-open-footer]');
const menuFooter = document.querySelectorAll('[data-footer-menu]');

if (btnOpenFooter && menuFooter) {
  btnOpenFooter.forEach((btn) => {
    btn.addEventListener('click', () => {
      const heightFooter = menuFooter.scrollHeight;
      const arrow = btnOpenFooter.querySelector('i');
      if (menuFooter.offsetHeight === 0) {
        menuFooter.setAttribute('style', `max-height: ${heightFooter}px;`);
        arrow.setAttribute('style', 'transform: rotate(90deg);');
      } else {
        menuFooter.setAttribute('style', `max-height: 0px;`);
        arrow.setAttribute('style', 'transform: rotate(0deg);');
      }
    });
  });
}
