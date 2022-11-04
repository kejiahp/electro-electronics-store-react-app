import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background:linear-gradient(
        rgba(0,0,0,0.8),rgba(0,0,0,0.7)
    ), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
const Wrapper = styled.div`
    border: 2px solid #b5b5b5;
    width: 50%;
    padding: 10px;
    background: transparent;
    border-radius: 10px;

    ${
        mobile({
            width: "100%",
            border: "none",
        })
    }
`
const Header = styled.p`
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: #d10024;
    margin-bottom: 20px;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    padding: 10px;
    margin: 10px 0px 10px 10px;
    border: 1px solid #b5b5b5;

    ${
        mobile({
            margin: "10px 0px 10px 5px",
        })
    }
`
const Agreement = styled.p`
    margin-top: 20px;
    color: #d10024;
`
const Button = styled.button`
    cursor: pointer;
    background-color: #d10024;
    padding: 10px;
    color: #fff;
    font-weight: 600;
    border: none;
    margin-top: 20px;
    margin-bottom: 10px;
`
const Link = styled.a`
    font-size: 12px;
    text-decoration: underline;
    color: skyblue;
    font-weight: 500;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Header>CREATE AN ACCOUNT</Header>
            <Form>
                <Input placeholder='firstname'/>
                <Input placeholder='lastname'/>
                <Input placeholder='username'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
                <Agreement>
                    By creating an account, I agree to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
            <Link>ALREADY HAVE AN ACCOUNT. CLICK ME</Link>
        </Wrapper>
    </Container>
  )
}

export default Register