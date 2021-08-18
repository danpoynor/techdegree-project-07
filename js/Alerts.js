WebApp.Alerts = (id, type, title, content) => {
  if (id && type && title && content) {
    WebApp.Alerts.id = id.toLowerCase();
    WebApp.Alerts.type = type.toLowerCase();
    WebApp.Alerts.title = title;
    WebApp.Alerts.content = content;
  }
  const h1 = document.getElementsByTagName('h1')[0];
  const types = ['error', 'success', 'warning'];
  const createAlertsContainer = () => {
    const alertsContainer = document.createElement('section');
    alertsContainer.classList.add('alerts-container');

    return alertsContainer;
  };
  const createAlert = () => {
    const alertElement = document.createElement('section');
    const alertContent = `<p><strong class="type">${WebApp.Alerts.title}</strong> ${WebApp.Alerts.content}</p>`;
    const alertClose = `<button class="btn-close-alert" title="Close Alert" type="button">+</button>`;
    alertElement.classList.add('alert');
    alertElement.id = id;

    if (types.includes(type)) {
      alertElement.classList.add(`alert-${type}`);
    }

    alertElement.innerHTML = alertContent + alertClose;

    return alertElement;
  };
  const removeAlert = () => {
    const currentAlert = document.getElementById(id);
    if (currentAlert && currentAlert.id === 'alert-settings') {
      currentAlert.remove();
    }
  };
  const showAlert = alertElement => {
    const alertsContainer = document.querySelector('.alerts-container');
    if (alertsContainer) {
      alertsContainer.insertAdjacentElement('afterbegin', alertElement);
    } else {
      const newAlertsContainer = h1.insertAdjacentElement('afterend', createAlertsContainer());
      newAlertsContainer.insertAdjacentElement('afterbegin', alertElement);
    }
    window.scrollTo(0, 0);
  };
  const init = () => {
    document.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('btn-close-alert')) {
        const alert = evt.target.closest('.alert');
        alert.remove();
      }
    });
  };

  if (typeof WebApp.Alerts.id !== 'undefined') {
    removeAlert();
    showAlert(createAlert());
  }

  if (h1) {
    init();
  }
};
