WebApp.Switches = () => {
  const switches = document.querySelectorAll('.switch');
  const init = () => {
    // Add event listener for each switch
    for (const switchElement of switches) {
      switchElement.addEventListener('click', evt => {
        evt.preventDefault();
        const label = evt.target.closest('label');
        const checkbox = label.querySelector('input[type=checkbox]');
        // Find the checkbox input and get the initial checked state
        const checkboxState = checkbox.checked;
        // Toggle checkbox and label state attribute
        checkbox.checked = !checkboxState;
        if (label.dataset.state === 'checked') {
          label.dataset.state = 'unchecked';
        } else {
          label.dataset.state = 'checked';
        }
      });
    }
  };

  if (switches.length > 0) {
    init();
  }
};
