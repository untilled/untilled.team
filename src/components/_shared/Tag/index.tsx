import React from 'react'
import { Wrapper } from './index.style'
type Props = {
  children: any
  className?: string
  color?: ''
}

function Tag({ children, className }: Props) {
  return <Wrapper className={className}>{children}</Wrapper>
}

export default Tag
