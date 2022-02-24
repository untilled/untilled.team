import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = ({}: Props) => {
  return (
    <Wrapper className="">
      <Container className="container">
        <Left>
          <Link href="/">
            <a>
              <div>Untilled</div>
            </a>
          </Link>
        </Left>
        <Right>
          <Link href="/">About</Link>
          <Link href="/members">Members</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </Right>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
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
  font-weight: 900;
  font-size: 1.5rem;
  cursor: pointer;
  div {
    color: black !important;
    border-top: 5px solid black;
  }
`

const Right = styled.div`
  display: flex;
  gap: 10px;
`

export default Header
