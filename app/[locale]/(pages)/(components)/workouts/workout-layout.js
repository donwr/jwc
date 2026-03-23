import Head from 'next/head'
import Link from 'next/link'
import { Button } from '../buttons/button'
import { ArrowLeft } from '../icons/arrow'
import s from './workout-layout.module.scss'

const WorkoutLayout = ({ data }) => {
  return (
    <>
      <Head>
        <title>
          {data.seo.pageTitle
            ? `${data.seo.pageTitle} | Ikonic Studio`
            : 'Default Title | Ikonic Studio'}
        </title>
        <meta name="description" content={`${data.seo.metaDescription}`} />
        <meta property="og:title" content={data.seo.ogTitle} />
        <meta property="og:description" content={data.seo.ogDescription} />
        <meta property="og:url" content={data.seo.ogUrl || ''} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={data.seo.ogImage || '/assets/og-image.png'}
        />
      </Head>

      <div className={s.workoutContent}>
        <Link href="/workouts" className={s.backBtn}>
          <ArrowLeft height="14" width="14" />
          BACK TO WORKOUTS
        </Link>
        <div className={s.hero}>
          <div className={s.heroTopbar}>
            <h2>{data.program}</h2>
            <Button text={'JOIN A SAMPLE WORKOUT'}></Button>
          </div>

          <div className={s.heroContent}>
            <h1>{data.program}</h1>
            <p>{data.description}</p>
            <img className={s.heroBackground} src={data.previewImage} alt="" />
            <div className={s.cover}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkoutLayout
