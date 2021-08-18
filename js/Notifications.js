WebApp.Notifications = () => {
  const notificationsIndicator = document.querySelector('.notifications-indicator');
  const notificationsList = document.querySelector('.notifications-list');
  const unreadIndicator = notificationsIndicator.querySelector('.unread');
  const disabledIndicator = () => {
    notificationsList.classList.remove('state-open');
    unreadIndicator.remove();
    notificationsIndicator.classList.remove('state-active');
    notificationsIndicator.disabled = true;
  };

  const init = () => {
    document.addEventListener('click', (evt) => {
      const target = evt.target;

      // If click is on the indicator, toggle the list
      if (target.closest('.notifications-indicator')) {
        notificationsList.classList.toggle('state-open');
      }

      // If click is outside notifications, close the notifications list
      if (
        target !== notificationsIndicator &&
        target !== notificationsList &&
        target.closest('.notifications-indicator') === null &&
        target.closest('.notifications-list') === null &&
        !notificationsIndicator.contains(target)
      ) {
        notificationsList.classList.remove('state-open');
      }

      // Handle close notification
      if (target.classList.contains('btn-close-notice')) {
        target.closest('li').remove();
        const notificationCount = notificationsList.querySelectorAll('li');

        if (notificationCount.length === 0) {
          disabledIndicator();
        }
      }
    });
  };

  if (notificationsIndicator && notificationsList) {
    init();
  }
};
