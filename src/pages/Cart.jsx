import React from 'react'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import FooterCopyright from '../components/FooterCopyright'
import Navbar from '../components/Navbar'
import Navheaders from '../components/Navheaders'
import NewsLetter from '../components/NewsLetter'
import CartPage from '../components/CartPage'
import styled from 'styled-components'
import { mobile, tablet, Laptop } from '../Responsive'
import WishListPage from '../components/WishListPage'

const Container = styled.div`
    padding: 50px 100px;
    ${
        mobile({
            padding: "40px 10px 10px 10px",
        })
    }
    
    ${
        tablet({
            padding: "30px 10px",
        })
    }

    ${
        Laptop({
            padding: "30px 50px",
        })
    }
`
const Header = styled.p`
    font-size: 30px;
    text-align: center;
    margin-bottom: 40px;
`
const ItemHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ContinueBtn = styled.button`
    padding: 10px 20px;
    border: 2px solid #d10024;
    color: black;
    font-weight: 500;
    text-transform: uppercase;
    background-color: #fff;
    cursor: pointer;

    ${
        mobile({
            display: "none",
        })
    }
`
const CheckOutBtn = styled.button`
    padding: 10px 20px;
    border: 2px solid #fff;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    background-color: #d10024;
    cursor: pointer;

    ${
        mobile({
            display: "none",
        })
    }
`
const Tabs = styled.div`
    ${
        mobile({
            padding: "0px 10px",
            fontSize: "18px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        })
    }
`
const CartTab = styled.a`
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
    margin-right: 10px;

    &:hover{
        color: #d10024;
        transition: all 0.3s;
    }

    ${
        mobile({
            fontSize: "18px",
        })
    }
`
const WishListTab = styled.a`
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;

    ${
        mobile({
            fontSize: "18px",
        })
    }

    &:hover{
        color: #d10024;
        transition: all 0.3s;
    }
`

const Cart = () => {
  return (
    <>
        <Announcements />
        <Navbar />
        <Navheaders />
        <Container>
            <Header>Your Cart</Header>
            <ItemHolder>
                <ContinueBtn>Continue Shopping</ContinueBtn>
                <Tabs>
                <CartTab>Your Cart(4)</CartTab>
                <WishListTab>Your WishList(0)</WishListTab>
                </Tabs>
                <CheckOutBtn>Checkout Now</CheckOutBtn>
            </ItemHolder>
        </Container>

        <CartPage />
        {/* <WishListPage /> */}
        <NewsLetter />
        <Footer />
        <FooterCopyright />
    </>
  )
}

export default Cart