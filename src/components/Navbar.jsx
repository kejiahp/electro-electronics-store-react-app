import { faBars, faHeart, faXmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Desktop, Laptop, mobile, tablet } from '../Responsive'
import { announcementRed, announcementRedBg, navBg } from '../utils/colors'


const Container = styled.div`
    ${navBg}
    display: flex;
    padding: 20px 100px;
    align-items: center;
    justify-content: space-between;
    color: white;
    border-bottom:3px solid #d10024;

    ${
        mobile({
            padding: '10px',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        })
    }

    ${
        tablet({
            padding: '10px',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        })
    }
    ${
        Laptop({
            padding: '20px',
        })
    }
`
const Logo = styled.div`
    cursor: pointer;
    ${
        mobile({
            marginTop: "20px",
            marginBottom: "40px",
        })
    }
        ${
        tablet({
            marginTop: "20px",
            marginBottom: "40px",
        })
    }
    `
const LogoText = styled.span`
    font-size: 40px;
    font-weight: 700;
`
const LogoDot = styled.span`
    ${announcementRed}
`
const SearchBar = styled.div`
    ${
        mobile({
            marginBottom: "40px"
        })
    }
    ${
        tablet({
            marginBottom: "40px"
        })
    }
`
const SearchCategories = styled.select`
    padding: 10px;
    width: 160px;
    cursor: pointer;
    border-radius: 50px 0px 0px 50px;    
    ${
        mobile({
            
        })
    }
`
const CategoryOptions = styled.option``
const SearchInput = styled.input`
    padding: 10px;
    width: 250px;

    ${
        mobile({
            width: "calc(100% - 260px)",
        })
    }
    ${
        tablet({
            width: "calc(100% - 65%)",
        })
    }
    ${
        Laptop({
            width: "calc(100% - 300px)",
        })
    }
    ${
        Desktop({
            width: "calc(100% - 300px)",
        })
    }
`
const SearchSubmit = styled.button`
    ${announcementRedBg}
    color: white;
    outline: none;
    height: 40px;
    width: 100px;
    border: none;
    font-weight: 800;
    cursor: pointer;
    border-radius: 0px 50px 50px 0px;
    
    ${
        mobile({
            width: "auto",
            padding: "0px 10px",
        })
    }
`
const Personal = styled.div`
    display: flex;

    ${
        mobile({
            marginBottom: "40px",
        })
    }
    ${
        tablet({
            marginBottom: "40px",
            width: "90%",
            justifyContent: "flex-end"
        })
    }
`
const WishList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    cursor: pointer;
`
const WishListText = styled.span`
    font-size: 12px;
    font-weight: 600;
`
const WishListCounter = styled.p`
    position: absolute;
    font-size: 10px;
    top: -10px;
    right: 10px;
    ${announcementRedBg}
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

const Cart = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    cursor: pointer;
`
const CartText = styled.span`
    font-size: 12px;
    font-weight: 600;
`
const CartCounter = styled.p`
    position: absolute;
    top: -10px;
    right: 0%;
    font-size: 10px;
    ${announcementRedBg}
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`
const Hamburger = styled.div`
    position: relative;
    flex-direction: column;
    cursor: pointer;
    display: none;

    ${
        mobile({
            display: "flex"
        })
    }
    ${
        tablet({
            display: "flex"
        })
    }
`
const HamburgerText = styled.span`
    font-size: 12px;
    font-weight: 600;
`
const HamburgerOpen = styled.div`
    background-color:#15161D;
    width: 250px;
    height: 100vh;
    overflow-y: scroll;
    position: fixed;
    transform: translateX(${props=>props.isopen ? "0%" : "-100%"});
    left: 0;
    top: 0;
    z-index: 30;
    transition: 0.3s all;
    padding-top: 50px;
`
const HamburgerOpenOptions = styled.p`
    cursor: pointer;
    padding: 15px;
    transition: 0.3s all;

    &::after{
        content: "";
        width: 0%;
        height: 2px;
        display: block;
        background-color: #d10024;
        transition: all 0.3s;
    }

    &:hover{
        color: #d10024;
    }

    &:hover::after {
        width: 100%;
    }
`
const HamburgerClose = styled.div`
        padding: 15px;
        font-size: 40px;
        transition: all 0.3ms;
        cursor: pointer;

        &:hover{
            color: #d10024;
        }
`
const CartDropDown = styled.div`
    cursor: default;
    width: 300px;
    position: absolute;
    background-color: #fff;
    border: 2px solid #e4e7ed;
    top: 100%;
    right: 0;
    z-index: 20;
    display: ${props=> props.open ? "block" : "none"};

    ${
        mobile({
            left: "-120px",
            width: "200px",
        })
    }
`
const CartList = styled.div`
    padding: 10px;
    height: 150px;
    overflow-y: scroll;
