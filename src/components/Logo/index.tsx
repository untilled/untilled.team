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
    <StyledWrapper
      className="cursorify-pointer"
      color={color}
      {...hoverHandlers}
    >
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
