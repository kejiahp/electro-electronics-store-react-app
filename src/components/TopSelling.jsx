import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import NewProductsitem from './NewProductsitem'
import { SwiperSlide } from 'swiper/react'
import { announcementRedBg } from '../utils/colors'
import { Laptop, mobile, tablet } from '../Responsive'

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
        color: #8d99ae;
        font-weight: 700;
`

const Container = styled.div`
    padding: 30px 100px;

    
    ${
        mobile({
            padding: "10px",
        })
    }

    ${
        tablet({
            padding: "20px",
        })
    }
    ${
        Laptop({
            padding: "20px"
        })
    }
`
const NewProductsHeader = styled.div`
    display: flex;
    margin-bottom: 40px;

    ${
        mobile({
            flexDirection: "column"
        })
    }
    ${
        tablet({
            flexDirection: "column"
        })
    }
`
const Left = styled.div`
    flex: 1;
    ${
        tablet({
            marginBottom: "20px"
        })
    }
`
const Right = styled.div`
    flex: 1;
    justify-content: flex-end;
    display: flex;

    ${
        mobile({
            flexDirection: "column",
            alignItems: "flex-start",
        })
    }
    ${
        tablet({
            justifyContent: "flex-start",
        })
    }
`
const LeftHeader = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #2B2D42;

    ${
        mobile({
            marginTop: "50px",
            marginBottom: "20px",
        })
    }
`

const TopSelling = () => {
  return (
    <Container>
        <NewProductsHeader>
            <Left>
                <LeftHeader>TOP PRODUCTS</LeftHeader>
            </Left>
            <Right>
                <Header><HeaderLinks>Laptops</HeaderLinks></Header>
                <Header><HeaderLinks>Smartphones</HeaderLinks></Header>
                <Header><HeaderLinks>Cameras</HeaderLinks></Header>
                <Header><HeaderLinks>Accessories</HeaderLinks></Header>
            </Right>
        </NewProductsHeader>
        <Slider>
            <SwiperSlide> 
                    <NewProductsitem/>
                </SwiperSlide>
                <SwiperSlide> 
                    <NewProductsitem/>
                </SwiperSlide>
                <SwiperSlide> 
                    <NewProductsitem/>
                </SwiperSlide>
                <SwiperSlide> 
                    <NewProductsitem/>
                </SwiperSlide>
                <SwiperSlide> 
                    <NewProductsitem/>
                </SwiperSlide>
                <SwiperSlide> 
                    <NewProductsitem/>
                </SwiperSlide>
        </Slider>
    </Container>
  )
}

export default TopSelling