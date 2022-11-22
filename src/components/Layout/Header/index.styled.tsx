import { css } from '@emotion/react'
import styled from '@emotion/styled'

type WrapperProps = {}

const Wrapper = styled.div<WrapperProps>`
  user-select: none;
  z-index: 25;
  position: fixed;
  width: 100%;
  padding: 10px;
  transition: transform ease-in-out 0.3s;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

type MenuProps = {
  selected: boolean
}
const Menu = styled.div<MenuProps>`
  font-family: 'Prompt', sans-serif;
  font-weight: 200;
  padding-bottom: 2px;
  color: rgba(255, 255, 255, 0.7);

  ${(props) =>
    props.selected
      ? css`
          font-weight: 400;
          border-bottom: 2px solid white;
          padding-bottom: 0px;
          color: rgba(255, 255, 255, 1);
        `
      : css`
          &:hover {
            color: rgba(255, 255, 255, 1);
          }
        `}
`

export { Wrapper, Container, Right, Menu }
