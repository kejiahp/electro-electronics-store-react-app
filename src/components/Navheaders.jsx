import React from 'react'
import styled from 'styled-components'
import { Laptop, mobile, tablet } from '../Responsive'
import { announcementRedBg } from '../utils/colors'

const Container = styled.div`
    padding: 20px 100px;
    display: flex;
    border-bottom: 2px solid #ddd;

    ${
        mobile({
            display: "none"
        })
    }
    ${
        tablet({
            display: "none",
        })
    }
    ${
        Laptop({
            padding: "20px"
        })
    }
`
const Header = styled.div`
    margin-right: 20px;
    cursor: pointer;
    &::after{
        content: "";
        height: 2px;
        ${announcementRedBg}
        width: 0%;
        display: block;
        transition: 0.2s all;
    }

    &:hover::after{
        width: 100%;
    }
`
const HeaderLinks = styled.a`
        color: #2B2D42;
        font-size: 14px;
        font-weight: 500;

        &:hover {
        color: #d10024;
    }
`

const Navheaders = () => {
  return (
    <Container>
        <Header><HeaderLinks>Home</HeaderLinks></Header>
        <Header><HeaderLinks>Hot Deals</HeaderLinks></Header>
        <Header><HeaderLinks>Categories</HeaderLinks></Header>
        <Header><HeaderLinks>Smartphones</HeaderLinks></Header>
        <Header><HeaderLinks>Cameras</HeaderLinks></Header>
        <Header><HeaderLinks>Accessories</HeaderLinks></Header>
        <Header><HeaderLinks>Laptops</HeaderLinks></Header>
    </Container>
  )
}

export default Navheaders