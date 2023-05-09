function apertaButton() {
  const buttonIntro = document.querySelector('.intro-button');
  buttonIntro.addEventListener('click', () => {
    console.log('fui clicado');
  });
}

apertaButton();
