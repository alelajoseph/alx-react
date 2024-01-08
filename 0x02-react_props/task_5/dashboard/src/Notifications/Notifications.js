import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {
  function handleClose() {
    console.log('Close button has been clicked');
  }

  return (
    <>
      <div className='menuItem'>Your notifications</div>
      {displayDrawer && (
        <div className='Notifications'>
          <p>
            Here is the list of notifications
            <button aria-label='Close' onClick={handleClose}>
              <img src={require('../assets/close-icon.png')} alt='Close icon' />
            </button>
          </p>
          {listNotifications === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <ul>
              {listNotifications.map((notification) => {
                const props = {
                  type: notification.type,
                  ...(notification.value
                    ? { value: notification.value }
                    : { html: notification.html }),
                };

                return <NotificationItem key={notification.id} {...props} />;
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
