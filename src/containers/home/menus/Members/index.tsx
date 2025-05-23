import Avatar from 'components/Avatar'
import { members } from 'constants/members'
import useMediaQuery from 'hooks/useMediaQuery'
import React from 'react'
import { breakpoints } from 'styles/media'
import * as Styled from './index.styled'

//지금은 멤버가 없어서 임시로 넣어둠
export const memberImages = [
  ...members.map((member) => member.images),
  // temp data
  ['/images/members/0.png', '/images/members/0-hover.png'],
  ['/images/members/2.png', '/images/members/2-hover.png'],
  ['/images/members/3.png', '/images/members/3-hover.png'],
  ['/images/members/4.png', '/images/members/4-hover.png'],
  ['/images/members/5.png', '/images/members/5-hover.png'],
  ['/images/members/6.png', '/images/members/6-hover.png'],
  ['/images/members/7.png', '/images/members/7.png'],
  ['/images/members/8.png', '/images/members/8-hover.png'],
  ['/images/members/9.png', '/images/members/9-hover.png'],
  ['/images/members/10.png', '/images/members/10.png'],
  ['/images/members/11.png', '/images/members/11-hover.png'],
].filter((member) => member.length !== 0)

const Members: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[0]}px)`)

  return (
    <Styled.Wrapper>
      <Styled.Title className="container">
        <h1>언틸드의 멤버를 만나보세요</h1>
        <h3>다양한 배경 속에서 성장을 위해 참여하고 있어요.</h3>
      </Styled.Title>
      <Styled.MemberListWrapper>
        <Styled.MemberList>
          {memberImages.map((member, idx) => (
            <Avatar key={idx} data={member} size={isMobile ? 115 : 150} />
          ))}
          {memberImages.map((member, idx) => (
            <Avatar key={idx} data={member} size={isMobile ? 115 : 150} />
          ))}
        </Styled.MemberList>
        <Styled.MemberList>
          {memberImages.map((member, idx) => (
            <Avatar key={idx} data={member} size={isMobile ? 115 : 150} />
          ))}
          {memberImages.map((member, idx) => (
            <Avatar key={idx} data={member} size={isMobile ? 115 : 150} />
          ))}
        </Styled.MemberList>
        <Styled.MemberList>
          {memberImages.map((member, idx) => (
            <Avatar key={idx} data={member} size={isMobile ? 115 : 150} />
          ))}
          {memberImages.map((member, idx) => (
            <Avatar key={idx} data={member} size={isMobile ? 115 : 150} />
          ))}
        </Styled.MemberList>
      </Styled.MemberListWrapper>
      <Styled.BtnBox>
        <Styled.MoreButton href="members">더보기</Styled.MoreButton>
      </Styled.BtnBox>
    </Styled.Wrapper>
  )
}

export default Members
