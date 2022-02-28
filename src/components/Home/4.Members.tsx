import styled from '@emotion/styled'
import React from 'react'

type Props = {}

const members = [
  {
    id: 1,
    name: 'jade',
  },
  {
    id: 2,
    name: 'jade',
  },
  {
    id: 3,
    name: 'jade',
  },
  {
    id: 4,
    name: 'jade',
  },
  {
    id: 5,
    name: 'jade',
  },
  {
    id: 6,
    name: 'jade',
  },
  {
    id: 7,
    name: 'jade',
  },
  {
    id: 8,
    name: 'jade',
  },
  {
    id: 9,
    name: 'jade',
  },
  {
    id: 10,
    name: 'jade',
  },
]

const Members = (props: Props) => {
  return (
    <Wrapper>
      <h1 className="container">Untilled Members</h1>
      <MemberList>
        {members.map((member) => (
          <Member key={member.id}>{member.name}</Member>
        ))}
      </MemberList>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > h1 {
    width: 100%;
  }
`

const MemberList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  top: 50%;
  gap: 45px;
  overflow: hidden;
`

const Member = styled.div`
  border: 1px solid white;
  width: 300px;
  flex-shrink: 0;
  height: 450px;
`

export default Members
