import styled from '@emotion/styled'
import React from 'react'
import { mobile } from 'styles/media'

type Props = {}

type members = {
  name: string
  desc: string
  role: string
  // src: string
}[]

//27
const members: members = [
  {
    name: 'Morethanmin',
    desc: '생각하는 걸 조와함',
    role: 'Operator',
    // src: '/morethanmin.jfif',
  },
  {
    name: 'Sang Min Lee',
    desc: 'Javascript Magician🧙🏼‍♂️',
    role: 'Developer',
    // src: '/morethanmin.jfif',
  },
  {
    name: 'Jade',
    desc: 'figma 장인',
    role: 'Designer',
    // src: '/morethanmin.jfif',
  },
]

const Members = (props: Props) => {
  return (
    <Wrapper>
      <Title className="container">Members</Title>
      <MenuList>
        <Menu selected>All</Menu>
        <Menu>Developer</Menu>
        <Menu>Designer</Menu>
      </MenuList>
      <MemberList className="container">
        {members.map((member, idx) => (
          <Member key={idx}>
            <img src="" alt="" />
            <h3>{member.name}</h3>
            <div>{member.role}</div>
          </Member>
        ))}
      </MemberList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-x: hidden;
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  width: 100%;
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 40px;
  text-align: center;
`

const MenuList = styled.div`
  margin: 45px auto;
  border-radius: 15px;
  background-color: #212529;
  padding: 15px;
  display: flex;
  gap: 10px;
`

type MenuProps = {
  selected?: boolean
}

const Menu = styled.div<MenuProps>`
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  background-color: ${({ selected }) => (selected ? `white` : `none`)};
  color: ${({ selected }) => (selected ? `black` : `white`)};
  border-radius: 10px;
  padding: 5px 15px;
  cursor: pointer;
`

const MemberList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 45px;

  ${mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Member = styled.div`
  width: 100%;
  background-color: #212529;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
  padding: 15px;
  img {
    width: 100%;
    height: 200px;
  }
`

export default Members
