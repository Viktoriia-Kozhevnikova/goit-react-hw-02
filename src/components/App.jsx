import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '/src/components/App.css'
import Description from '/src/components/Description/Description.jsx'
import Options from '/src/components/Options/Options.jsx'
import Feedback from '/src/components/Feedback/Feedback.jsx'
import Notification from '/src/components/Notification/Notification.jsx'

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem('feedbacks');
    if (savedFeedbacks) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  useEffect(() => { window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks)) }, [feedbacks]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedbacks={resetFeedbacks} />
      {totalFeedback > 0 && (<Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />)}
      {totalFeedback === 0 && <Notification />}
    </>
  )
}

export default App;