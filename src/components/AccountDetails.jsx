import { faHeart, faMap } from '@fortawesome/free-regular-svg-icons'
import { faBox, faCartShopping, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {mobile, Laptop, tablet} from '../Responsive'

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
    flex: 1;
    margin-right: 20px;

    ${
        mobile({
            marginRight: "0px",
        })
    }
`
const SideBar = styled.div`
`
const SideBarHeader = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #d10024;
    background-color: #d5d5d5;
    padding: 10px;
`
const SideBarItems = styled.div`
    padding: 10px;
    cursor: pointer;
    color: ${props => props.type && "#d10024"};

    &:hover{
        transition: all 0.3s;
        color: ${props => props.type==="close" ? "#fff": ""};
        background-color: ${props => props.type==="close" ? "#d10024" : "#b5b5b5"};
    }
`
const ItemName = styled.span`
    margin-left: 20px;
    font-weight: 500;
    font-weight: ${props => props.type && 600};
`
const LogOut =styled.p`
    padding: 10px;
    color: #2B2D42;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        transition: all 0.3s;
        color: #fff;
        background-color: #d10024;
    }
`
const Right = styled.div`
    flex: 2;
    ${
        mobile({
            marginTop: "40px",
        })
    }
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 20px;

    ${
        mobile({
            gridTemplateColumns: "100%",
        })
    }
    ${
        tablet({
            gridTemplateColumns: "40% 50%",
        })
    }
`
const Header = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #d10024;
`
const AccInfo = styled.div`
    border: 1px solid #b5b5b5;
    border-radius: 10px;
    word-wrap: break-word;
`
const AccInfoHeader = styled.p`
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 10px;
    border-bottom: 1px solid #b5b5b5;
    padding: 10px;
`
const Fullname = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    padding: 10px;
`
const Email = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    padding: 10px;
`
const AddressInfo = styled.div`
    border: 1px solid #b5b5b5;
    border-radius: 10px;
    word-wrap: break-word;
`
const Address = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    padding: 10px;
`
const AddressLocation = styled.p`
    margin-top: 10px;
    font-size: 14px;
    color: #2B2D42;
`
const AddressInfoHeader = styled.p`
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 10px;
    border-bottom: 1px solid #b5b5b5;
`
const EditAddress = styled.div`
    margin-left: 10px;
    display: inline;
    cursor: pointer;

    &:hover{
        color: #d10024;
    }
`
const NewLetterInfo = styled.div`
    border: 1px solid #b5b5b5;
    border-radius: 10px;
    word-wrap: break-word;
`
const NewsLetterHeader = styled.p`
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 10px;
    border-bottom: 1px solid #b5b5b5;
    padding: 10px;
`
const SubScribed = styled.p`
    padding: 10px;
    font-weight: 600;
    font-size: 14px;
    color: #d10024;
    cursor: pointer;
`

const AccountDetails = () => {
  return (
    <Container>
        <Left>
            <SideBar>
                <SideBarHeader>
                    Welcome, Morenikeji
                </SideBarHeader>
                <SideBarItems>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <ItemName>My Cart</ItemName>
                </SideBarItems>
                <SideBarItems>
                    <FontAwesomeIcon icon={faHeart}/>
                    <ItemName>My WishList</ItemName>
                </SideBarItems>
                <SideBarItems>
                    <FontAwesomeIcon icon={faBox}/>
                    <ItemName>My Orders</ItemName>
                </SideBarItems>
                <SideBarItems>
                    <FontAwesomeIcon icon={faPen}/>
                    <ItemName>Change Password</ItemName>
                </SideBarItems>
                <SideBarItems>
                    <FontAwesomeIcon icon={faMap}/>
                    <ItemName>Address Info</ItemName>
                </SideBarItems>
                <SideBarItems type="close">
                    <FontAwesomeIcon icon={faXmark}/>
                    <ItemName type="close">Close Account</ItemName>
                </SideBarItems>
                <LogOut>
                    Logout
                </LogOut>
            </SideBar>
        </Left>

        <Right>
        <Header>Account Overview</Header>
            <Wrapper>
                <AccInfo>
                    <AccInfoHeader>
                        Account Details
                    </AccInfoHeader>
                    <Fullname>Fullname: Popoola Morenikeji</Fullname>
                    <Email>Email: popoolakejiah@gmail.com</Email>
                </AccInfo>
                <AddressInfo>
                    <AddressInfoHeader>
                        Address Details
                        <EditAddress>
                        <FontAwesomeIcon icon={faPen}/>
                        </EditAddress>
                    </AddressInfoHeader>
                    <Address>
                    Your default shipping address:
                    <AddressLocation>
                    Morenikeji Popoola
                    6, abdulbenson street, beside ecobank, off Lagos rd
                    Ikorodu-Benson, Lagos
                    +234 8167964667 / +234 8090872072
                    </AddressLocation>
                    </Address>
                </AddressInfo>
                <NewLetterInfo>
                    <NewsLetterHeader>NewLetter Subscriptions</NewsLetterHeader>
                    <SubScribed>SubScribed</SubScribed>
                    <SubScribed>Not SubScribed</SubScribed>
                </NewLetterInfo>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default AccountDetails