// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import {mobile,tablet} from '../Responsive'

const Container = styled.div`
    padding: 30px 100px;
    border-top:1px solid #E4E7Ed;
    border-bottom: 3px solid #d10024;
    display: flex;
    align-items: center;
    flex-direction: column;

    ${
        mobile({
            padding: "10px",
            justifyContent: "center",
        })
    }
`
const Header = styled.h1`
    font-weight: 300;
    font-size: 24px;
    color: #2B2D42;
    margin-bottom: 30px;
    text-align: center;
    
`
const HeaderSpan = styled.span`
    font-weight: 800;
`
const NewLetterFormContainer = styled.div`
    position: relative;
    display: flex;
    border-radius: 50px;
    margin-bottom: 30px;
    /* overflow: hidden; */
`
const NewLetterForm = styled.input`
    width: 380px;
    padding: 10px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border: 1px solid #E4E7Ed;

    ${
        mobile({
            width: "calc(100% - 200px)",
        })
    }
    ${
        tablet({
            width: "calc(100% - 200px)",
        })
    }
`
const NewLetterFormSubmit = styled.button`
    display: flex;
    white-space: pre;
    justify-content: space-between;
    align-items: center;
    background-color: #d10024;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 17px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
`
const NewsLetterLinks = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
`
const LinkHolder = styled.a`
    border: 1px solid #E4E7Ed;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all;
    cursor: pointer;

    &:hover{
        color: #d10024;
        background-color: #E4E7Ed;
    }
`
const MailIcon = styled.div`
    position: absolute;
    font-size: 150px;
    color: #E4E7Ed;
    top: -80px;
    left: -80px;
    transform: rotate(15deg);
    z-index: -1;
`

const NewsLetter = () => {
  return (
    <Container>
            <Header>Sign Up for the <HeaderSpan> NEWSLETTER </HeaderSpan> </Header>
            <NewLetterFormContainer>
                <NewLetterForm placeholder='Enter Your Email' typeof='number'></NewLetterForm>
                <NewLetterFormSubmit>
                    <FontAwesomeIcon icon={faEnvelope}/> Subscribe
                </NewLetterFormSubmit>
                <MailIcon>
                    <FontAwesomeIcon icon={faEnvelope} />
                </MailIcon>
            </NewLetterFormContainer>
            <NewsLetterLinks>
                <LinkHolder> <FontAwesomeIcon icon={faFacebook} /> </LinkHolder>
                <LinkHolder> <FontAwesomeIcon icon={faTwitter}/> </LinkHolder>
                <LinkHolder> <FontAwesomeIcon icon={faInstagram} /> </LinkHolder>
            </NewsLetterLinks>
    </Container>
  )
}

export default NewsLetter