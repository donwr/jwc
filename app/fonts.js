// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#local-fonts

import cn from 'clsx'
import localFont from 'next/font/local'

const satoshi = localFont({
  src: [
    {
      path: './fonts/satoshi/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--satoshi',
  preload: true,
})

export const fonts = { className: cn(satoshi.variable) }
