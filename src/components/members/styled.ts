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

export const MenuList = styled.div`
  font-family: 'Prompt', sans-serif;
  margin: 0px auto;
  margin-bottom: 40px;
  border-radius: 15px;
  background-color: #212529;
  padding: 15px;
  display: flex;
  gap: 10px;
`

type MenuProps = {
  selected?: boolean
}

export const Menu = styled.div<MenuProps>`
  width: 100px;
  text-align: center;
  font-size: 0.8rem;
  background-color: ${({ selected }) => (selected ? `white` : `none`)};
  color: ${({ selected }) => (selected ? `black` : `white`)};
  border-radius: 10px;
  padding: 5px 15px;
  cursor: pointer;
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
