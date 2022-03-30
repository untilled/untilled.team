import styled from '@emotion/styled'
import Header from 'components/_shared/Header'
import WordSlide from 'components/_shared/WordSlide'
import { mobile } from 'styles/media'

type Props = {}

const words = ['World🌏', 'Product😻', 'Designer👨‍🎨', 'Developer🧑‍💻']

const Page = (props: Props) => {
  return (
    <Wrapper>
      <TitleBox className="container title_1">
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
        <div className="container">{/* <h2>About</h2> */}</div>
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
  font-weight: 900;

  ${mobile} {
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
  height: 80px;
  background-color: #e9ecef;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  h2 {
    border-bottom: 5px solid white;
  }
`

export default Page
