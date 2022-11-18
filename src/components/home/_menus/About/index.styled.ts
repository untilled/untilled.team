import styled from '@emotion/styled'
import Tag from 'components/_common/Tag'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
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

const Title = styled.div`
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
    text-align: center;
  }

  h3 {
    text-align: center;
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
const ContentWrapper = styled.div`
  height: fit-content;
`

const CardWrapper = styled.div`
  display: flex;
  gap: 40px;
  height: fit-content;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px;
  user-select: none;

  ${mobile} {
    flex-direction: column;
    height: fit-content;
    gap: 20px;
  }
`

const CardHeader = styled.div`
  font-size: 0.8rem;
  color: #ced4da;
  font-weight: 400;
  opacity: 0;
  transition: opacity ease-in-out 0.3s;
`

const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
  transition: font-size ease-in-out 0.3s;
  ${mobile} {
    font-size: 1.7rem;
  }
`

const CardContent = styled.div`
  font-size: 1rem;
  opacity: 0;
  transition: opacity ease-in-out 0.3s;
`

const Card = styled.div`
  position: relative;
  width: 100%;
  background-color: #212529;
  border-radius: 15px;
  height: 300px;
  max-height: 300px;
  padding: 30px;
  svg {
    position: absolute;
    bottom: 30px;
    right: 30px;
    opacity: 1;
    transition: opacity ease-in-out 0.3s;
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
    svg {
      opacity: 0;
    }
  }
  ${mobile} {
  }
`

const CommentWrapper = styled.div`
  background-color: #212529;
  padding: 20px;
  width: 100%;
  border-radius: 15px;
  display: flex;
  /* align-items: center; */
  height: fit-content;
  ${mobile} {
    border-radius: 0px;
    padding: 10px 5px;
    flex-direction: column;
    align-items: center;
  }
`

const CommentProfile = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #364fc7;
  ${mobile} {
    width: 100px;
    height: 100px;
  }
`

const StyledTag = styled(Tag)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0) rotate(-4deg);
  z-index: 0;
`

const CommentContent = styled.div`
  height: 100%;
  padding: 20px;
  line-height: 28px;
  color: #ced4da;
  span {
    color: #ced4da;
    font-size: 0.8rem;
  }
`

export {
  Wrapper,
  Title,
  ContentWrapper,
  CardWrapper,
  CardHeader,
  CardTitle,
  CardContent,
  Card,
  CommentWrapper,
  CommentProfile,
  StyledTag,
  CommentContent,
}
