import styled from '@emotion/styled'
import { mobile } from 'styles/media'

export const Wrapper = styled.div`
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
export const Title = styled.div`
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  gap: 40px;
  & > div {
    width: 100%;
  }
  padding: 150px 150px;
  background-color: #212529;
`

export const ContentBottom = styled.div`
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
