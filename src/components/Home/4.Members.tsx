import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

type Props = {}
type members = {
  name: string
  role: string
  src: string
}[]

//27
const members: members = [
  {
    name: 'morethanmin',
    role: 'frontend',
    src: '',
  },
  {
    name: 'Sang Min Lee',
    role: 'backend',
    src: '',
  },
  {
    name: 'jade',
    role: 'designer',
    src: '',
  },
]

const Page = (props: Props) => {
  return (
    <Wrapper className="container">
      {members.map((member, idx) => (
        <Member key={idx}>
          <h3>{member.name}</h3>
          <div>{member.role}</div>
        </Member>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
`

type Row = { isOdd: boolean }

const Row = styled.div<Row>`
  flex-grow: 1;
  display: flex;
  padding: 0px ${({ isOdd }) => (isOdd ? '0px' : '120px')};
  width: 100%;
  justify-content: space-between;
`

const Member = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #4b4b4b;
`

export default Page
