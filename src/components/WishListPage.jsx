import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { tablet, mobile,Laptop } from '../Responsive'


const Container = styled.div`
    padding: 50px 100px;
    display: flex;
    flex-direction: column;

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

const Wish = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: 2px solid #b5b5b5;
    padding-bottom: 10px;
    margin-bottom: 10px;

    ${
        mobile({
            flexDirection: "column",
            margin: "20px 0px",
        })
    }
`
const WishImage = styled.img`
    width: 200px;
    object-fit: contain;
    height: 200px;
    ${
        mobile({
            alignSelf: "flex-start",
            width: "100%",
            height: "150px",
            objectFit: "cover",
        })
    }
`
const WishDetails = styled.div`
    margin-left: 20px;
    ${
        mobile({
            width: "100%",
            marginLeft: "0px",
            marginTop: "20px",
        })
    }
`
const WishName = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`
const WishId = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`
const Price = styled.div`
    font-size: 14px;
    display: flex;
    margin-bottom: 10px;
`
const CurrentPrice = styled.p`
    color: #44a038;
    font-weight: 600;
    margin-right: 10px;
`
const PerviousPrice = styled.del`
    color: #ff0000;
    font-weight: 600;
    margin-right: 10px;
`
const DateAdded = styled.div`
    font-size: 14px;
    background-color: #d10024;
    color: #fff;
    font-weight: 600;
    border-radius: 10px;
    padding: 2px 5px;

    ${
        mobile({
            width: "max-content",
        })
    }
`
const WishUtils = styled.div`
    margin-left: 60px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    ${
        mobile({
            marginLeft: "0px",
            marginTop: "20px",
            width: "100%",
        })
    }
`
const RemoveItem = styled.div`
    display: flex;
    color: #d10024;
    margin-right: 30px;
    font-weight: 500;
    cursor: pointer;
`
const BuyNowBtn = styled.button`
    padding: 10px 20px;
    background-color: #d10024;
    color: #fff;
    font-weight: 500;
    border: none;
    cursor: pointer;
`


const WishListPage = () => {
  return (
    <Container>
        <Wish>
            <WishImage src='https://images.pexels.com/photos/11586575/pexels-photo-11586575.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'/>
            <WishDetails>
                <WishName>Product Name</WishName>
                <WishId>Order: 24748484</WishId>
                <Price>
                    <CurrentPrice>$900</CurrentPrice>
                    <PerviousPrice>$1300</PerviousPrice>
                </Price>
                <DateAdded>Added On: 2022-10-4</DateAdded>
            </WishDetails>
            <WishUtils>
                <RemoveItem>
                    <FontAwesomeIcon icon={faTrash}/>
                    Remove
                </RemoveItem>
                <BuyNowBtn>BUY NOW</BuyNowBtn>
            </WishUtils>
        </Wish>
        <Wish>
            <WishImage src='https://images.pexels.com/photos/11586575/pexels-photo-11586575.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'/>
            <WishDetails>
                <WishName>Product Name</WishName>
                <WishId>Order: 24748484</WishId>
                <Price>
                    <CurrentPrice>$900</CurrentPrice>
                    <PerviousPrice>$1300</PerviousPrice>
                </Price>
                <DateAdded>Added On: 2022-10-4</DateAdded>
            </WishDetails>
            <WishUtils>
                <RemoveItem>
                    <FontAwesomeIcon icon={faTrash}/>
                    Remove
                </RemoveItem>
                <BuyNowBtn>BUY NOW</BuyNowBtn>
            </WishUtils>
        </Wish>
        <Wish>
            <WishImage src='https://images.pexels.com/photos/11586575/pexels-photo-11586575.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'/>
            <WishDetails>
                <WishName>Product Name</WishName>
                <WishId>Order: 24748484</WishId>
                <Price>
                    <CurrentPrice>$900</CurrentPrice>
                    <PerviousPrice>$1300</PerviousPrice>
                </Price>
                <DateAdded>Added On: 2022-10-4</DateAdded>
            </WishDetails>
            <WishUtils>
                <RemoveItem>
                    <FontAwesomeIcon icon={faTrash}/>
                    Remove
                </RemoveItem>
                <BuyNowBtn>BUY NOW</BuyNowBtn>
            </WishUtils>
        </Wish>
    </Container>
  )
}

export default WishListPage