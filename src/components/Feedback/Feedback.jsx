
import s from '../Feedback/Feedback.module.css'

const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul className={s.list}>
        <li>Good: {feedbacks.good}</li>
        <li>Neutral: {feedbacks.neutral}</li>
        <li>Bad: {feedbacks.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}</li>
      </ul>
    </>
  )
}

export default Feedback