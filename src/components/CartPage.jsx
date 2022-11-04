import React from 'react'
import styled from 'styled-components'
import { tablet, mobile,Laptop } from '../Responsive'

const Container = styled.div`
    padding: 50px 100px;
    display: flex;

    ${
        mobile({
            padding: "50px 10px",
            flexDirection: "column"
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
const Left = styled.div`
    flex: 2;
    margin-right: 10px;

    ${
        mobile({
            marginRight: "0px",
        })
    }
    
`
const Product = styled.div`
    display: flex;
    padding-bottom: 20px;
    margin: 20px 0px;
    border-bottom: 1px solid #b5b5b5;
`
const ProductImage = styled.img`
    object-fit: contain;
    width: 30%;
    height: 200px;
`
const ProductDetails = styled.div`
    margin-left: 20px;
`
const ItemCount = styled.div`
    display: flex;
    font-size: 24px;
    align-items: center;
`
const Addmore = styled.span`
    margin: 10px;
    cursor: pointer;
`
const Count = styled.p``
const RemoveSome = styled.span`
    margin: 10px;
    cursor: pointer;
`
const ProductPrice = styled.p`
    font-size: 30px;
`
const ProductItemDetails = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ProductName = styled.p`
    font-weight: 600;
    margin-bottom: 10px;
`
const ProductId = styled.p`
    font-weight: 600;
    margin-bottom: 10px;
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: cyan;
    margin-bottom: 10px;
`
const ProductSize = styled.p`
    font-weight: 600;
    margin-bottom: 10px;
`
const ProdInfo = styled.span`
    font-weight: 400;
    font-size: 14px;
`

const Right = styled.div`
    flex: 1;
    margin-left: 10px;
    ${
        mobile({
            marginLeft: "0px",
        })
    }
`
const CartSummary = styled.div`
    padding: 10px;
    border: 1px solid #b5b5b5;
    border-radius: 10px;
`
const SummaryHeader = styled.p`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
`
const SummaryDetails = styled.div`
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`
const SummaryTotal = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
`
const CheckoutButton = styled.button`
    background-color: #d10024;
    padding: 10px 0px;
    border: none;
    width: 100%;
    color: #fff;
    font-weight: 600;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover{
        transition: all 0.3s;
        color: #d10024;
        border: 2px solid #d10024;
        background-color: #fff;
    }
`
const Detail = styled.p``
const Value = styled.p``
const TotalDetail = styled.p``
const TotalValue = styled.p``

const CartPage = () => {
  return (
    <Container>
        <Left>
            <Product>
                <ProductImage src='https://images.pexels.com/photos/13578883/pexels-photo-13578883.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'/>
                <ProductDetails>
                    <ProductName>Product Name: <ProdInfo>New Balance</ProdInfo></ProductName>
                    <ProductId>ID: <ProdInfo>230</ProdInfo></ProductId>
                    <ProductColor></ProductColor>
                    <ProductSize>Size: <ProdInfo>M</ProdInfo></ProductSize>
                </ProductDetails>
                <ProductItemDetails>
                    <ItemCount>
                        <Addmore>+</Addmore>
                        <Count>5</Count>
                        <RemoveSome>-</RemoveSome>
                    </ItemCount>
                    <ProductPrice>$30</ProductPrice>
                </ProductItemDetails>
            </Product>

            <Product>
                <ProductImage src='https://m-cdn.phonearena.com/images/article/131421-wide-two_1200/Apple-to-adopt-a-massive-48MP-camera-sensor-for-the-iPhone-14-series-kill-the-iPhone-mini.jpg?1625562180'/>
                <ProductDetails>
                    <ProductName>Product Name: <ProdInfo>New Balance</ProdInfo></ProductName>
                    <ProductId>ID: <ProdInfo>230</ProdInfo></ProductId>
                    <ProductColor></ProductColor>
                    <ProductSize>Size: <ProdInfo>M</ProdInfo></ProductSize>
                </ProductDetails>
                <ProductItemDetails>
                    <ItemCount>
                        <Addmore>+</Addmore>
                        <Count>5</Count>
                        <RemoveSome>-</RemoveSome>
                    </ItemCount>
                    <ProductPrice>$30</ProductPrice>
                </ProductItemDetails>
            </Product>

            <Product>
                <ProductImage src='https://m-cdn.phonearena.com/images/article/131421-wide-two_1200/Apple-to-adopt-a-massive-48MP-camera-sensor-for-the-iPhone-14-series-kill-the-iPhone-mini.jpg?1625562180'/>
                <ProductDetails>
                    <ProductName>Product Name: <ProdInfo>New Balance</ProdInfo></ProductName>
                    <ProductId>ID: <ProdInfo>230</ProdInfo></ProductId>
                    <ProductColor></ProductColor>
                    <ProductSize>Size: <ProdInfo>M</ProdInfo></ProductSize>
                </ProductDetails>
                <ProductItemDetails>
                    <ItemCount>
                        <Addmore>+</Addmore>
                        <Count>5</Count>
                        <RemoveSome>-</RemoveSome>
                    </ItemCount>
                    <ProductPrice>$30</ProductPrice>
                </ProductItemDetails>
            </Product>

            <Product>
                <ProductImage src='https://m-cdn.phonearena.com/images/article/131421-wide-two_1200/Apple-to-adopt-a-massive-48MP-camera-sensor-for-the-iPhone-14-series-kill-the-iPhone-mini.jpg?1625562180'/>
                <ProductDetails>
                    <ProductName>Product Name: <ProdInfo>New Balance</ProdInfo></ProductName>
                    <ProductId>ID: <ProdInfo>230</ProdInfo></ProductId>
                    <ProductColor></ProductColor>
                    <ProductSize>Size: <ProdInfo>M</ProdInfo></ProductSize>
                </ProductDetails>
                <ProductItemDetails>
                    <ItemCount>
                        <Addmore>+</Addmore>
                        <Count>5</Count>
                        <RemoveSome>-</RemoveSome>
                    </ItemCount>
                    <ProductPrice>$30</ProductPrice>
                </ProductItemDetails>
            </Product>
        </Left>
        <Right>
        <CartSummary>
            <SummaryHeader>ORDER SUMMARY</SummaryHeader>
            <SummaryDetails>
                <Detail>SubTotal</Detail>
                <Value>$8000000</Value>
            </SummaryDetails>
            <SummaryDetails>
                <Detail>Estimated Shipping</Detail>
                <Value>$5.80</Value>
            </SummaryDetails>
            <SummaryDetails>
                <Detail>Shipping Discount</Detail>
                <Value>-$5.80</Value>
            </SummaryDetails>
            <SummaryTotal>
                <TotalDetail>
                    Total
                </TotalDetail>
                <TotalValue>$80</TotalValue>
            </SummaryTotal>
            <CheckoutButton>CHECKOUT NOW</CheckoutButton>
        </CartSummary>
        </Right>
    </Container>
  )
}

export default CartPage