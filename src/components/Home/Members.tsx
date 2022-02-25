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
    id: 4,
    name: 'jade',
  },
  {
    id: 4,
    name: 'jade',
  },
  {
    id: 4,
    name: 'jade',
  },
  {
    id: 4,
    name: 'jade',
  },
  {
    id: 4,
    name: 'jade',
  },
]

const Members = (props: Props) => {
  return (
    <Wrapper>
      <SlideController />
      {members.map((member) => (
        <Member key={member.id}>{member.name}</Member>
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 645px;
  column-width: 300px;
  column-gap: 15px;
  column-count: 2;

  transform: rotate(90deg);
  margin: 0 auto;
  overflow: hidden;
`

const Member = styled.div`
  border: 1px solid white;
  width: 300px;
  height: 300px;
  margin-bottom: 15px;
  transform: rotate(-90deg);
`
const SlideController = styled.div`
  height: 0px;
`

export default Members
