WebApp.SettingsForm = () => {
  const settingsForm = document.getElementById('settings-form');
  const notificationsInput = document.getElementById('notifications-input');
  const notificationsSwitch = document.getElementById('notifications-input').closest('.switch');
  const publicInput = document.getElementById('public-input');
  const publicSwitch = document.getElementById('public-input').closest('.switch');
  const timezoneSelect = document.getElementById('timezone-select');
  const resetButton = document.getElementById('reset-button');
  const getSettings = JSON.parse(localStorage.getItem('user_settings'));
  const saveSettings = () => {
    const formValues = {
      notifications: notificationsInput.checked,
      public: publicInput.checked,
      timezone: timezoneSelect.value
    };
    localStorage.setItem('user_settings', JSON.stringify(formValues));
    WebApp.Alerts(
      'alert-settings',
      'success',
      'Settings saved!',
      `Your settings have been saved`
    );
  };
  const setFormValues = () => {
    if (getSettings) {

      // Set notifications switch
      if (getSettings.notifications) {
        notificationsSwitch.dataset.state = 'checked';
        notificationsInput.checked = true;
      } else {
        notificationsInput.removeAttribute('checked');
        notificationsSwitch.dataset.state = 'unchecked';
      }

      // Set public switch
      if (getSettings.public) {
        publicSwitch.dataset.state = 'checked';
        publicInput.checked = true;
      } else {
        publicInput.removeAttribute('checked');
        publicSwitch.dataset.state = 'unchecked';
      }

      // Set timezone select
      timezoneSelect.value = getSettings.timezone;
    }
  };
  const resetFormValues = () => {
    notificationsSwitch.dataset.state = 'checked';
    publicSwitch.dataset.state = 'checked';
    settingsForm.reset();
    localStorage.removeItem('user_settings');
    WebApp.Alerts(
      'alert-settings',
      'warning',
      'Warning!',
      `Your settings have been reset`
    );
  };
  const init = () => {
    setFormValues();

    settingsForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      saveSettings();
    });

    resetButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      resetFormValues();
    });
  };

  if (settingsForm) {
    init();
  }
};
