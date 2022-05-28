import styled from '@emotion/styled'
import WordSlide from 'components/_shared/WordSlider'
import { mobile } from 'styles/media'

type Props = {}

const words = ['World🌏', 'Product😻', 'Designer👨‍🎨', 'Developer🧑‍💻']

//https://vod-progressive.akamaized.net/exp=1653771351~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F947%2F7%2F179738682%2F586744340.mp4~hmac=5b96762895cd156c179eb36c422cfa1d3a001b49fd64dba1db6103eb01a7db00/vimeo-prod-skyfire-std-us/01/947/7/179738682/586744340.mp4?filename=Paperwork+-+4737.mp4
//https://vod-progressive.akamaized.net/exp=1653771003~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3340%2F7%2F191704465%2F638270551.mp4~hmac=ddf4686fa91731523d922b6701dec46327fe5e2c750732e3702acd4efb2305c4/vimeo-prod-skyfire-std-us/01/3340/7/191704465/638270551.mp4?filename=Office+-+6389.mp4
const Intro = (props: Props) => {
  return (
    <Wrapper>
      <video
        src="https://vod-progressive.akamaized.net/exp=1653771351~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F947%2F7%2F179738682%2F586744340.mp4~hmac=5b96762895cd156c179eb36c422cfa1d3a001b49fd64dba1db6103eb01a7db00/vimeo-prod-skyfire-std-us/01/947/7/179738682/586744340.mp4?filename=Paperwork+-+4737.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <TitleWrapper>
        <Title className="title_1">
          Hi there,
          <br />
          We{`'`}re Untilled.
          <br />
          <br />
          <div>We{`'`}re developing</div>
          <WordSlide words={words} background height={80} />
        </Title>
      </TitleWrapper>
      {/* <BrowserBox>
        <Header title="" height={40} />
      </BrowserBox> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* &::before {
    content: '';
    background-image: url('https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80');
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.1;
  } */
  video {
    object-fit: cover; // Set the magic
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.3;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  ${mobile} {
    height: fit-content;
  }
`
const TitleWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  height: calc(100vh - 0px);
`

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 900;
  flex-shrink: 0;
`

const BrowserBox = styled.div`
  position: relative;
  max-width: 1460px;
  margin: 0 auto;
  width: 100%;
  height: 80px;
  background-color: #e9ecef;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  h2 {
    border-bottom: 5px solid white;
  }
`

export default Intro
