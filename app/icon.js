import { ImageResponse } from 'next/og'

export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'

const getFont = async () => {
  const res = await fetch(
    new URL('fonts/supreme/Supreme-Bold.ttf', import.meta.url),
  )
  return await res.arrayBuffer()
}

export default async function Icon() {
  const font = await getFont()

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Supreme',
            fontSize: 320,
            fontWeight: 700,
            color: '#f5f0eb',
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          J
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Supreme', data: font, style: 'normal', weight: 700 }],
    },
  )
}
