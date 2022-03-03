import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type Props = {}
type members = {
  name: string
  role: string
  // src: string
}[]

//27
const members: members = [
  {
    name: 'Morethanmin',
    role: 'Operator',
    // src: '/morethanmin.jfif',
  },
  {
    name: 'Sang Min Lee',
    role: 'Developer',
    // src: '/morethanmin.jfif',
  },
  {
    name: 'Jade',
    role: 'Designer',
    // src: '/morethanmin.jfif',
  },
  {
    name: 'Jade',
    role: 'Designer',
    // src: '/morethanmin.jfif',
  },
  {
    name: 'Jade',
    role: 'Designer',
    // src: '/morethanmin.jfif',
  },
  {
    name: 'Jade',
    role: 'Designer',
    // src: '/morethanmin.jfif',
  },
  {
    name: 'Jade',
    role: 'Designer',
    // src: '/morethanmin.jfif',
  },
  {
    name: 'Jade',
    role: 'Designer',
    // src: '/morethanmin.jfif',
  },
  {
    name: 'Jade',
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
      <h1 className="container">팀 언틸드의 멤버를 만나보세요. 👨‍👨‍👧‍👦</h1>
      <MenuList>
        <Menu selected>All</Menu>
        <Menu>Developer</Menu>
        <Menu>Designer</Menu>
      </MenuList>
      <Cols className="container">
        {members.map((member, idx) => (
          <Member key={idx}>
            <img src="" alt="" />
            <h3>{member.name}</h3>
            <div>{member.role}</div>
          </Member>
        ))}
      </Cols>
      <Button className="container" onClick={handleClick}>
        More
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
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
  width: 100px;
  text-align: center;
  font-size: 0.8rem;
  background-color: ${({ selected }) => (selected ? `white` : `none`)};
  color: ${({ selected }) => (selected ? `black` : `white`)};
  border-radius: 10px;
  padding: 5px 15px;
  cursor: pointer;
`

const Cols = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 45px;
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
