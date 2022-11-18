import React from 'react'
import * as Styled from './index.styled'
interface TagProps {
  children: any
  className?: string
  color?: ''
}

const Tag: React.FC<TagProps> = ({ children, className }) => {
  return <Styled.Wrapper className={className}>{children}</Styled.Wrapper>
}

export default Tag
