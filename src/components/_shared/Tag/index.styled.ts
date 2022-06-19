import styled from '@emotion/styled'
import { mobile } from 'styles/media'

export const Wrapper = styled.div`
  width: fit-content;
  padding: 5px 10px;
  background-color: white;
  color: black;
  border-radius: 15px;
  font-family: 'Prompt', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  ${mobile} {
    font-size: 0.8rem;
  }
`
