import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  user-select: none;
  z-index: 30;
  position: fixed;
  width: 100%;
  padding: 10px;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
  }
`

type MobileMenuWrapperProps = {
  opened: boolean
}

const MobileMenuWrapper = styled.div<MobileMenuWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 100%;
  bottom: 100%;
  background-color: black;
  z-index: 25;
  display: flex;
  opacity: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: opacity 300ms ease-in-out;
  ${({ opened }) =>
    opened &&
    css`
      right: 0;
      bottom: 0;
      opacity: 1;
    `}
`

type MenuProps = {
  selected: boolean
}

const MobileMenu = styled.div<MenuProps>`
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

const MenuOpenBtn = styled.div`
  svg {
    font-size: 1.5rem;
  }
`

const MenuCloseButton = styled.div`
  margin-top: 40px;
  svg {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.5);
  }
`

export {
  Wrapper,
  Container,
  MobileMenuWrapper,
  MobileMenu,
  MenuOpenBtn,
  MenuCloseButton,
}
