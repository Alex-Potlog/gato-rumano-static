document.addEventListener('DOMContentLoaded', () => {
  setupMenu();

  const openBtn = document.querySelector('.tablinks');
  if (openBtn) {
    const target = document.getElementById(openBtn.dataset.target || 'freds');
    if (target) target.style.display = 'block';
  }
});

function setupMenu() {
  const openBtn = document.querySelector('.burgerbtn');
  const closeBtn = document.querySelector('.closebtn');
  const sidebar = document.querySelector('#header-bottom nav');
  const overlay = document.getElementById('overlay');
  const page = document.body;

  if (!openBtn || !closeBtn || !sidebar || !overlay) return;

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.innerWidth < 768) {
      sidebar.style.width = '100%';
      overlay.style.display = 'block';
      closeBtn.style.display = 'block';
      page.style.overflow = 'hidden';
    }
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.innerWidth <= 768) {
      sidebar.style.width = '0';
      overlay.style.display = 'none';
      closeBtn.style.display = 'none';
      page.style.overflow = 'inherit';
    }
  });

  overlay.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebar.style.width = '0';
      overlay.style.display = 'none';
      closeBtn.style.display = 'none';
    }
  });
}
