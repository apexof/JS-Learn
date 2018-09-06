document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cont');
  container.onclick = (e) => {
    const target = e.target;
    if (target.classList.contains('remove-button')) {
      target.parentElement.style.display = 'none';
    }
  };
});
