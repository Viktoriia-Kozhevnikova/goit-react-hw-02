
import s from '../Options/Options.module.css'

const Options = ({updateFeedback, totalFeedback, resetFeedbacks}) => {
  return (
    <>
      <div className={s.buttons}>
        <button onClick={() => updateFeedback('good')} className={s.btn}>Good</button>
        <button onClick={() => updateFeedback('neutral')} className={s.btn}>Neutral</button>
        <button onClick={() => updateFeedback('bad')} className={s.btn}>Bad</button>
        {totalFeedback > 0 && (<button onClick={resetFeedbacks} className={s.btn}>Reset</button>)}
      </div>
    </>
  )
}

export default Options