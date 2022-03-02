import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const projects = [
  {
    id: 1,
    name: 'project',
  },
  {
    id: 2,
    name: 'project',
  },
  {
    id: 3,
    name: 'project',
  },
  {
    id: 4,
    name: 'project',
  },
  {
    id: 5,
    name: 'project',
  },
  {
    id: 6,
    name: 'project',
  },
  {
    id: 7,
    name: 'project',
  },
  {
    id: 8,
    name: 'project',
  },
  {
    id: 9,
    name: 'project',
  },
  {
    id: 10,
    name: 'project',
  },
]

const Projects = (props: Props) => {
  return (
    <Wrapper>
      <h1 className="container">Untilled Projects</h1>
      <List>
        {projects.map((project) => (
          <Project key={project.id}>{project.name}</Project>
        ))}
      </List>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > h1 {
    width: 100%;
  }
`

const List = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  top: 50%;
  gap: 45px;
  overflow: hidden;
`

const Project = styled.div`
  border: 1px solid white;
  width: 300px;
  flex-shrink: 0;
  height: 450px;
`

export default Projects
