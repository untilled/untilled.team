import styled from '@emotion/styled'
import React from 'react'
import Logo from '../Logo'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <div className="container">
        <Logo color="white" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 200px;
  color: white;
  background-color: #212529;
`

export default Footer
