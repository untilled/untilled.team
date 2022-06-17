import React from 'react'
import * as styled from './index.styled'
type Props = {
  size?: number
  data: string[]
}

function Member(props: Props) {
  return <styled.Wrapper {...props} />
}

export default Member
