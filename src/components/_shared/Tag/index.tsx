import React, { ReactChildren } from 'react'
import * as styled from './index.styled'
type Props = {
  children: any
  className?: string
  color?: ''
}

function Tag({ children, className }: Props) {
  return <styled.Wrapper className={className}>{children}</styled.Wrapper>
}

export default Tag
