import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mobile } from 'styles/media'

export const Wrapper = styled.div`
  position: relative;
`

type PageMenu = {
  page: number | null
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
  ${({ page }) =>
    (page === 4 || page === 4) &&
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
  transform: translate(-20%, -150%) rotate(-90deg); ;
`

type MenuProps = {
  selected: boolean
}

export const Menu = styled.div<MenuProps>`
  position: relative;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.selected ? 'white' : '#797979')};
  & > div {
    display: none;
    position: absolute;
    top: -5px;
    right: 100%;
    margin-right: 10px;
    white-space: nowrap;
  }
  &:hover {
    & > div {
      display: block;
    }
  }
`

export const IconList = styled.div<PageMenu>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
  & > * {
    border-radius: 50%;
    background-color: #212529;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 23px;
      height: 23px;
      border-radius: 50%;
    }
    cursor: pointer;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
  }
  /* transform: translate(0px, 110px); */
  transition: transform ease-in-out 0.3s;

  ${(props) =>
    props.page === 6 &&
    css`
      transform: translate(0px, 110px);
    `}

  ${mobile} {
    display: none;
  }
`

type ArrowList = {
  page: number | null
}

export const ArrowList = styled.div<ArrowList>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
  transition: transform ease-in-out 0.3s;
  ${(props) =>
    props.page === 6 &&
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