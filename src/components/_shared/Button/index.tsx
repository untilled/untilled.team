import styled from '@emotion/styled'
import React, { MouseEventHandler } from 'react'

type Props = {
  children?: any
  className?: string
  onClick?: MouseEventHandler
}

const Button = ({ children, className, onClick }: Props) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  padding: 3px 12px;
  font-weight: 600;
  background-color: #212529;
  color: white;
  font-size: 0.8rem;
  border-radius: 10px;
  padding: 10px 20px;
`

export default Button
