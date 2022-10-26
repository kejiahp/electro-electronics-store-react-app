import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { announcementRed, announcementRedBg, navBg } from '../utils/colors'

const Container = styled.div`
    ${navBg}
    display: flex;
    padding: 20px 100px;
    align-items: center;
    justify-content: space-between;
    color: white;
    border-bottom:3px solid #d10024;
`
const Logo = styled.div`cursor: pointer;`
const LogoText = styled.span`
    font-size: 40px;
    font-weight: 700;
`
const LogoDot = styled.span`
    ${announcementRed}
`
const SearchBar = styled.div`
    border-radius: 50px;
    overflow: hidden;
`
const SearchCategories = styled.select`
    padding: 10px;
    width: 160px;
    cursor: pointer;
`
const CategoryOptions = styled.option``
const SearchInput = styled.input`
    padding: 10px;
    width: 250px;
`
const SearchSubmit = styled.button`
    ${announcementRedBg}
    color: white;
    outline: none;
    padding: 12px;
    width: 100px;
    border: none;
    font-weight: 800;
    cursor: pointer;
`
const Personal = styled.div`
    display: flex;
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

const Navbar = () => {
  return (
    <Container>
        <Logo>
            <LogoText>Electro<LogoDot>.</LogoDot></LogoText>
        </Logo>
        <SearchBar>
            <SearchCategories>
                <CategoryOptions selected disabled>All Categories</CategoryOptions>
                <CategoryOptions>category1</CategoryOptions>
                <CategoryOptions>category2</CategoryOptions>
                <CategoryOptions>category3</CategoryOptions>
            </SearchCategories>
            <SearchInput placeholder='Search Here' />
            <SearchSubmit>Search</SearchSubmit>
        </SearchBar>
        <Personal>
            <WishList>
                <FontAwesomeIcon icon={faHeart} />
                <WishListCounter>0</WishListCounter>
                <WishListText>Your Wishlist</WishListText>
            </WishList>
            <Cart>
                <FontAwesomeIcon icon={faShoppingCart} />
                <CartCounter>0</CartCounter>
                <CartText>Your Cart</CartText>
            </Cart>
        </Personal>
    </Container>
  )
}

export default Navbar