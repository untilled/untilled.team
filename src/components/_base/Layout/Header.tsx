import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/_shared/Logo'
import Button from 'components/_shared/Button'

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
  const router = useRouter()

  return (
    <Wrapper className="">
      <Container className="container">
        <Logo />
        <Right>
          {menus.map((menu) => (
            <Link key={menu.id} href={menu.href}>
              <a>
                <Menu selected={menu.href === router.asPath}>{menu.name}</Menu>
              </a>
            </Link>
          ))}
          <Button>recruit</Button>
        </Right>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 20;
  position: fixed;
  width: 100%;
  height: 100px;
  padding: 10px;
`
const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

type MenuProps = {
  selected: boolean
}

const Menu = styled.div<MenuProps>`
  /* font-weight: ${(props) => (props.selected ? '600' : '400')}; */
  border-bottom: ${(props) =>
    props.selected ? '2px solid white' : '2px solid none'};

  &:hover {
  }
`

export default Header
