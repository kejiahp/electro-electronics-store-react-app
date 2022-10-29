import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { navBg } from '../utils/colors'
import {mobile, tablet, Laptop} from '../Responsive'

const Container = styled.div`
    ${navBg}
    display: flex;
    padding: 50px 100px;
    color:#B9BABC;

    ${
        mobile({
            padding: "50px 10px",
            flexDirection: "column"
        })
    }
    ${
        tablet({
            // flexWrap: "wrap",
            display: "grid",
            gridTemplateColumns: "50% 50%",
            padding: "20px",
        })
    }
    ${
        Laptop({
            padding: "40px 20px 20px 20px",
        })
    }
`
const AboutContainer = styled.div`
    flex: 1;
    margin-right: 20px;
    ${
        mobile({
            marginBottom: "30px",
        })
    }
`
const OthersHeader = styled.h1`
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 30px;
`
const AboutDesc = styled.p`
    font-size: 14px;
    margin-bottom: 20px;
`
const OthersContainer = styled.div`
    flex: 1;
    margin-right: 20px;
    ${
        mobile({
            marginBottom: "30px",
        })
    }
`
const AboutList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const AboutListItems = styled.li`
    margin-bottom: 20px;
`
const AboutDetail = styled.a`
    margin-left: 15px;

    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 500;
    transition: 0.2s all;
    cursor: pointer;

    ${
        Laptop({
            marginLeft: "5px",
        })
    }

    &:hover{
        color: #d10024;
    }
`
const OthersList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const OthersListItem = styled.li`
    margin-bottom: 20px;
`
const OthersDetail = styled.a`
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 500;
    transition: 0.2s all;
    cursor: pointer;

    &:hover{
        color: #d10024;
    }
`

const Footer = () => {
  return (
    <Container>
        <AboutContainer>
            <OthersHeader>About Us</OthersHeader>
            <AboutDesc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum neque adipisci debitis voluptatum alias.</AboutDesc>
            <AboutList>
                <AboutListItems>
                    <FontAwesomeIcon color={"#d10024"} icon={faLocationDot}/>
                    <AboutDetail>Ikorodu, Lagos</AboutDetail>
                </AboutListItems>
                <AboutListItems>
                    <FontAwesomeIcon color={"#d10024"} icon={faPhone}/>
                    <AboutDetail>08090822222</AboutDetail>
                </AboutListItems>
                <AboutListItems>
                    <FontAwesomeIcon color={"#d10024"} icon={faEnvelope}/>
                    <AboutDetail>johndoe@gmail.com</AboutDetail>
                </AboutListItems>
            </AboutList>
        </AboutContainer>

        <OthersContainer>
            <OthersHeader>Categories</OthersHeader>
            <OthersList>
                <OthersListItem>
                    <OthersDetail> Hot deals </OthersDetail>
                </OthersListItem>
                <OthersListItem>
                    <OthersDetail> Laptops </OthersDetail>
                </OthersListItem>
                <OthersListItem>
                    <OthersDetail> Cameras </OthersDetail>
                </OthersListItem>
                <OthersListItem>
                    <OthersDetail> Accessories </OthersDetail>
                </OthersListItem>
                <OthersListItem>
                    <OthersDetail> Smartphones </OthersDetail>
                </OthersListItem>
            </OthersList>
        </OthersContainer>

        <OthersContainer>
        <OthersHeader>Information</OthersHeader>
            <OthersList>
                    <OthersListItem>
                        <OthersDetail> Hot deals </OthersDetail>
                    </OthersListItem>
                    <OthersListItem>
                        <OthersDetail> About Us </OthersDetail>
                    </OthersListItem>
                    <OthersListItem>
                        <OthersDetail> Contact Us </OthersDetail>
                    </OthersListItem>
                    <OthersListItem>
                        <OthersDetail> Privacy Policy </OthersDetail>
                    </OthersListItem>
                    <OthersListItem>
                        <OthersDetail> Orders and Returns </OthersDetail>
                    </OthersListItem>
                    <OthersListItem>
                        <OthersDetail> Terms & Conditions </OthersDetail>
                    </OthersListItem>
                </OthersList>
        </OthersContainer>

        <OthersContainer>
        <OthersHeader>Service</OthersHeader>
        <OthersList>
                    <OthersListItem>
                        <OthersDetail>  My Account </OthersDetail>
                    </OthersListItem>
                    <OthersListItem>
                        <OthersDetail> View Cart </OthersDetail>
                    </OthersListItem>
                    <OthersListItem>
                        <OthersDetail> Wishlist </OthersDetail>
                    </OthersListItem>
                    <OthersListItem>
                        <OthersDetail> Track My Order </OthersDetail>
                    </OthersListItem>
                    <OthersListItem>
                        <OthersDetail> Help </OthersDetail>
                    </OthersListItem>
                </OthersList>
        </OthersContainer>

    </Container>
  )
}

export default Footer