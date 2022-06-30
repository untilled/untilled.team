import BackgroundVideos from 'components/home/_shared/BackgroundVideos'
import { Wrapper, Title, Cards, Card } from './index.style'

type Props = {}

//email
//location
const words = ['Worlds🌏', 'Products😻', 'Designers👨‍🎨', 'Developers🧑‍💻']

const videos = ['/videos/intro1.mp4', '/videos/intro2.mp4']

const Contact = (props: Props) => {
  return (
    <Wrapper>
      {/* <BackgroundVideos data={videos} /> */}
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
