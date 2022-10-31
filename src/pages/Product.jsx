import React from 'react'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import FooterCopyright from '../components/FooterCopyright'
import MoreProductInfo from '../components/MoreProductInfo'
import Navbar from '../components/Navbar'
import Navheaders from '../components/Navheaders'
import NewsLetter from '../components/NewsLetter'
import RelatedProducts from '../components/RelatedProducts'
import SingleProduct from '../components/SingleProduct'

const Product = () => {
  return (
    <>
        <Announcements />
        <Navbar />
        <Navheaders />
        <SingleProduct />
        <MoreProductInfo />
        <RelatedProducts />
        <NewsLetter />
        <Footer />
        <FooterCopyright />
    </>
  )
}

export default Product