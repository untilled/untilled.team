import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: any
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
