const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  document.body.classList.toggle('dark');
});