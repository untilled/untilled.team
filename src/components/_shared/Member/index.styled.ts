import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mobile } from 'styles/media'

type Wrapper = {
  size?: number
  data: string[]
}

export const Wrapper = styled.div<Wrapper>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #212529;
  border-radius: 50%;
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
