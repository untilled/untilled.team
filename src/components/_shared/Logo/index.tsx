import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { mobile } from 'styles/media'
import useMouseHover from 'hooks/useMouseHover'

type Props = {
  color?: string
  size?: string
}

const Logo = ({ color = 'white', size = 'normal', ...props }: Props) => {
  const hoverHandlers = useMouseHover()

  return (
    <Wrapper color={color} {...hoverHandlers}>
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
  background-color: ${({ color }) =>
    color === 'white' ? 'white' : color === 'black' ? 'black' : '#212529'};
  font-weight: 900;
  font-size: 1.5rem;
  cursor: pointer;
  div {
    color: ${({ color }) =>
      color === 'white' ? 'black' : color === 'black' ? 'white' : 'white'};
    border-top: 5px solid
      ${({ color }) => (color === 'white' ? 'black' : 'white')};
  }
  ${mobile} {
    font-size: 1rem;
    div {
      border-top: 3px solid
        ${({ color }) => (color === 'white' ? 'black' : 'white')};
    }
  }
`

export default Logo
