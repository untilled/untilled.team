import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const Header = ({}: Props) => {
  return (
    <Wrapper className="borderLine">
      <Container className="container ">
        <div>untilled</div>
        <div>
          <div>About</div>
          <div>Members</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
`
const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

export default Header
