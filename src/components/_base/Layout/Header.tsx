import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/_shared/Logo'
import { useRecoilValue } from 'recoil'
import { isLayoutClosedState } from 'states'
import { menus } from 'libs/data'
import { css } from '@emotion/react'

type Props = {}

const Header = ({}: Props) => {
  const isLayoutClosed = useRecoilValue(isLayoutClosedState)
  const router = useRouter()

  return (
    <Wrapper isColsed={isLayoutClosed}>
      <Container className="container">
        <Logo color="white" />
        <Right>
          {menus.map((menu, idx) => (
            <Link key={idx} href={menu.href}>
              <a>
                <Menu selected={menu.href === router.asPath}>{menu.name}</Menu>
              </a>
            </Link>
          ))}
        </Right>
      </Container>
    </Wrapper>
  )
}

type Wrapper = {
  isColsed: boolean
}

const Wrapper = styled.div<Wrapper>`
  user-select: none;
  z-index: 20;
  position: fixed;
  width: 100%;
  padding: 10px;
  transition: transform ease-in-out 0.3s;
  ${(props) =>
    props.isColsed &&
    css`
      transform: translate(0px, -100px);
    `};
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
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
const Menu = styled.div<MenuProps>`
  font-family: 'Prompt', sans-serif;
  font-weight: 200;
  padding-bottom: 2px;
  ${(props) =>
    props.selected &&
    css`
      font-weight: 400;
      border-bottom: 2px solid white;
      padding-bottom: 0px;
    `}
  &:hover {
  }
`

export default Header
