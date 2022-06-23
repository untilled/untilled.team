import {
  Wrapper,
  Title,
  MemberListWrapper,
  MemberList,
  BtnBox,
  MoreButton,
} from './Members.style'
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
    <Wrapper>
      <Title className="container">
        <h1>언틸드의 멤버를 만나보세요.</h1>
        <h3>다양한 배경 속에서 성장을 위해 참여하고 있어요.</h3>
      </Title>
      <MemberListWrapper>
        <MemberList>
          {members.map((member) => (
            <Member
              key={member.id}
              data={member.images}
              size={isMobile ? 115 : 150}
            />
          ))}
        </MemberList>
        <MemberList>
          {members.map((member) => (
            <Member
              key={member.id}
              data={member.images}
              size={isMobile ? 115 : 150}
            />
          ))}
        </MemberList>
        <MemberList>
          {members.map((member) => (
            <Member
              key={member.id}
              data={member.images}
              size={isMobile ? 115 : 150}
            />
          ))}
        </MemberList>
      </MemberListWrapper>
      <BtnBox>
        <MoreButton href="members">더보기</MoreButton>
      </BtnBox>
    </Wrapper>
  )
}

export default Members
