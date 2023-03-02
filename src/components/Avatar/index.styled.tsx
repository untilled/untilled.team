import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mobile } from 'styles/media'

type WrapperProps = {
  size?: number
  data: string[]
}

const Wrapper = styled.div<WrapperProps>`
  z-index: 5;
  position: relative;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url(${({ data }) => data[0]});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all ease 0.2s 0s;
  &:hover {
    background-image: url(${({ data }) => data[1]});
  }
  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `}
`

export { Wrapper }
