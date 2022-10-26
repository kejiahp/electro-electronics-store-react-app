import React from 'react'
import styled from 'styled-components'
import Shopnowitem from './Shopnowitem'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 40px 100px;
    justify-content: space-evenly;
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