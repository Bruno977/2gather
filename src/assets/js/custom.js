// Padding Body

const header = document.querySelector('header');
const logoHeader = header.querySelector('[data-logo] img');
const heightHeader = header.offsetHeight;

function handleScrollWindow() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > heightHeader) {
    header.setAttribute('style', 'padding: 10px;');
    header.classList.add('bg-body-default');
    // logoHeader.setAttribute('style', 'max-height: 70px;');
  } else {
    header.removeAttribute('style');
    header.classList.remove('bg-body-default');

    // logoHeader.removeAttribute('style');
  }
}

window.addEventListener('scroll', handleScrollWindow);
