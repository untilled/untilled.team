import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <Wrapper className="">
      <div className="container">
        <h1>Projects</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  & > div {
    height: 50vh;
    /* background-color: #8d8d8d; */
    width: 100%;
  }
`

export default Page
