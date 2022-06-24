import styled from '@emotion/styled'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
  /* min-height: 100vh; */
  padding: 100px 0;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: 'Prompt', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
`

const Cards = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  min-height: 800px;
  align-items: center;
  color: #868e96;
  /* border-radius: 15px; */
  /* background-color: #212529; */
  border: 2px solid #212529;
  border-radius: 25px;
  font-weight: 200;
  max-width: 1024px;
  ${mobile} {
    border-radius: 0;
  }
`
const Card = styled.div`
  width: 300px;
  height: 300px;
  background-color: #212529;
  border-radius: 13px;
  ${mobile} {
    width: 100%;
  }
`

export { Wrapper, Title, Cards, Card }
