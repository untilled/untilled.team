import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
  user-select: none;
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile} {
  }
`

const Middle = styled.div`
  font-family: 'Prompt', sans-serif;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-style: italic;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  flex-shrink: 0;
  font-size: 5.5rem;
  ${mobile} {
    font-size: 3rem;
  }
`

const Title = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  ${mobile} {
    gap: 10px;
  }
`

const Subtitle = styled.div`
  width: 100%;
  font-weight: 200;
  font-size: 0.9rem;
  & > span {
    padding: 3px 0;
    border-bottom: 1px solid white;
  }
  ${mobile} {
    font-size: 0.7rem;
  }
`

const Bottom = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  margin-bottom: 100px;
  ${mobile} {
    height: 50px;
    margin-bottom: 50px;
  }
`

const Span = styled.span`
  background-color: #212529;
`

const TextCircleCss = css`
  right: 200px;
  bottom: 100px;
  ${mobile} {
    right: 0px;
    bottom: 80px;
  }
`

const CircleInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 100px;
  }
`

export {
  Wrapper,
  Middle,
  TitleWrapper,
  Title,
  Subtitle,
  Bottom,
  Span,
  TextCircleCss,
  CircleInner,
}
