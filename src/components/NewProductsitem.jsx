import { faEye, faHeart, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { navBg } from '../utils/colors'

const AddToCartSlider = styled.div`
  ${navBg}
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  transform: translateY(0%);
  position: absolute;
  bottom: 2px;
  left: 2px;
  right: 2px;
  transition: 0.3s all;
  z-index: 10;
`

const Container = styled.div`
    position: relative;
    cursor: pointer;
    transition: 0.3s all;
    border: 2px solid #E4E7ED;
    background-color: white;
`
const SliderHolder = styled.div`
    height: 500px;


    &:hover ${Container}{
      border: 2px solid #d10024;
    }
    &:hover ${AddToCartSlider}{
      transform: translateY(100%);
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
background-color: #fff;
position: relative;
z-index: 20;
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
  font-weight: 800;
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
const AddToCartIcon = styled.span`
  font-size: 12px;
  color: #fff;
  margin-right: 0px;
  opacity: 0;
  transition: 0.3s all;
`
const AddToCartText = styled.p`
  padding: 10px 20px 10px 17px;
  background-color: #d10024;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  text-align: center;
  border-radius: 50px;
  transition: 0.3s all;

  &:hover{
    background-color: white;
    color: #d10024;
    border: 2px solid #d10024;
  }
  &:hover ${AddToCartIcon}{
    opacity: 1;
    margin-right: 20px;
    color: #d10024;
  }
`

const NewProductsitem = () => {
  return (
    <SliderHolder>

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

      </ProductBody>

      <AddToCartSlider>
        <AddToCartText>
          <AddToCartIcon>
            <FontAwesomeIcon icon={faShoppingCart}/>
          </AddToCartIcon>
          ADD TO CART
        </AddToCartText>
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
    
    </SliderHolder>
  )
}

export default NewProductsitem