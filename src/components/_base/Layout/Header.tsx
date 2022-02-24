import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const Header = ({}: Props) => {
  return (
    <Wrapper className="">
      <Container className="container ">
        <Left>untilled</Left>
        <Right>
          <div>About</div>
          <div>Members</div>
          <div>Projects</div>
          <div>Contact</div>
        </Right>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  padding: 10px;
`
const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  padding: 5px 10px;
  background-color: white;
  color: black;
  font-weight: 600;
  font-size: 1.5rem;
`

const Right = styled.div`
  display: flex;
  gap: 10px;
`

export default Header
