import styled from '@emotion/styled'
import React, { MouseEventHandler } from 'react'

type Props = {
  children?: string
  className?: string
  color?: string
  onClick?: MouseEventHandler
}

const Button = ({ children, className, color = 'gray', onClick }: Props) => {
  return (
    <Wrapper color={color} className={className} onClick={onClick}>
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
