import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
  return value ? (
    <li data-notification-type={type}>{value}</li>
  ) : (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  );
}

NotificationItem.defaultProps = {
  type: 'default',
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
};
