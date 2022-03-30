import styled from '@emotion/styled'
import React from 'react'
import Logo from '../Logo'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <div className="container">
        {/* <Logo color="gray" /> */}
        <div></div>
        <div>Untilled. All rights reserved.</div>
        <div></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 40px;
  color: white;
  background-color: #212529;
  font-size: 0.8rem;
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export default Footer
