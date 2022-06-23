import React from 'react'
import { Wrapper } from './index.style'
type Props = {
  size?: number
  data: string[]
}

function Member(props: Props) {
  return <Wrapper {...props} />
}

export default Member
