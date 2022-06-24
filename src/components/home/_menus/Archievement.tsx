import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {
  Wrapper,
  Title,
  CardWrapper,
  Card,
  CardTop,
  CardTitle,
  CardSubTitle,
  CardContent,
  CardBottom,
} from './Archievement.style'

type Props = {}

//모바일인 경우 슬라이드로 전환되도록 수정
//멤버수, 프로젝트수, 시작한지
const Archivement = (props: Props) => {
  return (
    <Wrapper>
      <Title>
        <h1>언틸드와 함께 성장해요</h1>
        <h3>지금도 팀원과 함께 끊임없이 성장해 나가고 있어요.</h3>
      </Title>

      <CardWrapper className="container">
        <Card>
          <CardTop>
            <CardTitle>시작한지</CardTitle>
            <CardSubTitle>0 일째</CardSubTitle>
          </CardTop>
        </Card>
        <Card>
          <CardTop>
            <CardTitle>운영중인 서비스</CardTitle>
            <CardSubTitle>0 개</CardSubTitle>
          </CardTop>
        </Card>
        <Card>
          <CardTop>
            <CardTitle>참여중인 멤버</CardTitle>
            <CardSubTitle>0 명</CardSubTitle>
          </CardTop>
        </Card>
      </CardWrapper>
      <CardWrapper className="container">
        <Link href="/projects">
          <a>
            <Card>
              <CardTop>
                <CardTitle>Web Development</CardTitle>
                <CardContent>
                  최신 기술을 사용하여 다양한 웹 서비스를 개발해요.
                </CardContent>
              </CardTop>
              <CardBottom>
                <AiOutlineArrowRight />
              </CardBottom>
            </Card>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <Card>
              <CardTop>
                <CardTitle>Mobile Development</CardTitle>
                <CardContent>모바일도 서비스도 개발 할 수 있어요.</CardContent>
              </CardTop>
              <CardBottom>
                <AiOutlineArrowRight />
              </CardBottom>
            </Card>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <Card>
              <CardTop>
                <CardTitle>Develop Activity</CardTitle>
                <CardContent>다양한 개발 활동을 진행해요.</CardContent>
              </CardTop>
              <CardBottom>
                <AiOutlineArrowRight />
              </CardBottom>
            </Card>
          </a>
        </Link>
      </CardWrapper>
    </Wrapper>
  )
}

export default Archivement
