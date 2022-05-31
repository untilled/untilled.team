import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/_shared/Logo'
import { mobile } from 'styles/media'
import { AiOutlineMenu } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import { home } from 'states'
import { css } from '@emotion/react'
import { menus } from 'libs/data'

type Props = {}

const Header = ({}: Props) => {
  const [page, setPage] = useRecoilState(home)
  const router = useRouter()
  return (
    <Wrapper>
      <Container className="container">
        <Mobile>
          <Logo />
          <div>
            <AiOutlineMenu />
          </div>
        </Mobile>
        <Desktop>
          <Logo color="white" />
          <Right>
            {menus.map((menu) => (
              <Link key={menu.id} href={menu.href}>
                <a>
                  <Menu selected={menu.href === router.asPath}>
                    {menu.name}
                  </Menu>
                </a>
              </Link>
            ))}
            {/* <Button color="white">recruit</Button> */}
          </Right>
        </Desktop>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 20;
  position: fixed;
  width: 100%;
  padding: 10px;
`
const Container = styled.div`
  /* desktop, mobile 공통 적용 */
  & > div {
    align-items: center;
    justify-content: space-between;
  }
`

const Mobile = styled.div`
  display: none;
  & > div {
    svg {
      width: 30px;
      height: 30px;
    }
  }
  ${mobile} {
    display: flex;
  }
`

const Desktop = styled.div`
  display: flex;
  ${mobile} {
    display: none;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

type MenuProps = {
  selected: boolean
}
/* font-weight: ${(props) => (props.selected ? '600' : '400')}; */
/* border-bottom: ${(props) => props.selected ? '2px solid white' : '2px solid none'}; */
const Menu = styled.div<MenuProps>`
  font-family: 'Prompt', sans-serif;
  transition: all ease-in-out 0.5s 0s;
  font-weight: 200;
  &:hover {
  }
`

export default Header
