import React from 'react'
import AccountDetails from '../components/AccountDetails'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import FooterCopyright from '../components/FooterCopyright'
import Navbar from '../components/Navbar'
import Navheaders from '../components/Navheaders'
import NewsLetter from '../components/NewsLetter'

const MyAccount = () => {
  return (
    <>
        <Announcements />
        <Navbar />
        <Navheaders />
        <AccountDetails />
        <NewsLetter />
        <Footer />
        <FooterCopyright />
    </>
  )
}

export default MyAccount