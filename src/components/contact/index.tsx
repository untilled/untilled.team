import styled from '@emotion/styled'
import React from 'react'
import Header from '../_shared/Header'

type Props = {}

const Contact = (props: Props) => {
  return (
    <Wrapper>
      <Title className="container">Contact</Title>
      {/* <ConsoleWrapper className="container">
        <Header title="" height={40} />
        <div className="container"></div>
      </ConsoleWrapper> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: 'Prompt', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
`

const ConsoleWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: #e9ecef;
  padding: 0px;
  border-radius: 30px;
  border-radius: 30px;
  margin-bottom: 30px;
`

export default Contact
