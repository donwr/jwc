import {
  Barbell,
  ChatsCircle,
  ClipboardText,
} from '@phosphor-icons/react/dist/ssr'
import type { JSX } from 'react'

interface CalendarConfig {
  calLink: string
  namespace: string
  calConfig: string
  layout?: string
}

interface OfferProgram {
  id: number
  program: string
  description: string
  type: string
  duration: string
  icon: JSX.Element
  calendar: CalendarConfig
}

export const workoutCategories: OfferProgram[] = [
  {
    id: 1,
    program: 'Personal Training',
    description:
      'Für dich, wenn du allein nicht mehr weiterkommst. 1:1 Sessions mit direktem Technik-Coaching und Korrekturen in Echtzeit.',
    type: '1:1 Coaching',
    duration: 'Flexibel',
    icon: <Barbell />,
    calendar: {
      calLink: 'jesstrainer/personal-training',
      namespace: 'personal-training',
      calConfig: '{"layout":"month_view"}',
    },
  },
  {
    id: 2,
    program: 'Individueller Trainingsplan',
    description:
      'Für dich, wenn du weisst, dass du trainieren kannst — aber nicht was. Dein Plan, klar strukturiert, auf dich zugeschnitten. 59 €',
    type: 'Trainingsplan',
    duration: '4–6 Wochen',
    icon: <ClipboardText />,
    calendar: {
      calLink: 'jesstrainer/trainingsplan',
      namespace: 'trainingsplan',
      calConfig: '{"layout":"month_view"}',
    },
  },
  {
    id: 3,
    program: 'Online-Coaching',
    description:
      'Für dich, wenn du einen Plan brauchst UND jemanden, der dranbleibt. Trainingsplan + laufende Betreuung ab 99 €.',
    type: 'Online-Betreuung',
    duration: '4–12 Wochen',
    icon: <ChatsCircle />,
    calendar: {
      calLink: 'jesstrainer/online-coaching',
      namespace: 'online-coaching',
      calConfig: '{"layout":"month_view"}',
    },
  },
]
