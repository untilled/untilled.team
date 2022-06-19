import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import { mobile } from 'styles/media'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  padding-bottom: 40px;

  ${mobile} {
    height: fit-content;
    padding-bottom: 0;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
    font-size: 2.5rem;
  }

  h3 {
    color: #ced4da;
    font-weight: 500;
    font-size: 1.2rem;
  }

  ${mobile} {
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`

export const List = styled.div`
  width: 100%;
  height: 500px;
  margin: 45px 0;
  padding: 45px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;
  overflow: hidden;
  background-color: #212529;
  ${mobile} {
    height: 300px;
    margin: 25px 0;
  }
  color: #868e96;
  font-weight: 200;
`

export const Project = styled.div`
  background-color: #212529;
  width: 300px;
  flex-shrink: 0;
  height: 400px;

  ${mobile} {
    height: 230px;
  }
`

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const MoreButton = styled(Button)`
  padding: 15px 90px;
  ${mobile} {
    padding: 10px 90px;
  }
`
