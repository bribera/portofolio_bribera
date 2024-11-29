import './globals.css'
import Navbar from '@/components/Navbar'
import ChangeAnimation from "@/components/ChangeAnimation"



export const metadata = {
  title: 'My portofolio',
  description: 'En savoir plus sur moi',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`relative overflow-auto`}>
        <ChangeAnimation>
          <Navbar />
          {children}
        </ChangeAnimation>
      </body>
    </html>
  )
}
