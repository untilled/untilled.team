import styled from '@emotion/styled'
import React from 'react'
import Logo from '../Logo'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <div className="container">
        <Logo color="black" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 200px;
  color: black;
  background-color: white;
`

export default Footer
