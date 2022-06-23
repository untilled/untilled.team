import { Wrapper, Title, MemberList, Member } from './index.style'
import { members } from 'libs/data'
import React, { useState } from 'react'
import TabMenu from 'components/_shared/TabMenu'

type Props = {}

const menus = [
  {
    id: 0,
    name: 'All',
  },
  {
    id: 1,
    name: 'Developers',
  },
  {
    id: 2,
    name: 'Designers',
  },
]

const Members = (props: Props) => {
  const [selectedMenu, setSelectedMenu] = useState(0)

  const handleClick = (id: number) => {
    setSelectedMenu(id)
  }

  return (
    <Wrapper>
      <Title className="container">Members</Title>
      <TabMenu data={menus} selectedMenu={selectedMenu} onClick={handleClick} />
      <MemberList className="container">
        {members.map((member, idx) => (
          <Member key={idx}></Member>
        ))}
      </MemberList>
    </Wrapper>
  )
}

export default Members
