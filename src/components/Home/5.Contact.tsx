import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <Wrapper className="container">
      <h1>
        프로젝트 혼자 할 순 없잖아요? <br />
        언틸드와 함께 프로젝트
      </h1>
      <h3>관심과 열정이 있는 사람은 누구나 참여할 수 있어요!</h3>
      <Button>함께하기</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  padding-top: 100px;
`

export default Contact
