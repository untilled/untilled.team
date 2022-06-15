import * as styled from './index.styled'
import { members } from 'libs/data'
import { useState } from 'react'

type Props = {}

const menus = [
  {
    id: 0,
    name: 'All',
  },
  {
    id: 1,
    name: 'Developer',
  },
  {
    id: 2,
    name: 'Designer',
  },
]

const Members = (props: Props) => {
  const [selectedMenu, setSelectedMenu] = useState(0)

  const handleClick = (id: number) => {
    setSelectedMenu(id)
  }

  return (
    <styled.Wrapper>
      <styled.Title className="container">Members</styled.Title>
      <styled.Tab>
        {menus.map((menu) => (
          <styled.Menu
            key={menu.id}
            selected={menu.id === selectedMenu}
            onClick={() => handleClick(menu.id)}
          >
            {menu.name}
          </styled.Menu>
        ))}
        <styled.Glider selectedMenu={selectedMenu} />
      </styled.Tab>
      <styled.MemberList className="container">
        {members.map((member, idx) => (
          <styled.Member key={idx}></styled.Member>
        ))}
      </styled.MemberList>
    </styled.Wrapper>
  )
}

export default Members
