import PropTypes from 'prop-types';
import styles from '../FeedbackMenu/feedbackMenu.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button className={styles.button} onClick={e => onLeaveFeedback('good')}>
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={styles.button} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
