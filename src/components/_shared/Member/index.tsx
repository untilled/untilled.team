import React from 'react'
import { Wrapper } from './index.style'
interface MemberProps {
  size?: number
  data: string[]
}

const Member: React.FC<MemberProps> = (props) => {
  return <Wrapper {...props} />
}

export default Member
