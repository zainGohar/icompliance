import Footer from './components/Footer/Footer'
import MainHeader from './components/Header/MainHeader'
import './globals.css'
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500']
})

export const metadata = {
  title: 'Ask Docs',
  description: 'Ask question from your documents',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={poppins.className}>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
