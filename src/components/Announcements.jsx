import { faBagShopping, faDollarSign, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { announcementBg, announcementRed } from "../utils/colors"

const Container = styled.div`
  ${announcementBg}
  display: flex;
  padding: 10px 100px;
  color: white;
  font-size: 13px;
`
const Right = styled.div`
  flex: 1;
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
const PhoneNumber = styled.div`margin-right:10px;`
const Number = styled.span`
  margin:5px;
  cursor: pointer;
  &:hover{
    ${announcementRed}
  }`

const Email = styled.div`margin-right:10px;`
const Mail = styled.a`
  margin:5px;
  text-decoration:none;
  color:white;
  cursor: pointer;
  &:hover{
    ${announcementRed}
  }`

const Location = styled.div`margin-right:10px;`
const Locate = styled.span`
  margin:5px;
  cursor: pointer;
  &:hover{
    ${announcementRed}
  }`

const Currency = styled.div`margin-right:10px;`
const Label = styled.span`
  margin:5px;
  cursor: pointer;
  &:hover{
    ${announcementRed}
  }`

const Bag = styled.div`margin-right:10px;`

const Announcements = () => {
  return (
    <Container>
      <Right>
        <PhoneNumber>
          <FontAwesomeIcon color='#d10024' icon={faPhone}/>
          <Number>08090822222</Number>
        </PhoneNumber>
        <Email>
          <FontAwesomeIcon color='#d10024' icon={faEnvelope} />
          <Mail href="mailto:#">johndoe@gmail.com</Mail>
        </Email>
        <Location>
          <FontAwesomeIcon color='#d10024' icon={faLocationDot} /> 
          <Locate>Ikorodu, Lagos</Locate>
        </Location>
      </Right>

      <Left>
        <Currency>
          <FontAwesomeIcon color='#d10024' icon={faDollarSign} />
          <Label>USD</Label>
        </Currency>
        <Bag>
          <FontAwesomeIcon color='#d10024' icon={faBagShopping}/>
          <Label>My Account</Label>
        </Bag>
      </Left>
    </Container>
  )
}

export default Announcements