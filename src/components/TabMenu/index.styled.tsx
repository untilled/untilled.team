import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
  font-family: 'Prompt', sans-serif;
  margin: 0px auto;
  margin-bottom: 40px;
  border-radius: 99px;
  background-color: #212529;
  padding: 0.5rem;
  display: flex;
  max-width: 1024px;
  /* gap: 10px; */

  & > * {
    width: 150px;
    height: 44px;
  }
  ${mobile} {
    transform: scale(0.9);
    & > * {
      width: 100px;
      height: 34px;
    }
  }
`

type MenuProps = {
  selected?: boolean
}

const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.8rem;
  border-radius: 99px;
  padding: 5px 5px;
  cursor: pointer;
  z-index: 2;
  transition: color 0.25s ease-in;
  color: rgba(255, 255, 255, 0.7);
  ${({ selected }) =>
    selected &&
    css`
      color: black;
    `};
`

type GliderProps = {
  selectedMenu: number
}

const Glider = styled.span<GliderProps>`
  position: absolute;
  background-color: white;
  border-radius: 99px;
  z-index: 1;
  transition: transform 0.25s ease-in-out;
  transform: translateX(${({ selectedMenu }) => selectedMenu * 100}%);
`

export { Wrapper, Menu, Glider }
