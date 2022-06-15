import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mobile } from 'styles/media'

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-family: 'Prompt', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
`

export const Tab = styled.div`
  font-family: 'Prompt', sans-serif;
  margin: 0px auto;
  margin-bottom: 40px;
  border-radius: 99px;
  background-color: #212529;
  padding: 0.5rem;
  display: flex;
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

export const Menu = styled.div<MenuProps>`
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

type Glider = {
  selectedMenu: number
}

export const Glider = styled.span<Glider>`
  position: absolute;
  background-color: white;
  border-radius: 99px;
  z-index: 1;
  transition: transform 0.25s ease-in-out;
  transform: translateX(${({ selectedMenu }) => selectedMenu * 100}%);
`

export const MemberList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`

export const Member = styled.div`
  width: 300px;
  height: 300px;
  background-color: #212529;
  border-radius: 15px;
  ${mobile} {
    width: 100%;
  }
`
