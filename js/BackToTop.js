WebApp.BackToTop = () => {
  const mainNav = document.querySelector('body > nav ul');
  const backToTop = document.getElementById('back-to-top');

  // If mainNav is in the viewport, don't show the back to top button
  if ('IntersectionObserver' in window && mainNav && backToTop) {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        backToTop.classList.remove('state-visible');
      } else {
        backToTop.classList.add('state-visible');
      }
    });
    observer.observe(mainNav);
  }
};
