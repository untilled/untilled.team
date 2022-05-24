import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import { members } from 'libs/data'
import imageLoader from 'libs/loader'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { mobile } from 'styles/media'

type Props = {}

// 아이콘 형태

const Members = (props: Props) => {
  const router = useRouter()

  const handleClick: React.MouseEventHandler<Element> = () => {
    router.push('/members')
  }
  return (
    <Wrapper>
      <Title className="container">
        <h1>팀 언틸드의 멤버를 만나보세요.</h1>
        <h3>
          다양한 배경 속에서 참가했지만, 모두들 성장의 즐거움을 느끼고 있어요.
        </h3>
      </Title>
      <MemberListWrapper>
        <MemberList>
          {members.map((member) => (
            <Member images={member.images} key={member.id}></Member>
          ))}
        </MemberList>
        <MemberList>
          {members.map((member) => (
            <Member images={member.images} key={member.id}></Member>
          ))}
        </MemberList>
        <MemberList>
          {members.map((member) => (
            <Member images={member.images} key={member.id}></Member>
          ))}
        </MemberList>
      </MemberListWrapper>
      <Button className="container" onClick={handleClick}>
        더 알아보기
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
const MemberListWrapper = styled.div`
  overflow: hidden;
  /* height: auto; */
  flex-shrink: 0;
`
const MemberList = styled.div`
  width: 100vw;
  overflow: visible;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  &:first-of-type,
  &:last-child {
    transform: translate(-80px, 0px);
  }
`

type Member = {
  images: string[]
}

const Member = styled.div<Member>`
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #212529;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url(${({ images }) => images[0]});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all ease 0.2s 0s;
  &:hover {
    background-image: url(${({ images }) => images[1]});
  }
`

export default Members
