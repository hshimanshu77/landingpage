function scrollToSection() {
  document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const section = document.querySelector('section');
  const sectionPos = section.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    section.classList.add('visible');
  }
});
