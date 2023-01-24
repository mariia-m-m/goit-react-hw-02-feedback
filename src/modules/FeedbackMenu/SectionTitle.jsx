import PropTypes from 'prop-types';
import styles from '../FeedbackMenu/feedbackMenu.module.css';

const SectionTitle = ({ children, title }) => {
  return (
    <div className={styles.feedbackSection}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  // children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
