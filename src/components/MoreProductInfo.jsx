import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../Responsive'

const Container = styled.div`
    padding: 20px 100px;

    ${
        mobile({
            padding: "10px 10px 40px 10px",
            flexDirection: "column",
        })
    }
    ${
        tablet({
            padding: "10px 50px",
            flexDirection: "column",
        })
    }
`
const MoreInfo = styled.details`
    cursor: pointer;
    font-size: 22px;
    font-weight: 500;
    color:#d10024;
`
const More = styled.summary``
const MoreDetails = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #6c6a74;
    margin-top: 20px;
    cursor: default;
`

const MoreProductInfo = () => {
  return (
    <Container>
        <MoreInfo>
            <More>More Product Details</More>
                <MoreDetails>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto doloribus eligendi ipsam facere veniam nobis. Rerum, ullam, reiciendis consequuntur labore id doloribus velit deserunt magni sapiente perspiciatis, ipsam a dolores?
                </MoreDetails>
        </MoreInfo>
    </Container>
  )
}

export default MoreProductInfo