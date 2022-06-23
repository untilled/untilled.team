import TabMenu from 'components/_shared/TabMenu'
import { useState } from 'react'
import { Wrapper, Title, Cards, Card } from './index.style'
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
    <Wrapper>
      <Title className="container">Projects</Title>
      <TabMenu data={menus} selectedMenu={selectedMenu} onClick={handleClick} />
      <Cards className="container">아직 프로젝트가 없어요!</Cards>
    </Wrapper>
  )
}

export default Projects
