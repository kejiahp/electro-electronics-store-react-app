import React from 'react'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Navheaders from '../components/Navheaders'
import NewProducts from '../components/NewProducts'
import Shopnow from '../components/Shopnow'
import TopDeals from '../components/TopDeals'
import TopSelling from '../components/TopSelling'


const Home = () => {
  return (
    <>
        <Announcements />
        <Navbar />
        <Navheaders />
        <Shopnow />
        <NewProducts />
        <TopDeals />
        <TopSelling />
    </>
  )
}

export default Home