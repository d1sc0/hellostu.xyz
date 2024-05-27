document.addEventListener('DOMContentLoaded', () => {
  // Get all "burger-button" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.burger-button'),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute (menu-links)
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" and "opened" class on both the "burger-button" and the "menu-links"
        el.classList.toggle('opened');
        $target.classList.toggle('is-active');

        // Toggle accessibility labels so screen readers know when menus are expanded or not
        el.ariaExpanded = el.ariaExpanded !== 'true';
        $target.ariaExpanded = $target.ariaExpanded !== 'true';
      });
    });
  }
});
