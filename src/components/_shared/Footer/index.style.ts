import styled from '@emotion/styled'
import { mobile } from 'styles/media'

export const Wrapper = styled.div`
  height: fit-content;
  background-color: #212529;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  padding: 25px 5px 20px 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile} {
    padding: 15px 5px 10px 5px;
  }
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile} {
  }
`
export const TopLeft = styled.div`
  display: flex;
  gap: 80px;
`

export const Menus = styled.div`
  font-family: 'Prompt', sans-serif;
  font-size: 0.9rem;
  display: flex;
  gap: 15px;
  align-items: center;
  & > a {
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
  ${mobile} {
    display: none;
  }
`

export const TopRight = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 10px;
  svg {
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }

  ${mobile} {
    svg {
      font-size: 1.3em;
    }
  }
`

export const Mid = styled.div`
  width: 100%;
  margin: 10px 0;
  border-top: 1px solid #343a40;
`

export const Bottom = styled.div`
  font-family: 'Prompt', sans-serif;
  font-size: 0.8rem;
  padding: 10px 10px;
  color: #868e96;
  display: flex;
  justify-content: space-between;
  ${mobile} {
    flex-direction: column;
  }
`
