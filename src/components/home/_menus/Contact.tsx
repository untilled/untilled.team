import * as styled from './Contact.styled'
import Button from 'components/_shared/Button'
import { useRouter } from 'next/router'
import React from 'react'
import BackgroundVideos from '../_shared/BackgroundVideos'

type Props = {}
const videos = ['/videos/intro1.mp4', '/videos/intro2.mp4']

const words = ['🙋‍♂️', '🙋🏼‍♀️', '👨🏼‍💻', '🧙🏼‍♂️']

const Contact = (props: Props) => {
  return (
    <styled.Wrapper>
      <BackgroundVideos data={videos} />
      <styled.Content className="container">
        <styled.Title>
          <h1>프로젝트 혼자 할 순 없잖아요?</h1>
          <h1>언틸드와 함께 프로젝트를 진행해 보세요. 🖐</h1>
        </styled.Title>
        <styled.ContentBottom>
          <Button color="white" href="mailto:morethanmin.dev@gmail.com">
            Contact
          </Button>
          <Button color="gray_2">Share</Button>
        </styled.ContentBottom>
      </styled.Content>
    </styled.Wrapper>
  )
}

export default Contact
