import styled from '@emotion/styled'
import { mobile } from 'styles/media'

export const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  padding: 80px 0px;
  overflow: scroll;
  ${mobile} {
    height: fit-content;
    padding-bottom: 0;
  }
`

export const Title = styled.div`
  /* font-family: 'Prompt', sans-serif; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-bottom: 40px;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
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
export const ContentWrapper = styled.div`
  height: fit-content;
`

export const CardWrapper = styled.div`
  display: flex;
  gap: 40px;
  height: fit-content;
  align-items: center;
  padding: 0;
  margin-bottom: 40px;
  ${mobile} {
    flex-direction: column;
    height: fit-content;
  }
`

export const CardHeader = styled.div`
  font-size: 0.8rem;
  color: #ced4da;
  font-weight: 400;
  opacity: 0;
  transition: opacity ease-in-out 0.3s;
`

export const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
  transition: font-size ease-in-out 0.3s;
`

export const CardContent = styled.div`
  font-size: 1rem;
  opacity: 0;
  transition: opacity ease-in-out 0.3s;
`

export const Card = styled.div`
  width: 100%;
  background-color: #212529;
  border-radius: 15px;
  height: 300px;
  padding: 30px;
  ${mobile} {
    border-radius: 0;
    height: 300px;
  }

  &:hover {
    ${CardHeader} {
      opacity: 1;
    }
    ${CardTitle} {
      font-size: 1.5rem;
    }
    ${CardContent} {
      opacity: 1;
    }
  }
`

export const CommentWrapper = styled.div`
  background-color: #212529;
  padding: 10px 20px;
  height: fit-content;
  width: 100%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  ${mobile} {
    border-radius: 0px;
    padding: 10px 5px;
  }
`

export const CommentProfile = styled.div`
  width: 160px;
  height: 160px;
  flex-shrink: 0;
  ${mobile} {
    width: 100px;
    height: 100px;
  }
`
export const CommentContent = styled.div``
