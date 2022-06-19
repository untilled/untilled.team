import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mobile } from 'styles/media'

export const Wrapper = styled.div`
  position: relative;
`

type PageMenu = {
  accented: boolean
}

export const PageMenu = styled.div<PageMenu>`
  font-family: 'Prompt', sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 15px;
  ${({ accented }) =>
    accented &&
    css`
      background-color: #212529;
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
      & > div {
        /* color: black; */
      }
    `};
  ${mobile} {
    display: none !important;
  }
`

export const MenuHeader = styled.div`
  position: absolute;
  white-space: nowrap;
  top: 0;
  width: 10px;
  transform: translate(-20%, -150%) rotate(-90deg);
`

type MenuProps = {
  selected: boolean
}

export const Menu = styled.div<MenuProps>`
  position: relative;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #797979;
  & > div {
    display: none;
    display: block;
    position: absolute;
    top: -5px;
    right: 100%;
    margin-right: 10px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity ease-in-out 0.1s;
  }
  transition: background-color ease-in-out 0.5s;
  &:hover {
    & > div {
      display: block;
      opacity: 1;
    }
  }
  ${(props) =>
    props.selected === true &&
    css`
      background-color: white;
    `};
`

type ArrowList = {
  visible: boolean
}

export const ArrowList = styled.div<ArrowList>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
  transition: transform ease-in-out 0.3s;
  ${(props) =>
    props.visible === false &&
    css`
      transform: translate(0px, 110px);
    `}

  ${mobile} {
    display: none !important;
  }
`
type ArrowProps = {
  activated: boolean
}

export const Arrow = styled.div<ArrowProps>`
  border-radius: 50%;
  background-color: #212529;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);

  svg {
    width: 30px;
    height: 30px;
  }
  cursor: pointer;
  visibility: ${(props) => (props.activated ? 'visible' : 'hidden')};
`

type ShareMessage = {
  visible: boolean
}

export const ShareMessage = styled.a<ShareMessage>`
  white-space: nowrap;
  padding: 5px 15px;
  border-radius: 30px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
  background-color: #212529;
  margin-left: 60px;
  margin-bottom: 25px;
  transition: transform ease-in-out 0.3s;
  ${(props) =>
    props.visible === false &&
    css`
      transform: translate(0px, 110px);
    `}

  ${mobile} {
    display: none !important;
  }
`
