import { Inter, Merriweather, MedievalSharp } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const merriweather = Merriweather({
  weight: '700',
  subsets: ['latin'],
  style: ['normal']
})

export const medievalSharp = MedievalSharp({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-medieval'
})

