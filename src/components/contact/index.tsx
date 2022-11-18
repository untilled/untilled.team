import BackgroundVideos from 'components/home/_common/BackgroundVideos'
import Gradient from 'components/_common/Gradient'
import { Wrapper, StyledGradient, Title } from './index.styled'

interface ContactProps {}

//email
//location
const videos = ['/videos/intro2.mp4', '/videos/intro1.mp4']

const Contact: React.FC<ContactProps> = () => {
  return (
    <Wrapper>
      <div className="box intro">
        <BackgroundVideos data={videos} />
        <Title className="container">
          언틸드에 궁금하신 <br /> 점이 있으신가요?
        </Title>
      </div>
      <div className="box container channel">
        <h1>언틸드의 다양한 채널을 이용해보세요.</h1>
      </div>
      <div className="box grey">
        <div className="container">
          개발적인 대화, 일상적인 대화 모두 환영입니다.
        </div>
      </div>
      <div className="box container">지금 바로 연락주세요!</div>
      {/* <StyledGradient /> */}
    </Wrapper>
  )
}
export default Contact
