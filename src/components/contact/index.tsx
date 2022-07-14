import BackgroundVideos from 'components/home/_shared/BackgroundVideos'
import Gradient from 'components/_shared/Gradient'
import { Wrapper, StyledGradient, Title } from './index.style'

interface ContactProps {}

//email
//location
const videos = ['/videos/intro1.mp4', '/videos/intro2.mp4']

const Contact: React.FC<ContactProps> = () => {
  return (
    <Wrapper>
      <div className="intro">
        <BackgroundVideos data={videos} />
        <Title className="container">
          언틸드에 궁금하신 <br /> 점이 있으신가요?
        </Title>
      </div>
      <div className="desc"></div>
      {/* <StyledGradient /> */}
    </Wrapper>
  )
}
export default Contact
