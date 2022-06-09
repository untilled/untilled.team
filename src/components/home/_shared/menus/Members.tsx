import * as styled from './Members.styled'
import { members } from 'libs/data'
import { useRouter } from 'next/router'
import { MouseEventHandler } from 'react'

type Props = {}

const Members = (props: Props) => {
  const router = useRouter()

  const handleClick: MouseEventHandler<Element> = () => {
    router.push('/members')
  }
  return (
    <styled.Wrapper>
      <styled.Title className="container">
        <h1>언틸드의 멤버를 만나보세요. 🙋🏼‍♀️</h1>
        <h3>
          다양한 배경 속에서 참가했지만, 모두 성장을 위해 참여하고 있어요.
        </h3>
      </styled.Title>
      <styled.MemberListWrapper>
        <styled.MemberList>
          {members.map((member) => (
            <styled.Member
              images={member.images}
              key={member.id}
            ></styled.Member>
          ))}
        </styled.MemberList>
        <styled.MemberList>
          {members.map((member) => (
            <styled.Member
              images={member.images}
              key={member.id}
            ></styled.Member>
          ))}
        </styled.MemberList>
        <styled.MemberList>
          {members.map((member) => (
            <styled.Member
              images={member.images}
              key={member.id}
            ></styled.Member>
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
