import styled from '@emotion/styled'
import { mobile } from 'styles/media'

export const Wrapper = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  padding-top: 80px;
  ${mobile} {
    height: fit-content;
    padding-bottom: 0;
  }
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  gap: 80px;
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

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: 50px;
  width: 100%;
  padding: 0 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  ${mobile} {
    display: flex;
    overflow-x: scroll;
    gap: 20px;
  }
`

export const Card = styled.div`
  width: 100%;
  height: 250px;
  background-color: #212529;
  padding: 30px;
  border-radius: 15px;
  transition: background-color ease 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    background-color: #364fc7;
  }
  ${mobile} {
    width: calc(100vw - 50px);
    height: 230px;
    flex-shrink: 0;
  }
`
export const CardTop = styled.div``

export const CardTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 20px;
`

export const CardSubTitle = styled.div`
  font-size: 2.3rem;
  font-weight: 700;
  color: #ced4da;
`

export const CardContent = styled.div`
  color: #ced4da;
`
export const CardBottom = styled.div`
  align-self: flex-end;
  svg {
    font-size: 1.3rem;
  }
`
