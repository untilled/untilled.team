import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { mobile } from 'styles/media'

interface LogoProps {
  color?: string
  size?: string
}

const Logo: React.FC<LogoProps> = ({ color = 'white' }) => {
  return (
    <StyledWrapper style={{ cursor: 'pointer' }} color={color}>
      <Link href="/">
        <div>Untilled.</div>
      </Link>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: fit-content;
  padding: 2px 5px;
  font-weight: 900;
  font-size: 1.6rem;
  font-style: italic;
  div {
    color: ${({ color }: { color: any }) => color};
    border-top: 5px solid ${({ color }: { color: any }) => color};
  }
  ${mobile} {
    font-size: 1.2rem;
    div {
      border-top: 3px solid ${({ color }: { color: any }) => color};
    }
  }
`

export default Logo
