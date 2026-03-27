import s from './footer.module.scss'

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerWrap}>
        <div className={`layout-grid ${s.content}`}>
          <div className={`layout-grid ${s.main}`}>
            <div className={`layout-grid ${s.info}`}>
              <div className={s.help}>
                <div className={s.helpWrap}>
                  <h5>KONTAKT</h5>
                  <ul className={s.ul}>
                    <li>
                      <a href="mailto:jwctrainingberlin@gmail.com">E-Mail</a>
                    </li>
                    <li>
                      <a href="tel:+4915679614147">+49 156 79614147</a>
                    </li>
                    <li>
                      <a href="#cta">Call buchen</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={s.more}>
                <h5>ANGEBOTE</h5>
                <ul className={s.ul}>
                  <li>
                    <a href="#angebote">Personal Training</a>
                  </li>
                  <li>
                    <a href="#angebote">Trainingsplan</a>
                  </li>
                  <li>
                    <a href="#angebote">Online-Coaching</a>
                  </li>
                </ul>
              </div>
              <div className={s.text}>
                <h5>STRUKTUR STATT MOTIVATION</h5>
              </div>
            </div>
            <div className={s.details}>
              <div className={s.detailsWrap}>
                <ul className={s.detailLinks}>
                  <li className={s.link}>
                    <a href="/policy">DATENSCHUTZ</a>
                  </li>
                  <li className={s.link}>
                    <a href="/terms">IMPRESSUM</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.terms}>
              <div className={s.termsWrap}>
                <h5>PERSONAL TRAINING IN BERLIN</h5>
                <p>
                  Individuelles Training mit Struktur, Progression und echtem
                  Coaching — für Menschen, die endlich dranbleiben wollen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
