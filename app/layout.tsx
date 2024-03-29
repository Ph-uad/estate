import { Nunito } from 'next/font/google'
import './globals.css'
import { Navbar } from './components'


export const metadata = {
  title: 'Real Estates',
  description: 'Estate Build',
}

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
