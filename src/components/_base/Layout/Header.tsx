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

type Props = {}

const menus = [
  {
    id: 1,
    name: 'About',
    href: '/',
  },
  {
    id: 2,
    name: 'Projects',
    href: '/projects',
  },
  {
    id: 3,
    name: 'Members',
    href: '/members',
  },
  {
    id: 4,
    name: 'Contact',
    href: '/contact',
  },
]

const Header = ({}: Props) => {
  const [page, setPage] = useRecoilState(home)
  const router = useRouter()
  return (
    <Wrapper className="">
      <Container className="container">
        <Mobile>
          <Logo />
          {/* 페이지 미구현 */}
          <div>
            <AiOutlineMenu />
          </div>
        </Mobile>
        {/* 메인페이지에 대한 header표시 유무 */}
        <Desktop>
          <Logo color="white" />
          <Right>
            {/* 페이지 미구현 */}
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
  /* height: 100px; */
  padding: 10px;
`
const Container = styled.div`
  & > div {
    height: 100%;
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
  transition: all ease-in-out 0.5s 0s;
  &:hover {
  }
`

export default Header
