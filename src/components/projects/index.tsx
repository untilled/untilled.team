import { projects } from 'libs/data'
import * as styled from './index.styled'
type Props = {}

const Projects = (props: Props) => {
  return (
    <styled.Wrapper>
      <styled.Title className="container">Projects</styled.Title>
      <styled.Cards className="container">
        {projects.map((project) => (
          <styled.Card key={project.id}></styled.Card>
        ))}
      </styled.Cards>
    </styled.Wrapper>
  )
}

export default Projects
