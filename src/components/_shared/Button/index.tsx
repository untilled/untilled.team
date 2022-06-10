import { css } from '@emotion/react'
import styled from '@emotion/styled'
import useMouseHover from 'hooks/useMouseHover'
import { useRouter } from 'next/router'
import React, { MouseEventHandler } from 'react'

type Props = {
  children?: string
  className?: string
  color?: 'gray' | 'white' | 'gray_2'
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
  font-size: 0.8rem;
  border-radius: 10px;
  padding: 10px 20px;

  ${({ color }) =>
    color === 'white' &&
    css`
      background-color: white;
      color: black;
    `};
  ${({ color }) =>
    color === 'gray_2' &&
    css`
      background-color: #343a40;
      color: white;
    `};
  ${({ color }) =>
    color === 'gray' &&
    css`
      background-color: #212529;
      color: white;
    `};
`

export default Button
