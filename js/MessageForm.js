WebApp.MessageForm = () => {
  const userField = document.getElementById('user-field');
  const messageField = document.getElementById('message-field');
  const messageForm = document.getElementById('message-form');

  const createTooltip = (toolTipText) => {
    const tooltipElement = document.createElement('p');
    const tooltipContent = toolTipText;
    tooltipElement.classList.add('tooltip');
    tooltipElement.innerHTML = tooltipContent;

    return tooltipElement;
  };
  const addOrRemoveTooltip = (show, input, toolTipText) => {
    const tooltip = input.nextElementSibling;
    if (show) {
      if (!tooltip.classList.contains('tooltip')) {
        input.insertAdjacentElement('afterend', createTooltip(toolTipText));
      }
    } else if (tooltip.classList.contains('tooltip')) {
      tooltip.remove();
    }
  };

  const isValidUsername = username => {
    return (/^[A-Za-z\s]+$/).test(username);
  };

  const isValidMessage = message => {
    return (/^[\w\s-]+$/).test(message);
  };

  // Validate text inputs
  const createInputListener = validator => {
    return evt => {
      const text = evt.target.value;
      const valid = validator(text);
      const showTip = text !== '' && !valid;
      const toolTipText = evt.target.dataset.tooltip;
      addOrRemoveTooltip(showTip, evt.target, toolTipText);
    };
  };

  // Other stuff

  const sendMessage = () => {
    const currentAlert = document.getElementById('alert-message');
    if (currentAlert) {
      currentAlert.remove();
    }

    WebApp.Alerts(
      'alert-message',
      'success',
      'Message sent!',
      `Your message has been sent to <strong>${userField.value}</strong>`
    );
    messageForm.reset();
  };

  const submitForm = evt => {
    evt.preventDefault();
    const username = userField.value;
    const message = messageField.value;
    const usernameTooltip = userField.nextElementSibling;
    const messageTooltip = messageField.nextElementSibling;

    // If tooltips are still showing, make them visually stronger
    if (usernameTooltip.classList.contains('tooltip')) {
      usernameTooltip.style.backgroundColor = '#f53d3d';
      usernameTooltip.style.color = 'white';
    }
    if (messageTooltip.classList.contains('tooltip')) {
      messageTooltip.style.backgroundColor = '#f53d3d';
      messageTooltip.style.color = 'white';
    }

    if (usernameTooltip.classList.contains('tooltip') || messageTooltip.classList.contains('tooltip')) {
      const currentAlert = document.getElementById('alert-message');
      if (currentAlert) {
        currentAlert.remove();
      }

      WebApp.Alerts(
        'alert-message',
        'error',
        'Error!',
        `Please check the Message User form for errors.`
      );
    }

    if (isValidUsername(username) && isValidMessage(message)) {
      sendMessage();
    }
  };

  const init = () => {
    userField.addEventListener('input', createInputListener(isValidUsername));
    messageField.addEventListener('input', createInputListener(isValidMessage));
    messageForm.addEventListener('submit', submitForm);
  };

  if (userField && messageField && messageForm) {
    init();
  }
};
