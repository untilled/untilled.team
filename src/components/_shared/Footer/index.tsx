import styled from '@emotion/styled'
import { menus } from 'libs/data'
import Link from 'next/link'
import Logo from '../Logo'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <div className="container">
        <Left></Left>
        <div>Copyright ©2022 All rights reserved.</div>
        <Right></Right>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: 'Prompt', sans-serif;
  height: fit-content;
  color: white;
  padding: 10px 0px;
  background-color: #212529;
  font-size: 0.7rem;
  font-weight: 200;
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
`

const Menus = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  font-size: 0.9rem;
`

const Select = styled.select`
  border: none;
  background: none;
  background-color: white;
  border-radius: 12px;
  padding: 5px 15px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
`

export default Footer
