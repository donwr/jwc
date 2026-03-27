import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'JWC Personal Training Berlin'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

const getFont = async (name) => {
  const res = await fetch(new URL(`fonts/supreme/Supreme-Bold.ttf`, import.meta.url))
  return await res.arrayBuffer()
}

const getMono = async () => {
  const res = await fetch(
    new URL('fonts/IBM_Plex_Mono/IBMPlexMono-Regular.ttf', import.meta.url),
  )
  return await res.arrayBuffer()
}

export default async function Image() {
  const [supremeFont, monoFont] = await Promise.all([getFont(), getMono()])

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111111',
          padding: '60px 80px',
          position: 'relative',
        }}
      >
        {/* Logo wordmark */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <span
            style={{
              fontFamily: 'Supreme',
              fontSize: 160,
              fontWeight: 700,
              color: '#f5f0eb',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}
          >
            JWC
          </span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: '28px',
          }}
        >
          <span
            style={{
              fontFamily: 'IBMPlexMono',
              fontSize: 18,
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Personal Training Berlin
          </span>
          <span
            style={{
              fontFamily: 'IBMPlexMono',
              fontSize: 18,
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Stronger. Fitter. Consistent.
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Supreme', data: supremeFont, style: 'normal', weight: 700 },
        { name: 'IBMPlexMono', data: monoFont, style: 'normal', weight: 400 },
      ],
    },
  )
}
