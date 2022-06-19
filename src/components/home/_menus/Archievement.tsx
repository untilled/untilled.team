import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import * as styled from './Archievement.styled'

type Props = {}

//모바일인 경우 슬라이드로 전환되도록 수정
//멤버수, 프로젝트수, 시작한지
const Archivement = (props: Props) => {
  return (
    <styled.Wrapper>
      <styled.Title>
        <h1>언틸드와 함께 성장해요</h1>
        <h3>지금도 팀원과 함께 끊임없이 성장해 나가고 있어요.</h3>
      </styled.Title>

      <styled.CardWrapper className="container">
        <styled.Card>
          <styled.CardTop>
            <styled.CardTitle>시작한지</styled.CardTitle>
            <styled.CardSubTitle>0 일째</styled.CardSubTitle>
          </styled.CardTop>
        </styled.Card>
        <styled.Card>
          <styled.CardTop>
            <styled.CardTitle>운영중인 서비스</styled.CardTitle>
            <styled.CardSubTitle>0 개</styled.CardSubTitle>
          </styled.CardTop>
        </styled.Card>
        <styled.Card>
          <styled.CardTop>
            <styled.CardTitle>참여중인 멤버</styled.CardTitle>
            <styled.CardSubTitle>0 명</styled.CardSubTitle>
          </styled.CardTop>
        </styled.Card>
      </styled.CardWrapper>
      <styled.CardWrapper className="container">
        <Link href="/projects">
          <a>
            <styled.Card>
              <styled.CardTop>
                <styled.CardTitle>Web Development</styled.CardTitle>
                <styled.CardContent>
                  최신 기술을 사용하여 다양한 웹 서비스를 개발해요.
                </styled.CardContent>
              </styled.CardTop>
              <styled.CardBottom>
                <AiOutlineArrowRight />
              </styled.CardBottom>
            </styled.Card>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <styled.Card>
              <styled.CardTop>
                <styled.CardTitle>Mobile Development</styled.CardTitle>
                <styled.CardContent>
                  모바일도 개발함. 근데 웹앱이나 리액트 네이티브임.
                </styled.CardContent>
              </styled.CardTop>
              <styled.CardBottom>
                <AiOutlineArrowRight />
              </styled.CardBottom>
            </styled.Card>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <styled.Card>
              <styled.CardTop>
                <styled.CardTitle>Develop Activity</styled.CardTitle>
                <styled.CardContent>
                  다양한 개발활동함. 내용은 팀 블로그에 있음.
                </styled.CardContent>
              </styled.CardTop>
              <styled.CardBottom>
                <AiOutlineArrowRight />
              </styled.CardBottom>
            </styled.Card>
          </a>
        </Link>
      </styled.CardWrapper>
    </styled.Wrapper>
  )
}

export default Archivement
