import React from 'react'
import LoginPage from '../../../components/LoginRegis/LoginPage'
import Nav from '../../../components/Navbar/Nav'
import NavbarBackground from '../../../components/Navbar/NavbarBackground'

const page = () => {
  return (
    <div>
        <NavbarBackground>
        <Nav />
      </NavbarBackground>
        <LoginPage />
    </div>
  )
}

export default page