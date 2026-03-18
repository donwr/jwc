import { Wrapper } from '../(components)/wrapper'
import FeedbackPageServer from './feedback-form-server'
import s from './feedback.module.scss'
export default function FeedbackPage() {
  return (
    <Wrapper theme="dark" className={s.page}>
      <div className={`layout-grid ${s.wrapper}`}>
        <div className={s.feedbackPageSidebar}>
          <h1>Trainer Feedback</h1>
          <p>
            Your feedback helps me improve my training programs. Please rate
            your experience and leave a testimonial.
          </p>
        </div>
        <FeedbackPageServer />
      </div>
    </Wrapper>
  )
}
