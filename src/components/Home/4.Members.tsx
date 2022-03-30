import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { mobile } from 'styles/media'

type Props = {}
type members = {
  name: string
  //desc: string
  //role: string
  // src: string
}[]

//27
const members: members = [
  {
    name: 'Morethanmin',
  },
  {
    name: 'Sang Min Lee',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
  {
    name: 'Jade',
  },
]

// 아이콘 형태

const Page = (props: Props) => {
  const router = useRouter()
  const handleClick = (e: any) => {
    router.push('/members')
  }
  return (
    <Wrapper>
      <Title className="container">
        <h1>팀 언틸드의 멤버를 만나보세요</h1>
        <h3>
          다양한 배경 속에서 참가했지만, 모두들 성장의 즐거움을 느끼고 있어요.
        </h3>
      </Title>
      <div>
        <MemberList>
          {members.map((member, idx) => (
            <Member key={idx}>{/* <img src="" alt="" /> */}</Member>
          ))}
        </MemberList>
        <MemberList>
          {members.map((member, idx) => (
            <Member key={idx}>{/* <img src="" alt="" /> */}</Member>
          ))}
        </MemberList>
        <MemberList>
          {members.map((member, idx) => (
            <Member key={idx}>{/* <img src="" alt="" /> */}</Member>
          ))}
        </MemberList>
      </div>
      <Button className="container" onClick={handleClick}>
        more
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  padding-top: 100px;
  gap: 45px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  & > *:last-child {
    margin-bottom: 45px;
  }

  ${mobile} {
    height: fit-content;
  }
`

const Title = styled.div`
  width: 100%;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
    text-align: center;
  }
  h3 {
    color: #ced4da;
    font-weight: 500;
    text-align: center;
  }
`
const MemberList = styled.div`
  width: 100vw;
  overflow: visible;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  &:first-child,
  &:last-child {
    transform: translate(-80px, 0px);
  }
`

const Member = styled.div`
  width: 150px;
  height: 150px;
  background-color: #212529;
  border-radius: 50%;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 200px;
  }
`

export default Page
