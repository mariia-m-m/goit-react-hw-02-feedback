import styles from './modules/FeedbackMenu/feedbackMenu.module.css';
import { Component } from 'react';
import FeedbackOptions from './modules/FeedbackMenu/FeedbackOptions';
import Statistics from './modules/FeedbackMenu/Statistics';
import SectionTitle from './modules/FeedbackMenu/SectionTitle';
import Notification from './modules/FeedbackMenu/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  countFeedbackByName(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    return value;
  }

  leaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  positiveTotal() {
    return (
      this.countPositiveFeedbackPercentage('good') +
      this.countPositiveFeedbackPercentage('neutral')
    ).toFixed(2);
  }

  render() {
    const goodTotal = this.countFeedbackByName('good');
    const neutralTotal = this.countFeedbackByName('neutral');
    const badTotal = this.countFeedbackByName('bad');

    return (
      <div className={styles.wrapper}>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
        </SectionTitle>
        <SectionTitle title="Statistics">
          <Notification
            message="There is no feedback"
            total={this.countTotalFeedback()}
          />
          <Statistics
            good={goodTotal}
            neutral={neutralTotal}
            bad={badTotal}
            total={this.countTotalFeedback()}
            positivePercentage={this.positiveTotal()}
          />
        </SectionTitle>
      </div>
    );
  }
}
