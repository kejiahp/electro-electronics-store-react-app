import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Laptop, mobile, tablet } from '../Responsive'

const ShopNowImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s all;
`
const Container = styled.div`
    /* width: 360px; */
    background-color: #E4E7ED;
    height: 240px;
    position: relative;
    overflow: hidden;
    margin: 10px;

    &::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -160px;
    width: 100%;
    background: #D10024;
    opacity: 0.9;
    transform: skewX(-45deg);
    z-index: 2;
    }

    &:hover ${ShopNowImage}{
        transform: scale(1.1);
    }

    ${
        mobile({
            margin: "20px 0px",
        })
    }
    ${
        tablet({
            margin: "10px"
        })
    }

    ${
        Laptop({
            margin: "0px 10px",    
        })
    }
`
const ShopContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 3;
`
const ShopNowInfo = styled.p`
    color: white;
    font-size: 25px;
    font-weight: 600;

`
const ShoppingLink = styled.a`
    font-size: 14px;
    font-weight: 600;
    color: white;
    cursor: pointer;
`

const Shopnowitem = () => {
  return (
    <Container>
        <ShopContainer>
            <ShopNowInfo>Laptop <br/>Collection</ShopNowInfo>
            <ShoppingLink>
                Shop Now <FontAwesomeIcon color='white' icon={faArrowAltCircleRight} />
            </ShoppingLink>
        </ShopContainer>
        <ShopNowImage src='https://preview.colorlib.com/theme/electro/img/xshop03.png.pagespeed.ic.7lsQL1UJA9.webp' alt=''/>
    </Container>
  )
}

export default Shopnowitem