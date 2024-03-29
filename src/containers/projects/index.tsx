import Footer from 'components/Footer'
import TabMenu from 'components/TabMenu'
import { useState } from 'react'
import * as Styled from './index.styled'

interface ProjectsProps {}

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
    name: 'Mobile',
  },
]

const Projects: React.FC<ProjectsProps> = () => {
  const [selectedMenu, setSelectedMenu] = useState(0)

  const handleClick = (id: number) => {
    setSelectedMenu(id)
  }

  return (
    <Styled.Wrapper>
      <div className="content">
        <Styled.Title className="container">Our Projects</Styled.Title>
        <TabMenu
          data={menus}
          selectedMenu={selectedMenu}
          onClick={handleClick}
        />
        <Styled.Cards className="container">
          아직 프로젝트가 없어요!
        </Styled.Cards>
      </div>
      <Footer />
    </Styled.Wrapper>
  )
}

export default Projects
