import React from 'react'
import Header from '@/components/layout/headers/Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
