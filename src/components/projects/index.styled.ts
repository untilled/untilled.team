import styled from '@emotion/styled'
import { mobile } from 'styles/media'

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-family: 'Prompt', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
`

export const Cards = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`
export const Card = styled.div`
  width: 300px;
  height: 300px;
  background-color: #212529;
  border-radius: 13px;
  ${mobile} {
    width: 100%;
  }
`
