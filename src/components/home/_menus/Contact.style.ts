import styled from '@emotion/styled'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  padding-top: 80px;
  overflow: scroll;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile} {
    height: fit-content;
  }
`
const Gradient = styled.div`
  position: absolute;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 600px;
  height: 600px;
  filter: blur(calc(600px / 5));
  background-image: linear-gradient(#364fc7, #862e9c);
  animation: rotate 15s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

  ${mobile} {
    width: 250px;
    height: 250px;
    filter: blur(calc(250px / 5));
  }
`

const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  gap: 40px;
  backdrop-filter: blur(30px);
  & > div {
    width: 100%;
  }
  padding: 80px 80px;
  background-color: rgba(26, 30, 36, 0.4);
  ${mobile} {
    padding: 30px;
    margin: 30px;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 2.5rem;
  }
  h3 {
    color: #ced4da;
    font-weight: 500;
  }

  ${mobile} {
    h1 {
      font-size: 1.7rem;
    }
  }
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
    button {
      width: 100%;
      padding: 13px;
    }
  }
`

export { Wrapper, Gradient, Content, Title, ContentBottom }
