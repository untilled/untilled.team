import Avatar from 'components/Avatar'
import Footer from 'components/Footer'
import TabMenu from 'components/TabMenu'
import { members } from 'constants/members'
import React, { useState } from 'react'
import * as Styled from './index.styled'

interface MembersProps {}

const menus = [
  {
    id: 0,
    name: 'All',
  },
  {
    id: 1,
    name: 'Frontend',
  },
  {
    id: 2,
    name: 'Backend',
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
    <Styled.Wrapper>
      <div className="content">
        <Styled.Title className="container">Our Members</Styled.Title>
        <TabMenu
          data={menus}
          selectedMenu={selectedMenu}
          onClick={handleClick}
        />
        <Styled.MemberList className="container">
          {filteredMembers.map((member, idx) => (
            <Styled.MemberWrapper key={idx}>
              <Styled.MemberImage>
                <Avatar data={member.images} size={200} />
              </Styled.MemberImage>
              <Styled.MemberName>{member.name}</Styled.MemberName>
              <Styled.MemberDesc>{member.desc}</Styled.MemberDesc>
            </Styled.MemberWrapper>
          ))}
        </Styled.MemberList>
      </div>
      <Footer />
    </Styled.Wrapper>
  )
}

export default Members
