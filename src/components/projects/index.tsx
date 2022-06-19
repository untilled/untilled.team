import TabMenu from 'components/_shared/TabMenu'
import { projects } from 'libs/data'
import { useState } from 'react'
import * as styled from './index.styled'
type Props = {}
const menus = [
  {
    id: 0,
    name: 'All',
  },
  {
    id: 1,
    name: 'Website',
  },
  {
    id: 2,
    name: 'Mobile app',
  },
]

const Projects = (props: Props) => {
  const [selectedMenu, setSelectedMenu] = useState(0)

  const handleClick = (id: number) => {
    setSelectedMenu(id)
  }

  return (
    <styled.Wrapper>
      <styled.Title className="container">Projects</styled.Title>
      <TabMenu data={menus} selectedMenu={selectedMenu} onClick={handleClick} />
      <styled.Cards className="container">
        {/* {projects.map((project) => (
          <styled.Card key={project.id}></styled.Card>
        ))} */}
        Empty!
      </styled.Cards>
    </styled.Wrapper>
  )
}

export default Projects
