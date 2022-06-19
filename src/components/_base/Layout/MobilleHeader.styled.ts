import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  user-select: none;
  z-index: 30;
  position: fixed;
  width: 100%;
  padding: 10px;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
  }
`

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 25;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

type MenuProps = {
  selected: boolean
}

export const MobileMenu = styled.div<MenuProps>`
  font-family: 'Prompt', sans-serif;
  transition: all ease-in-out 0.5s 0s;
  font-weight: 600;
  font-style: italic;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.5);
  ${(props) =>
    props.selected &&
    css`
      color: rgba(255, 255, 255, 1);
    `};
`

export const MenuOpenBtn = styled.div`
  svg {
    font-size: 1.5rem;
  }
`

export const MenuCloseButton = styled.div`
  margin-top: 40px;
  svg {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.5);
  }
`
