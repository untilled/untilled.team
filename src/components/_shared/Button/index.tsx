import styled from '@emotion/styled'
import useMouseHover from 'hooks/useMouseHover'
import { useRouter } from 'next/router'
import React, { MouseEventHandler } from 'react'

type Props = {
  children?: string
  className?: string
  color?: 'gray' | 'white'
  href?: string
  onClick?: MouseEventHandler
}

const Button = ({
  children,
  className,
  color = 'gray',
  href,
  onClick,
}: Props) => {
  const router = useRouter()
  const [, handleMouseOver, handleMouseOut] = useMouseHover()

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (href) {
      router.push(href)
    }
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <Wrapper
      color={color}
      className={className}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </Wrapper>
  )
}

type Wrapper = {
  color: string
}

const Wrapper = styled.button`
  padding: 3px 12px;
  font-weight: 600;
  background-color: ${({ color }) => (color === 'gray' ? `#212529` : `white`)};
  color: ${({ color }) => (color === 'gray' ? `white` : `black`)};
  font-size: 0.8rem;
  border-radius: 10px;
  padding: 10px 20px;
`

export default Button
