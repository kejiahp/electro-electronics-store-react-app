import { faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #fff;
    cursor: pointer;
    transition: 0.2s all;
    position: relative;
    padding: 10px;
    border: 2px solid #E4E7ED;
    position: relative;

    &:hover{
      border: 2px solid #d10024;
    }
`
const ProductImage = styled.div``
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`
const ProductBody = styled.div`
text-align: center;
`
const ProductCategory = styled.p`
  color: #8D99AE;
  text-transform: uppercase;
  font-size: 10px;
`
const ProductName = styled.h3`
  font-size:14px;
  padding: 10px 0;
`
const ProductPrice = styled.div`
`
const ProductInitialPrice = styled.span`
  font-size: 18px;
  font-weight: 800px;
  color: #d10024;
  margin-right: 5px;
`
const ProductPreviousPrice = styled.del`
  color: #8D99AE;
  font-size: 14px;

`
const ProductRating = styled.div`
  color: #d10024;
  font-size: 14px;
  position: relative;
  text-align: center;
  padding: 10px 0px;

  &::after{
    content: "";
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    height: 1px;
    background-color: #E4E7ED;
  }
`
const ProductBtns = styled.div`
  text-align: center;
  padding: 10px 0;
`
const ProductBtnsButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: transparent;

  &:hover{
    background-color: #ddd;
    color: #d10024;
  }
`
const ProductTag = styled.div`
  display: flex;
  top: 10px;
  right: 10px;
  position: absolute;
`
const ProductTagLabel = styled.p`
  margin-right: 5px;
  padding: 2px 10px;
  font-size: 12px;
  background-color: ${props=> props.type==="new" ? "#d10024": "#fff"};
  color: ${ props=> props.type=== "new" ? "#fff" : "#d10024" };
  border: 2px solid ${ props=> props.type=== "new" ? "transparent" : "#d10024"};
`
const AddToCartSlider = styled.div``
const AddToCartText = styled.p``

const NewProductsitem = () => {
  return (
    <Container>
      <ProductImage>
        <Image src='https://preview.colorlib.com/theme/electro/img/xproduct02.png.pagespeed.ic.zbvcFh0rRy.webp' alt=''/>
      </ProductImage>

      <ProductBody>
        <ProductCategory>Category Name</ProductCategory>
        <ProductName>PRODUCT NAME GOES HERE</ProductName>
        <ProductPrice>
          <ProductInitialPrice>$999.99</ProductInitialPrice>
          <ProductPreviousPrice>$1999.99</ProductPreviousPrice>
        </ProductPrice>
      </ProductBody>

      <ProductRating>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
      </ProductRating>

      <ProductBtns>
        <ProductBtnsButton>
          <FontAwesomeIcon icon={faHeart}/>
        </ProductBtnsButton>
        <ProductBtnsButton>
          <FontAwesomeIcon icon={faEye} />
        </ProductBtnsButton>
      </ProductBtns>

      <AddToCartSlider>
        <AddToCartText>ADD TO CART</AddToCartText>
      </AddToCartSlider>

      <ProductTag>
        <ProductTagLabel type={"sale"}>
          -30%
        </ProductTagLabel>
        <ProductTagLabel type={"new"}>
          NEW
        </ProductTagLabel>
      </ProductTag>
    </Container>
  )
}

export default NewProductsitem