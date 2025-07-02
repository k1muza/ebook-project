import { Inter, Merriweather, Uncial_Antiqua } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const merriweather = Merriweather({
  weight: '700',
  subsets: ['latin'],
  style: ['normal']
})

export const uncialAntiqua = Uncial_Antiqua({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-medieval'
})

