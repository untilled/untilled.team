import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mobile } from 'styles/media'

type Wrapper = {
  isScrollHidden: boolean
}

export const Wrapper = styled.div<Wrapper>`
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    props.isScrollHidden &&
    css`
      overflow: hidden;
    `}
`

export const ShareBox = styled.div`
  position: relative;
  margin-bottom: 20px;
  transition: transform ease-in-out 0.3s;
  & > * {
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
    background-color: #212529;
  }
  ${mobile} {
    display: none;
  }
`

export const ShareBtn = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  svg {
    width: 23px;
    height: 23px;
  }
`

export const ShareMessage = styled.a`
  position: absolute;
  right: -20px;
  top: 50%;
  white-space: nowrap;
  transform: translate(100%, -50%);
  padding: 5px 15px;
  border-radius: 30px;
`
