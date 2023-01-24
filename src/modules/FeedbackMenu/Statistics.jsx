import PropTypes from 'prop-types';
import styles from '../FeedbackMenu/feedbackMenu.module.css';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  if (total === 0) {
    return;
  }
  return (
    <>
      <p className={styles.row}>Good:{good} </p>
      <p className={styles.row}>Neutral:{neutral} </p>
      <p className={styles.row}>Bad:{bad}</p>
      <p className={styles.row}>Total:{total} feedbacks</p>
      <p className={styles.row}>Positive feedback:{positivePercentage} %</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