`
const CartProduct = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 20px;
`
const CartProductImage = styled.img`
    object-fit: contain;
    width: 30%;
`
const CartProductDetails = styled.div`
    padding: 0px 10px;
`
const CartProductName = styled.p`
    color: #15161D;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 10px;
`
const CartProductPrice = styled.p`
    color: #15161D;
    font-size: 14px;
    font-weight: 700;
`
const CartProductCount = styled.span`
    font-size: 14px;
    margin-right: 10px;
    color: #333;
    font-weight: 300;
`
const CartDetails = styled.div`
    padding: 20px 10px;
    border-top: 1px solid #e4e7ed;
`
const ItemCount = styled.p`
    font-size: 12px;
    color: black;
    color: #333;
`
const SubtotalCount = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #15161D;
`
const CartDropBtns = styled.div`
margin-bottom: -3px;
`
const ViewCartBtn = styled.button`
    border: none;
    background-color: #15161D;
    text-align: center;
    font-weight: 700;
    color: #fff;
    padding: 15px;
    width: 50%;
    cursor: pointer;
`
const CheckOutBtn = styled.button`
    border: none;
    background-color: #d10024;
    text-align: center;
    font-weight: 700;
    color: #fff;
    padding: 15px;
    width: 50%;
    cursor: pointer;
`
const RemoveProdut = styled.button`
    position: absolute;
    background-color: #15161D;
    color: #fff;
    padding: 2px 4px;
    font-size: 10px;
    cursor: pointer;
    border: none;
`


const Navbar = () => {
    const [hamIsOpen,openHanburger] = useState(false)
    const [cartIsOpen, openCart] = useState(false)

  return (
    <Container>
        <HamburgerOpen isopen={hamIsOpen}>
            <HamburgerClose onClick={()=> openHanburger(!hamIsOpen)}>
                <FontAwesomeIcon icon={faXmark}/>
            </HamburgerClose>
            <HamburgerOpenOptions>
                Home
            </HamburgerOpenOptions>
            <HamburgerOpenOptions>
            Hot Deals
            </HamburgerOpenOptions>
            <HamburgerOpenOptions>
            Categories
            </HamburgerOpenOptions>
            <HamburgerOpenOptions>
            Smartphones
            </HamburgerOpenOptions>
            <HamburgerOpenOptions>
            Cameras
            </HamburgerOpenOptions>
            <HamburgerOpenOptions>
            Accessories
            </HamburgerOpenOptions>
            <HamburgerOpenOptions>
            Laptops
            </HamburgerOpenOptions>
        </HamburgerOpen>

        <Logo>
            <LogoText><Link style={{textDecoration: "none", color: "#fff"}} to='/'>Electro</Link><LogoDot>.</LogoDot></LogoText>
        </Logo>
        <SearchBar>
            <SearchCategories defaultValue=''>
                <CategoryOptions value='' disabled>All Categories</CategoryOptions>
                <CategoryOptions>category1</CategoryOptions>
                <CategoryOptions>category2</CategoryOptions>
                <CategoryOptions>category3</CategoryOptions>
            </SearchCategories>
            <SearchInput placeholder='Search Here' />
            <SearchSubmit>Search</SearchSubmit>
        </SearchBar>
        <Personal>
            <Link to='/cart/wishlist' style={{textDecoration: "none", color: "#fff"}}>
            <WishList>
                <FontAwesomeIcon icon={faHeart} />
                <WishListCounter>0</WishListCounter>
                <WishListText>Your Wishlist</WishListText>
            </WishList>
                </Link>
            <Cart>
                <FontAwesomeIcon onClick={() => openCart(!cartIsOpen)} icon={faShoppingCart} />
                <CartCounter>0</CartCounter>
                <CartText onClick={() => openCart(!cartIsOpen)}>Your Cart</CartText>
                <CartDropDown open={cartIsOpen}>
                    <CartList>
                        {
                            [1,2,3,4,5,6].map((item,i)=>(
                                <CartProduct key={i}>
                            <CartProductImage src='https://preview.colorlib.com/theme/electro/img/xshop03.png.pagespeed.ic.7lsQL1UJA9.webp'/>
                            <CartProductDetails>
                                <CartProductName>
                                    Product name goes here
                                </CartProductName>
                                <CartProductPrice>
                                    <CartProductCount>3x</CartProductCount>$980.00
                                </CartProductPrice>
                            </CartProductDetails>
                            <RemoveProdut>
                                <FontAwesomeIcon icon={faXmark} />
                            </RemoveProdut>
                        </CartProduct>
                            ))
                        }
                    </CartList>
                    <CartDetails>
                        <ItemCount>3 Item(s) selected</ItemCount>
                        <SubtotalCount>SUBTOTAL: $2940.00</SubtotalCount>
                    </CartDetails>
                    <CartDropBtns>
                        <Link style={{textDecoration: "none", color: "#fff"}} to="/cart">
                            <ViewCartBtn>
                                View Cart
                            </ViewCartBtn>
                        </Link>
                        <CheckOutBtn>Checkout</CheckOutBtn>
                    </CartDropBtns>
                </CartDropDown>
            </Cart>
            <Hamburger onClick={() => openHanburger(!hamIsOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                    <HamburgerText>Menu</HamburgerText>
            </Hamburger>
        </Personal>
    </Container>
  )
}

export default Navbar