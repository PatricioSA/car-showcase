import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car hub',
  description: 'Aluguel de carros',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
