import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

type Props = {
  color?: string
  size?: string
}

const Logo = ({ color = 'white', size = 'normal' }: Props) => {
  return (
    <Wrapper color={color}>
      <Link href="/">
        <a>
          <div>Untilled.</div>
        </a>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: fit-content;
  padding: 5px 10px;
  background-color: ${({ color }) => (color === 'white' ? 'white' : 'black')};
  font-weight: 900;
  font-size: 1.5rem;
  cursor: pointer;
  div {
    color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
    border-top: 5px solid
      ${({ color }) => (color === 'white' ? 'black' : 'white')};
  }
`

export default Logo
