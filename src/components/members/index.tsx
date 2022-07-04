import {
  Wrapper,
  Title,
  MemberList,
  MemberWrapper,
  MemberImage,
  MemberName,
  MemberDesc,
} from './index.style'
import React, { useState } from 'react'
import TabMenu from 'components/_shared/TabMenu'
import { members } from 'constants/members'
import Member from 'components/_shared/Member'

interface MembersProps {}

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

const Members: React.FC<MembersProps> = () => {
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
      <Title className="container">Our Members</Title>
      <TabMenu data={menus} selectedMenu={selectedMenu} onClick={handleClick} />
      <MemberList className="container">
        {filteredMembers.map((member, idx) => (
          <MemberWrapper key={idx}>
            <MemberImage>
              <Member data={member.images} size={200} />
            </MemberImage>
            <MemberName>{member.name}</MemberName>
            <MemberDesc>{member.desc}</MemberDesc>
          </MemberWrapper>
        ))}
      </MemberList>
    </Wrapper>
  )
}

export default Members
