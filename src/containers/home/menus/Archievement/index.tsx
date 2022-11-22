import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import * as Styled from './index.styled'

//모바일인 경우 슬라이드로 전환되도록 수정
//멤버수, 프로젝트수, 시작한지
const Archivement: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        <h1>언틸드와 함께 성장해요</h1>
        <h3>지금도 팀원과 함께 끊임없이 성장해 나가고 있어요.</h3>
      </Styled.Title>

      <Styled.CardWrapper className="container">
        <Styled.Card>
          <Styled.CardTop>
            <Styled.CardTitle>시작한지</Styled.CardTitle>
            <Styled.CardSubTitle>0 일째</Styled.CardSubTitle>
          </Styled.CardTop>
        </Styled.Card>
        <Styled.Card>
          <Styled.CardTop>
            <Styled.CardTitle>운영중인 서비스</Styled.CardTitle>
            <Styled.CardSubTitle>0 개</Styled.CardSubTitle>
          </Styled.CardTop>
        </Styled.Card>
        <Styled.Card>
          <Styled.CardTop>
            <Styled.CardTitle>참여중인 멤버</Styled.CardTitle>
            <Styled.CardSubTitle>0 명</Styled.CardSubTitle>
          </Styled.CardTop>
        </Styled.Card>
      </Styled.CardWrapper>
      <Styled.CardWrapper className="container">
        <Link href="/projects">

          <Styled.Card>
            <Styled.CardTop>
              <Styled.CardTitle>Web Development</Styled.CardTitle>
              <Styled.CardContent>
                최신 기술을 사용해 웹 서비스를 개발하고 운영합니다.
              </Styled.CardContent>
            </Styled.CardTop>
            <Styled.CardBottom>
              <div></div> <AiOutlineArrowRight />
            </Styled.CardBottom>
          </Styled.Card>

        </Link>
        <Link href="/projects">

          <Styled.Card>
            <Styled.CardTop>
              <Styled.CardTitle>Mobile Development</Styled.CardTitle>
              <Styled.CardContent>
                모바일 서비스도 같이 개발하고 운영하고 있어요.
              </Styled.CardContent>
            </Styled.CardTop>
            <Styled.CardBottom>
              <div></div> <AiOutlineArrowRight />
            </Styled.CardBottom>
          </Styled.Card>

        </Link>
        <a
          href="https://morethan-log.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Styled.Card>
            <Styled.CardTop>
              <Styled.CardTitle>Develop Activity</Styled.CardTitle>
              <Styled.CardContent>
                다양한 개발 활동을 진행하고 있어요. 자세한 내용은 블로그를
                확인해보세요.
              </Styled.CardContent>
            </Styled.CardTop>
            <Styled.CardBottom>
              <div></div> <AiOutlineArrowRight />
            </Styled.CardBottom>
          </Styled.Card>
        </a>
      </Styled.CardWrapper>
    </Styled.Wrapper>
  );
}

export default Archivement
