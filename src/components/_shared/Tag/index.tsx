import React from 'react'
import { Wrapper } from './index.style'
interface TagProps {
  children: any
  className?: string
  color?: ''
}

const Tag: React.FC<TagProps> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>
}

export default Tag
