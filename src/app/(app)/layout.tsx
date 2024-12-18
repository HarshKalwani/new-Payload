import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

import './globals.css'
import FooterServer from '@/blocks/global/Footer/Server'
import HeaderServer from '@/blocks/global/Header/Server'

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        <HeaderServer/>
        {children}
        <FooterServer/>
      </body>
    </html>
  )
}

export default Layout