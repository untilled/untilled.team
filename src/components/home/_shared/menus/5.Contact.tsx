import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import Header from 'components/_shared/Header'
import WordSlide from 'components/_shared/WordSlider'
import { useRouter } from 'next/router'
import React from 'react'
import { mobile } from 'styles/media'

type Props = {}

const words = ['🙋‍♂️', '🙋🏼‍♀️', '👨🏼‍💻', '🧙🏼‍♂️']

//email
//location
const Contact = (props: Props) => {
  const router = useRouter()

  const handleClick: React.MouseEventHandler<Element> = () => {
    // router.push('/contact')
  }

  return (
    <Wrapper>
      <Content className="container">
        <Title>
          <h1>프로젝트 혼자 할 순 없잖아요?</h1>
          <h1>언틸드와 함께 프로젝트를 진행해 보세요. 🖐</h1>
        </Title>
        <ContentBottom>
          <Button color="white" href="contact">
            문의하기
          </Button>
          <Button color="gray">공유하기</Button>
        </ContentBottom>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  height: fit-content;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
  padding-bottom: 100px;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 900;
    font-size: 40px;
  }
  h3 {
    color: #ced4da;
    font-weight: 500;
  }

  ${mobile} {
    h1 {
      font-weight: 700;
    }
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  gap: 40px;
  & > div {
    width: 100%;
  }
  padding: 30px 50px;
`

const ContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  button {
    width: 300px;
    padding: 13px;
  }

  ${mobile} {
    flex-direction: column;
  }
`

const StyledButton = styled(Button)``

export default Contact
