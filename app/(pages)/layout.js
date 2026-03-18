import { RealViewport } from 'components/real-viewport'
import { ToastProvider } from 'context/toast-context'
import { WorkoutMenuProvider } from 'context/workout-menu-context'
import { StyleVariables } from 'libs/style-variables'
import { colors, themes } from 'styles/config'
import 'styles/global.scss'
import CustomCursorManager from '../../context/cursor-manager'
import { fonts } from '../fonts'
import CustomCursor from './(components)/customCursor/index.tsx'
import { ToastContainer } from './(components)/toast/toast-container'

const APP_DEFAULT_TITLE = 'Jess — Personal Training Berlin'
const APP_TITLE_TEMPLATE = '%s — Jess Personal Training'

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://jesstrainer.de'

export const metadata = {
  metadataBase: new URL(APP_BASE_URL),
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description:
    'Personal Training, Coaching und individuelle Trainingspläne in Berlin. Kraftaufbau, Abnehmen, funktionelles Training, Calisthenics, Mobility — mit Struktur, Progression und echtem Coaching.',
  openGraph: {
    type: 'website',
    url: APP_BASE_URL,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    images: `${APP_BASE_URL}/og.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description:
      'Personal Training, Coaching und individuelle Trainingspläne in Berlin. Kraftaufbau, Abnehmen, funktionelles Training, Calisthenics, Mobility — mit Struktur, Progression und echtem Coaching.',
  },
}

export const viewport = {
  themeColor: '#0D0D0D',
}

export default async function Layout({ children }) {
  return (
    <html lang="de" dir="ltr" className={fonts?.className}>
      <head>
        <StyleVariables colors={colors} themes={themes} />
      </head>
      <body>
        <RealViewport />
        <CustomCursorManager>
          <ToastProvider>
            <WorkoutMenuProvider>
              <CustomCursor />
              <ToastContainer />
              {children}
            </WorkoutMenuProvider>
          </ToastProvider>
        </CustomCursorManager>
      </body>
    </html>
  )
}
