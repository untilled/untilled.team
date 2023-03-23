import React from 'react'
import * as Styled from './index.styled'
interface AvatarProps {
  size?: number
  data: string[]
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return <Styled.Wrapper className="cursorify-pointer" {...props} />
}

export default Avatar
