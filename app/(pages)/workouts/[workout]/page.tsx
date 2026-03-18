import { Wrapper } from 'app/(pages)/(components)/wrapper'
import { workoutCategories } from 'app/(pages)/(data)/workout-data'
import { Metadata } from 'next'
import Link from 'next/link'

export async function generateStaticParams() {
  const programs = workoutCategories.map((offer) => ({
    workout: offer.program,
  }))

  return programs
}

export async function generateMetadata({
  params,
}: {
  params: { workout: string }
}): Promise<Metadata> {
  const { workout } = params
  const data = workoutCategories.find(
    (category) => category.program === workout,
  )

  return {
    title: data?.program || 'Angebot',
    description: data?.description || 'Personal Training in Berlin',
  }
}

export default function WorkoutPage({
  params,
}: {
  params: { workout: string }
}) {
  const { workout } = params
  const data = workoutCategories.find(
    (category) => category.program === workout,
  )

  if (!data) {
    return (
      <Wrapper theme="dark" className="">
        <div style={{ padding: '8rem 2rem', textAlign: 'center' }}>
          <h1>Angebot nicht gefunden</h1>
          <Link href="/#angebote">Zurück zu den Angeboten</Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper theme="dark" className="">
      <div style={{ padding: '8rem 2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h1>{data.program}</h1>
        <p style={{ marginTop: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}>
          {data.description}
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link
            href="/#angebote"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#c8a961',
              color: '#0d0d0d',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Alle Angebote ansehen
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
