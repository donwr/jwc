import { Wrapper } from '../(components)/wrapper'
import ContactPageServer from './contact-form-server'
import s from './contact.module.scss'

export default function ContactPage() {
  return (
    <Wrapper theme="dark" className={s.page}>
      <div className={`layout-grid ${s.wrapper}`}>
        <div className={s.contactPageSidebar}>
          <h2>Kontakt aufnehmen</h2>
          <p>
            {' '}
            Schreib mir eine Nachricht oder erreiche mich über meine Kanäle. Ich
            bin hier, um dich auf deinem Fitnessweg zu unterstützen und alle
            Fragen zu beantworten.{' '}
          </p>
          <div className={s.contactDetails}>
            <p>Email: jess@trainer.de</p>
            <div className={s.socialIcons}>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
        <ContactPageServer />
      </div>
    </Wrapper>
  )
}
