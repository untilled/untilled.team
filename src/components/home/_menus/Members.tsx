import * as styled from './Members.styled'
import { members } from 'libs/data'
import { useRouter } from 'next/router'
import React, { MouseEventHandler } from 'react'
import Member from 'components/_shared/Member'
import { useRecoilValue } from 'recoil'
import { isMobileState } from 'states'

type Props = {}

const Members = (props: Props) => {
  const isMobile = useRecoilValue(isMobileState)
  return (
    <styled.Wrapper>
      <styled.Title className="container">
        <h1>언틸드의 멤버를 {isMobile && <br />} 만나보세요.</h1>
        <h3>
          다양한 배경 속에서{isMobile && <br />} 성장을 위해 참여하고 있어요.
        </h3>
      </styled.Title>
      <styled.MemberListWrapper>
        <styled.MemberList>
          {members.map((member) => (
            <Member
              key={member.id}
              data={member.images}
              size={isMobile ? 100 : 150}
            />
          ))}
        </styled.MemberList>
        <styled.MemberList>
          {members.map((member) => (
            <Member
              key={member.id}
              data={member.images}
              size={isMobile ? 100 : 150}
            />
          ))}
        </styled.MemberList>
        <styled.MemberList>
          {members.map((member) => (
            <Member
              key={member.id}
              data={member.images}
              size={isMobile ? 100 : 150}
            />
          ))}
        </styled.MemberList>
      </styled.MemberListWrapper>
      <styled.BtnBox>
        <styled.MoreButton href="members">더 알아보기</styled.MoreButton>
      </styled.BtnBox>
    </styled.Wrapper>
  )
}

export default Members
