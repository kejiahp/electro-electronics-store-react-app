import { faCreditCard, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { announcementBg } from '../utils/colors'
import { faCcVisa, faCcPaypal, faCcMastercard, faCcDiscover, faCcAmex } from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
    ${announcementBg}
    padding: 20px 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const CardsContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`
const Card = styled.a`
    margin: 5px;
    font-size: 40px;
    color: #15161D;
`
const CopyRight = styled.div``
const Statement = styled.p`
    font-size: 12px;
    color: white;
`
const CreatorLink = styled.a`
    font-weight: 600;
    font-size: 14px;
    color: #d10024;
`

const FooterCopyright = () => {
  return (
    <Container>
        <CardsContainer>
            <Card href='#'>
                <FontAwesomeIcon icon={faCcAmex}/>
            </Card>
            <Card href='#'>
                <FontAwesomeIcon icon={faCcDiscover}/>
            </Card>
            <Card href='#'>
                <FontAwesomeIcon icon={faCcPaypal}/>
            </Card>
            <Card href='#'>
                <FontAwesomeIcon icon={faCcVisa}/>
            </Card>
            <Card href='#'>
                <FontAwesomeIcon icon={faCcMastercard}/>
            </Card>
            <Card href='#'>
                <FontAwesomeIcon icon={faCreditCard}/>
            </Card>
        </CardsContainer>
        <CopyRight>
            <Statement>Copyright ©2022 All rights reserved | This website is made with <FontAwesomeIcon icon={faHeart} />  by <CreatorLink href='#' target={"_blank"}>kejiah</CreatorLink> </Statement>
        </CopyRight>
    </Container>
  )
}

export default FooterCopyright