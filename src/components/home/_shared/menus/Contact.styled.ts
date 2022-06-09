import styled from '@emotion/styled'
import { mobile } from 'styles/media'

export const Wrapper = styled.div`
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
