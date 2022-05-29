import styled from '@emotion/styled'
import { menus } from 'libs/data'
import Link from 'next/link'
import Logo from '../Logo'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <div className="container">
        <Left>
          <Logo color="gray" />
          <Menus>
            {menus.map((menu) => (
              <Link key={menu.id} href={menu.href}>
                <a>
                  <div>{menu.name}</div>
                </a>
              </Link>
            ))}
          </Menus>
        </Left>
        <Right>
          <div>Untilled. All rights reserved.</div>

          {/* <Select name="" id="">
            <option value="kr">한국어</option>
          </Select> */}
        </Right>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: fit-content;
  color: white;
  padding: 50px 0px;
  background-color: #212529;
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
  margin-right: 60px;
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
