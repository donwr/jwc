import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { RealViewport } from 'components/real-viewport'
import { ToastProvider } from 'context/toast-context'
import { WorkoutMenuProvider } from 'context/workout-menu-context'
import { StyleVariables } from 'libs/style-variables'
import { colors, themes } from 'styles/config'
import 'styles/global.scss'
import CustomCursorManager from '../../../context/cursor-manager'
import { fonts } from '../../fonts'
import CustomCursor from './(components)/customCursor/index.tsx'
import { ToastContainer } from './(components)/toast/toast-container'
import { routing } from '../../../i18n/routing'

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://jesstrainer.de'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    metadataBase: new URL(APP_BASE_URL),
    title: {
      default: t('title'),
      template: t('titleTemplate'),
    },
    description: t('description'),
    openGraph: {
      type: 'website',
      url: APP_BASE_URL,
      title: {
        default: t('title'),
        template: t('titleTemplate'),
      },
      images: `${APP_BASE_URL}/og.png`,
    },
    twitter: {
      card: 'summary_large_image',
      title: {
        default: t('title'),
        template: t('titleTemplate'),
      },
      description: t('description'),
    },
  }
}

export const viewport = {
  themeColor: '#0D0D0D',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function Layout({ children, params }) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale} dir="ltr" className={fonts?.className}>
      <head>
        <StyleVariables colors={colors} themes={themes} />
      </head>
      <body>
        <RealViewport />
        <CustomCursorManager>
          <NextIntlClientProvider messages={messages}>
            <ToastProvider>
              <WorkoutMenuProvider>
                <CustomCursor />
                <ToastContainer />
                {children}
              </WorkoutMenuProvider>
            </ToastProvider>
          </NextIntlClientProvider>
        </CustomCursorManager>
      </body>
    </html>
  )
}
