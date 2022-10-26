import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #e4e7ed;
    height: 50vh;
    padding: 60px 0px;
    background-image: url("https://preview.colorlib.com/theme/electro/img/xhotdeal.png.pagespeed.ic.523j9s2i8G.webp");
    background-repeat: no-repeat;
    background-position: center;
`
const SubContainer = styled.div`
    padding: 0px 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #2B2D42;
`
const Header1 = styled.h1`
    margin-bottom: 20px;
    font-weight: 800;
`
const Header2 = styled.h1`
    font-weight: 300;
    margin-bottom: 20px;
`
const ShopLink = styled.a`
    padding: 15px 30px;
    background-color: #d10024;
    font-weight: 700;
    color: #fff;
    border-radius: 50px;
    margin-bottom: 20px;
    cursor: pointer;
`

const TopDeals = () => {
  return (
    <Container>
        <SubContainer>
            <Header1>HOT DEAL THIS WEEK</Header1>
            <Header2>NEW COLLECTION UP TO 50% OFF</Header2>
            <ShopLink>SHOP NOW</ShopLink>
        </SubContainer>
    </Container>
  )
}

export default TopDeals