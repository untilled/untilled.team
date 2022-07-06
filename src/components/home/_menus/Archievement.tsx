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

//모바일인 경우 슬라이드로 전환되도록 수정
//멤버수, 프로젝트수, 시작한지
const Archivement: React.FC = () => {
  return (
    <Wrapper>
      <Title>
        <h1>언틸드와 함께 성장해요</h1>
        <h3>지금도 팀원과 함께 끊임없이 성장해 나가고 있어요.</h3>
      </Title>

      <CardWrapper className="container">
        <Card>
          <CardTop>
            <CardTitle>시작한지 🏃</CardTitle>
            <CardSubTitle>0 일째</CardSubTitle>
          </CardTop>
        </Card>
        <Card>
          <CardTop>
            <CardTitle>운영중인 서비스 📖</CardTitle>
            <CardSubTitle>0 개</CardSubTitle>
          </CardTop>
        </Card>
        <Card>
          <CardTop>
            <CardTitle>참여중인 멤버 🧑‍🤝‍🧑</CardTitle>
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
                  최신 기술을 사용해 웹 서비스를 개발하고 운영합니다.
                </CardContent>
              </CardTop>
              <CardBottom>
                <div>Web Services</div> <AiOutlineArrowRight />
              </CardBottom>
            </Card>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <Card>
              <CardTop>
                <CardTitle>Mobile Development</CardTitle>
                <CardContent>
                  모바일 서비스도 같이 개발하고 운영하고 있어요.
                </CardContent>
              </CardTop>
              <CardBottom>
                <div>Mobile Services</div> <AiOutlineArrowRight />
              </CardBottom>
            </Card>
          </a>
        </Link>
        <a
          href="https://morethan-log.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Card>
            <CardTop>
              <CardTitle>Develop Activity</CardTitle>
              <CardContent>
                다양한 개발 활동을 진행하고 있어요. 자세한 내용은 블로그를
                확인해보세요.
              </CardContent>
            </CardTop>
            <CardBottom>
              <div>Dev Blog</div> <AiOutlineArrowRight />
            </CardBottom>
          </Card>
        </a>
      </CardWrapper>
    </Wrapper>
  )
}

export default Archivement
