import React from 'react'
import { Wrapper } from '../(components)/wrapper'
import s from './terms.module.scss'

const Impressum = () => {
  return (
    <Wrapper theme="dark">
      <div className={s.terms}>
        <h2>Impressum</h2>

        <h3>Angaben gemäß § 5 TMG</h3>
        <p>
          Jessica Wächter<br />
          JWC Training<br />
          Berlin, Deutschland
        </p>

        <h4>Kontakt</h4>
        <p>
          Telefon: +49 156 79614147<br />
          E-Mail: <a href="mailto:jwctrainingberlin@gmail.com">jwctrainingberlin@gmail.com</a>
        </p>

        <h4>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
        <p>
          Jessica Wächter<br />
          Berlin, Deutschland
        </p>

        <h4>Haftungsausschluss</h4>
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
          jedoch keine Gewähr übernommen werden.
        </p>

        <h4>Haftung für Links</h4>
        <p>
          Diese Website enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten Seiten
          ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich.
        </p>

        <h4>Urheberrecht</h4>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser
          Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </div>
    </Wrapper>
  )
}

export default Impressum
