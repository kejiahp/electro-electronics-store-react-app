import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from "../Responsive"
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

const Container = styled.div`
    padding: 50px 100px;
    display: flex;

    ${
        mobile({
            padding: "50px 10px 20px 10px",
            flexDirection: "column",
        })
    }
    ${
        tablet({
            padding: "50px 50px",
            flexDirection: "column",
        })
    }
`


const Left = styled.div`
    flex: 1;
    margin-right: 10px;

    ${
        mobile({
            marginRight: "0px"
        })
    }
    ${
        tablet({
            marginRight: "0px"
        })
    }
`
const PreviewImage = styled.img`
    object-fit: contain;
    width: 100%;
    height: auto;
`
const OtherPreviewImage = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const MoreImage = styled.img`
    object-fit: cover;
    width: calc((100% - 59px) / 4);
    height: 100px;
    margin: 10px 10px 0px 0px;
    border: 2px solid transparent;

    &:hover{
        border: 2px solid #d10024;
        transition: all 0.3s;
    }
`

const Right = styled.div`
    flex: 1;
    margin-left: 10px;

    ${
        mobile({
            marginLeft: "0px"
        })
    }
    ${
        tablet({
            marginLeft: "0px"
        })
    }
`
const ProductName = styled.h1`
    font-weight: 500;
    font-size: 30px;
    color: #1b1b1b;
    
    ${
        mobile({
            marginTop: "50px"
        })
    }
`
const ProductPrice = styled.div`
    margin: 20px 0px;
`
const PreviousPrice = styled.del`
    color: #ff0000;
    font-size: 14px;
    font-weight: 600;
    margin-right: 20px;
`
const CurrentPrice = styled.span`
    color: #6c6a74;
    font-size: 14px;
    font-weight: 600;
`
const ProductAvailability = styled.div`
    color: #6c6a74;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 40px;
`
const InStock = styled.span`
    color: #44a038;
`
const OutofStock = styled.span`
    color: #ff0000;
`
const ProductDescriptionOne = styled.div``
const ProductDescriptionOneText = styled.p`
     color: #6c6a74;
     font-size: 14px;
     font-weight: 500;
     line-height: 30px;
`
const PurchaseBtns = styled.div`
    display: flex;
    margin-top: 40px;
`
const QuantityBtn = styled.div`
    border: 2px solid #b5b5b5;
    color: #b5b5b5;
    margin-right: 20px;
    display: flex;
    width: 150px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
`
const QuantityText = styled.div`
    font-size: 18px;
    font-weight: 600;
`
const QuantityInput = styled.input`
    width: 50px;
    border: none;
    outline: none;
    text-align: center;
`
const QuantityCounter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const QuantityArrowUp = styled.div`
    cursor: pointer;
    font-size: 20px;
    width: 100%;
    margin-bottom: 10px;
`
const QuantityArrowDown = styled.div`
    cursor: pointer;
    font-size: 20px;
    width: 100%;
`
const AddToCart = styled.button`
    border: 2px solid #d10024;
    color: #d10024;
    background-color: #fff;
    padding: 20px 40px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;

    &:hover{
        color: #fff;
        background-color: #d10024;
    }
`
const Share = styled.div`
    border-top: 1px solid #b5b5b5;
    font-weight: 700;
    color: #b5b5b5;
    padding: 40px 0px;
    margin-top: 50px;
    display: flex;
    align-items: center;
`
const ShareIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`
const ShareIcon = styled.div`
    padding: 10px;
    cursor: pointer;
    &:hover{
        transition: all 0.3s;
        color: #d10024;
    }
`


const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1)
    const handleQuantity = (type) => {
        if(type === "desc"){
            quantity > 1 && setQuantity(quantity - 1)
        }else{
            //qunatity will always be plus one
            quantity < 10 && setQuantity(quantity + 1)
        }
    }
    
  return (
    <Container>
        <Left>
            <PreviewImage src="https://th.bing.com/th/id/R.44fcb9acadf51c75d691cd0b21f5a125?rik=h%2f5ax4E%2bjsu6hQ&pid=ImgRaw&r=0" />
            <OtherPreviewImage>
                {
                    [1,2,3,4,5].map(item=>(

                        <MoreImage src="https://m-cdn.phonearena.com/images/article/131421-wide-two_1200/Apple-to-adopt-a-massive-48MP-camera-sensor-for-the-iPhone-14-series-kill-the-iPhone-mini.jpg?1625562180"/>
                    ))
                }
            </OtherPreviewImage>
        </Left>

        <Right>
            <ProductName>Smart Phone</ProductName>
            <ProductPrice>
                <PreviousPrice>$999</PreviousPrice>
                <CurrentPrice>$600</CurrentPrice>
            </ProductPrice>
            <ProductAvailability>
                Availability: <InStock>In Stock</InStock> <OutofStock>Out of Stock</OutofStock>
            </ProductAvailability>
            <ProductDescriptionOne>
                <ProductDescriptionOneText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora atque tenetur sit, quisquam, praesentium laborum accusantium reprehenderit quas quia nesciunt distinctio, laboriosam obcaecati eos dolore esse aliquam exercitationem animi fuga?
                </ProductDescriptionOneText>
            </ProductDescriptionOne>
            <PurchaseBtns>
                <QuantityBtn>
                    <QuantityText>
                        Qty
                    </QuantityText>
                    <QuantityInput type={"text"}  pattern={'[0-9]*'} value={quantity} onChange={(e) =>setQuantity(e.target.value)}/>
                    <QuantityCounter>
                        <QuantityArrowUp onClick={() => handleQuantity("asc")}>
                            <FontAwesomeIcon icon={faChevronUp}/>
                        </QuantityArrowUp>
                        <QuantityArrowDown onClick={() => handleQuantity("desc")}>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </QuantityArrowDown>
                    </QuantityCounter>
                </QuantityBtn>
                <AddToCart>Add to cart</AddToCart>
            </PurchaseBtns>
            <Share>
                Share:
                <ShareIcons>
                    <ShareIcon>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </ShareIcon>
                    <ShareIcon>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </ShareIcon>
                    <ShareIcon>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </ShareIcon>
                </ShareIcons>
            </Share>
        </Right>
    </Container>
  )
}

export default SingleProduct