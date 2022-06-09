import * as styled from './Contact.styled'
import Button from 'components/_shared/Button'
import { useRouter } from 'next/router'
import React from 'react'

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
    <styled.Wrapper>
      <styled.Content className="container">
        <styled.Title>
          <h1>프로젝트 혼자 할 순 없잖아요?</h1>
          <h1>언틸드와 함께 프로젝트를 진행해 보세요. 🖐</h1>
        </styled.Title>
        <styled.ContentBottom>
          <Button color="white" href="contact">
            문의하기
          </Button>
          <Button color="gray">공유하기</Button>
        </styled.ContentBottom>
      </styled.Content>
    </styled.Wrapper>
  )
}

export default Contact
