import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <Wrapper>
      <Title className="container">Projects</Title>
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
  width: 100%;
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 40px;
  text-align: center;
`

export default Projects
