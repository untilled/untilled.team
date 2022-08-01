import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { mobile } from 'styles/media'
import useMouseHover from 'hooks/useMouseHover'

interface LogoProps {
  color?: string
  size?: string
}

const Logo: React.FC<LogoProps> = ({
  color = 'white',
  size = 'normal',
  ...props
}) => {
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
  padding: 2px 5px;
  font-weight: 900;
  font-size: 1.6rem;
  cursor: pointer;
  font-style: italic;
  div {
    color: ${({ color }) => color};
    border-top: 5px solid ${({ color }) => color};
  }
  ${mobile} {
    font-size: 1.2rem;
    div {
      border-top: 3px solid ${({ color }) => color};
    }
  }
`

export default Logo
