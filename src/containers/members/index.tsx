import * as Styled from './index.styled'
import React, { useState } from 'react'
import TabMenu from 'components/TabMenu'
import { members } from 'constants/members'
import Member from 'components/Member'
import Footer from 'components/Footer'

interface MembersProps {}

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
                <Member data={member.images} size={200} />
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
