import styled from '@emotion/styled'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: 'Prompt', sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 3rem;
  width: 100%;
  margin-bottom: 80px;
  text-align: center;
`

const Cards = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 50px;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

  ${mobile} {
  }
`

const Card = styled.div`
  width: 100%;
  height: 80px;
  border: 2px solid #212529;
  border-radius: 13px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  ${mobile} {
    width: 100%;
  }
`

export { Wrapper, Title, Cards, Card }
