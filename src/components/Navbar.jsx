import { faBars, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
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
            <Hamburger>
                    <FontAwesomeIcon icon={faBars} />
                    <HamburgerText>Menu</HamburgerText>
            </Hamburger>
        </Personal>
    </Container>
  )
}

export default Navbar