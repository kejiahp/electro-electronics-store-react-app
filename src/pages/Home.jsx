import React from 'react'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import FooterCopyright from '../components/FooterCopyright'
import Navbar from '../components/Navbar'
import Navheaders from '../components/Navheaders'
import NewProducts from '../components/NewProducts'
import NewsLetter from '../components/NewsLetter'
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
        <NewsLetter />
        <Footer />
        <FooterCopyright />
    </>
  )
}

export default Home