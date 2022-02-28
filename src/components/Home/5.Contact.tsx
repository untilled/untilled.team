import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <Wrapper>
      <h1 className="container">
        프로젝트 혼자 할 순 없잖아요? <br />
      </h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  padding-top: 100px;
`

export default Contact
