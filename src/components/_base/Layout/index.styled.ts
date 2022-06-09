import { css } from "@emotion/react"
import styled from "@emotion/styled"

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