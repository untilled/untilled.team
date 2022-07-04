import BackgroundVideos from 'components/home/_shared/BackgroundVideos'
import Gradient from 'components/_shared/Gradient'
import { Wrapper, StyledGradient, Title, Cards, Card } from './index.style'

interface ContactProps {}

//email
//location
const videos = ['/videos/intro1.mp4', '/videos/intro2.mp4']

const Contact: React.FC<ContactProps> = () => {
  return (
    <Wrapper>
      <BackgroundVideos data={videos} />
      {/* <StyledGradient /> */}
      <Title className="container">Get In Touch</Title>
      <Cards>
        <Card>github</Card>
        <Card>linkedin</Card>
        <Card>instagram</Card>
        <Card>gmail</Card>
        <Card>blog</Card>
        <Card>kakao</Card>
      </Cards>
    </Wrapper>
  )
}
export default Contact
