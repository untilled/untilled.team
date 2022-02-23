import styled from '@emotion/styled'
import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <Wrapper>
      <div className="container">
        <div>Untilled</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: aliceblue;
`
