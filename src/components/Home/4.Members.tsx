import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
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

const Page = (props: Props) => {
  const router = useRouter()
  const handleClick = (e: any) => {
    router.push('/members')
  }
  return (
    <Wrapper>
      <Title>
        <h1>팀 언틸드의 멤버를 만나보세요. 👨‍👨‍👧‍👦</h1>
        <h3>지상 최고의 실력을 갖춘 팀원으로 구성되어 있어요.</h3>
        <br />
        {/* <h1>Developing Developers</h1> */}
      </Title>
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
      <Button className="container" onClick={handleClick}>
        More
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  ${mobile} {
    height: fit-content;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
  }
  h3 {
    color: #ced4da;
  }
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

export default Page
