import styled from '@emotion/styled'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
  height: fit-content;
  background-color: #212529;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  padding: 25px 5px 20px 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile} {
    padding: 15px 5px 10px 5px;
  }
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile} {
  }
`
const TopLeft = styled.div`
  display: flex;
  gap: 80px;
`

const Menus = styled.div`
  font-family: 'Prompt', sans-serif;
  font-size: 0.9rem;
  display: flex;
  gap: 15px;
  align-items: center;
  & > a {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
  ${mobile} {
    display: none;
  }
`

const TopRight = styled.div`
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

const Mid = styled.div`
  width: 100%;
  margin: 10px 0;
  border-top: 1px solid #343a40;
`

const Bottom = styled.div`
  font-family: 'Prompt', sans-serif;
  font-size: 0.8rem;
  padding: 10px 10px;
  color: #868e96;
  display: flex;
  justify-content: space-between;
  ${mobile} {
    flex-direction: column;
  }
  a {
    color: #868e96;
    &:hover {
      color: white;
    }
  }
`

export { Wrapper, Content, Top, TopLeft, Menus, TopRight, Mid, Bottom }
