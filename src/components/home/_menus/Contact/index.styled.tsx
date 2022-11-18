import styled from '@emotion/styled'
import Gradient from 'components/_common/Gradient'
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

export { Wrapper, Content, Title, ContentBottom }
