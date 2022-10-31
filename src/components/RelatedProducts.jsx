import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../Responsive'

const Container = styled.div`
    padding: 20px 100px;
    ${
        mobile({
            padding: "10px 10px 40px 10px",
            flexDirection: "column",
        })
    }
    ${
        tablet({
            padding: "10px 50px",
            flexDirection: "column",
        })
    }
`
const Header = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: #1b1b1b;
    text-align: center;
    margin-bottom: 40px;
`
const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${
        mobile({
            flexDirection: "column",
        })
    }
`
const Product = styled.div`
    width: calc((100% - 80px) / 4);
    margin: 10px 10px;

    ${
        mobile({
            width: "100%",
            margin: "0px 0px 20px 0px"
        })
    }
    ${
        tablet({
            width: "calc((100% - 80px) / 3)"
        })
    }
`
const ProductImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 300px;
`
const ProductBody = styled.div``

const ProductName = styled.h1`
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    color: #1b1b1b;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover{
        transition: all 0.3s;
        color: #d10024;
    }
`
const ProductPrice = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #6c6a74;
`

const RelatedProducts = () => {
  return (
    <Container>
        <Header>Related Products</Header>

        <ProductsContainer>
            <Product>
                <ProductImage src='https://th.bing.com/th/id/R.44fcb9acadf51c75d691cd0b21f5a125?rik=h%2f5ax4E%2bjsu6hQ&pid=ImgRaw&r=0'/>
                <ProductBody>
                    <ProductName>Product Name</ProductName>
                    <ProductPrice>$500</ProductPrice>
                </ProductBody>
            </Product>
            <Product>
                <ProductImage src='https://th.bing.com/th/id/R.44fcb9acadf51c75d691cd0b21f5a125?rik=h%2f5ax4E%2bjsu6hQ&pid=ImgRaw&r=0'/>
                <ProductBody>
                    <ProductName>Product Name</ProductName>
                    <ProductPrice>$500</ProductPrice>
                </ProductBody>
            </Product>
            <Product>
                <ProductImage src='https://th.bing.com/th/id/R.44fcb9acadf51c75d691cd0b21f5a125?rik=h%2f5ax4E%2bjsu6hQ&pid=ImgRaw&r=0'/>
                <ProductBody>
                    <ProductName>Product Name</ProductName>
                    <ProductPrice>$500</ProductPrice>
                </ProductBody>
            </Product>
            <Product>
                <ProductImage src='https://th.bing.com/th/id/R.44fcb9acadf51c75d691cd0b21f5a125?rik=h%2f5ax4E%2bjsu6hQ&pid=ImgRaw&r=0'/>
                <ProductBody>
                    <ProductName>Product Name</ProductName>
                    <ProductPrice>$500</ProductPrice>
                </ProductBody>
            </Product>
        </ProductsContainer>
    </Container>
  )
}

export default RelatedProducts