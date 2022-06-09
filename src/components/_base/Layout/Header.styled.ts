import { css } from '@emotion/react'
import styled from '@emotion/styled'

type Wrapper = {
  isColsed: boolean
}

export const Wrapper = styled.div<Wrapper>`
  user-select: none;
  z-index: 20;
  position: fixed;
  width: 100%;
  padding: 10px;
  transition: transform ease-in-out 0.3s;
  ${(props) =>
    props.isColsed &&
    css`
      transform: translate(0px, -100px);
    `};
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

type MenuProps = {
  selected: boolean
}
export const Menu = styled.div<MenuProps>`
  font-family: 'Prompt', sans-serif;
  font-weight: 200;
  padding-bottom: 2px;

  ${(props) =>
    props.selected
      ? css`
          font-weight: 400;
          border-bottom: 2px solid white;
          padding-bottom: 0px;
        `
      : css`
          &:hover {
            color: rgba(255, 255, 255, 0.7);
          }
        `}
`
