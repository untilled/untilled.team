import styled from '@emotion/styled'
import Header from 'components/_shared/Header'
import WordSlide from 'components/_shared/WordSlide'
import { AiOutlineClose } from 'react-icons/ai'
import { VscChromeMaximize, VscChromeMinimize } from 'react-icons/vsc'
import { mobile } from 'styles/media'

type Props = {}

const words = ['World🌏', 'Product😻', 'Designer👨‍🎨', 'Developer🧑‍💻']

const Page = (props: Props) => {
  return (
    <Wrapper>
      <TitleBox className="container">
        <div>
          <br />
          Hi there, We{`'`}re Untilled.
          <br />
          <br />
        </div>
        <Content>
          <div>We{`'`}re developing</div>
          <WordSlide words={words} background height={80} />
        </Content>
      </TitleBox>
      <BrowserBox>
        <Header title="Untilled" height={40} />
        <div className="container">
          <h2>About</h2>
        </div>
      </BrowserBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;

  ${mobile} {
    height: fit-content;
  }
`

const TitleBox = styled.div`
  width: 100%;
  padding: 100px 0px;
  font-size: 55px;
  font-weight: 600;

  ${mobile} {
    font-size: 40px;
    padding: 50px 0;
  }
`

const Content = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`

const BrowserBox = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  height: fit-content;
  background-color: #212529;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  h2 {
    border-bottom: 5px solid white;
  }
`

export default Page
