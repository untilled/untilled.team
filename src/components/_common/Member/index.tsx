import React from 'react'
import * as Styled from './index.styled'
interface MemberProps {
  size?: number
  data: string[]
}

const Member: React.FC<MemberProps> = (props) => {
  return <Styled.Wrapper {...props} />
}

export default Member
