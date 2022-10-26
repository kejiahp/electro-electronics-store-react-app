import React from 'react'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Navheaders from '../components/Navheaders'
import NewProducts from '../components/NewProducts'
import Shopnow from '../components/Shopnow'

const Home = () => {
  return (
    <>
        <Announcements />
        <Navbar />
        <Navheaders />
        <Shopnow />
        <NewProducts />
    </>
  )
}

export default Home