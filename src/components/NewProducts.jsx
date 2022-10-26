import React from 'react'
import styled from 'styled-components'
import { Header, HeaderLinks } from './Navheaders'
import NewProductsitem from './NewProductsitem'
import Slider from './Slider'
import { SwiperSlide } from 'swiper/react';


const Container = styled.div`
    padding: 30px 100px;
`
const NewProductsHeader = styled.div`
    display: flex;
    margin-bottom: 40px;
`
const Left = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
    justify-content: flex-end;
    display: flex;
`
const LeftHeader = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #2B2D42;
`

const NewProducts = () => {
  return (
    <Container>
        <NewProductsHeader>
            <Left>
                <LeftHeader>NEW PRODUCTS</LeftHeader>
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

export default NewProducts