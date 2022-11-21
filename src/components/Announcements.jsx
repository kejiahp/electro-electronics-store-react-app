import { faBagShopping, faDollarSign, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { announcementBg, announcementRed } from "../utils/colors"
import { mobile, tablet, Laptop} from '../Responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
  ${announcementBg}
  display: flex;
  padding: 10px 100px;
  align-items: center;
  color: white;
  font-size: 13px;

  ${mobile(
    {
      flexDirection: "column",
      padding: "10px",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
    }
  )
  }

  ${
    tablet({
      padding: "20px",
      flexDirection: "column",
      alignItems: "flex-start",
    })
  }

${
    Laptop({
      padding: "20px"
    })
  }
`
const Right = styled.div`
  flex: 2;
  display: flex;

  ${
    mobile({
      flexDirection: "column"
    })
  }
  ${
    tablet({
      marginBottom: "20px",
    })
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  ${
    mobile({
      flexDirection: "column"
    })
  }
`
const PhoneNumber = styled.div`
  margin-right:10px;
  ${mobile({
    margin: "10px"
  })}
`
const Number = styled.span`
  margin:5px;
  cursor: pointer;
  &:hover{
    ${announcementRed}
  }`

const Email = styled.div`
  margin-right:10px;
  ${mobile({
    margin: "10px"
  })}
  `
const Mail = styled.a`
  margin:5px;
  text-decoration:none;
  color:white;
  cursor: pointer;
  &:hover{
    ${announcementRed}
  }`

const Location = styled.div`
  margin-right:10px;
  ${mobile({
    margin: "10px"
  })}
  `
const Locate = styled.span`
  margin:5px;
  cursor: pointer;
  &:hover{
    ${announcementRed}
  }`

const Currency = styled.div`
  margin-right:10px;
  ${mobile({
    margin: "10px"
  })}
  `
const Label = styled.span`
  margin:5px;
  cursor: pointer;
  &:hover{
    ${announcementRed}
  }`

const Bag = styled.div`
margin-right:10px;
${mobile({
    margin: "10px"
  })}
`

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
          <Link style={{textDecoration: "none",color:"white"}} to="/my-account"><Label>My Account</Label></Link>
        </Bag>
      </Left>
    </Container>
  )
}

export default Announcements