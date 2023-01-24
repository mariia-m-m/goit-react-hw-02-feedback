import PropTypes from 'prop-types';
import styles from '../FeedbackMenu/feedbackMenu.module.css';

const Notification = ({ message, total }) => {
  if (total === 0) {
    return <p className={styles.row}>{message}</p>;
  }
  return;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
