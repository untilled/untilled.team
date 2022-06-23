import { Wrapper, Title, MemberList, Member } from './index.style'
import React, { useState } from 'react'
import TabMenu from 'components/_shared/TabMenu'
import { members } from 'constants/members'

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

  const filteredMembers =
    selectedMenu === 0
      ? members
      : members.filter((member) => member.role === selectedMenu)
  return (
    <Wrapper>
      <Title className="container">Members</Title>
      <TabMenu data={menus} selectedMenu={selectedMenu} onClick={handleClick} />
      <MemberList className="container">
        {filteredMembers.map((member, idx) => (
          <Member key={idx}></Member>
        ))}
      </MemberList>
    </Wrapper>
  )
}

export default Members
