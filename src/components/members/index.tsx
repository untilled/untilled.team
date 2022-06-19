import * as styled from './index.styled'
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
    <styled.Wrapper>
      <styled.Title className="container">Members</styled.Title>
      <TabMenu data={menus} selectedMenu={selectedMenu} onClick={handleClick} />
      <styled.MemberList className="container">
        {members.map((member, idx) => (
          <styled.Member key={idx}></styled.Member>
        ))}
      </styled.MemberList>
    </styled.Wrapper>
  )
}

export default Members
