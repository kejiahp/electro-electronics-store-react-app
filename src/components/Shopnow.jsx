import React from 'react'
import styled from 'styled-components'
import Shopnowitem from './Shopnowitem'
import {Desktop, Laptop, mobile, tablet} from '../Responsive'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 40px 100px;
    justify-content: space-evenly;

    ${
      mobile({
        display: "grid",
        gridTemplateColumns: "auto",
        padding: "10px",
      })
    }
    ${
      tablet({
        display: "grid",
        gridTemplateColumns: "auto auto",
        padding: "20px",
      })
    }

    ${
      Laptop({
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        padding: "20px"
      })
    }
    ${
      Desktop({
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        padding: "20px"
      })
    }
`

const Shopnow = () => {
  return (
    <Container>
        <Shopnowitem />
        <Shopnowitem />
        <Shopnowitem />
    </Container>
  )
}

export default Shopnow