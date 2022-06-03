import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/_shared/Logo'
import { mobile } from 'styles/media'
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import { home } from 'states'
import { menus } from 'libs/data'
import useMobile from 'hooks/useMobile'

type Props = {}

const Header = ({}: Props) => {
  const [page, setPage] = useRecoilState(home)
  const [menuOpened, setMenuOpened] = useState(false)
  const [isMobile] = useMobile()
  const router = useRouter()

  const handleMenuOpened = (opened: boolean) => {
    setMenuOpened(opened)
  }

  useEffect(() => {
    if (isMobile === false) {
      setMenuOpened(false)
    }
  }, [isMobile])

  return (
    <>
      <Wrapper>
        <Container className="container">
          <Mobile>
            <Logo />
            <div>
              <MenuOpenBtn onClick={() => handleMenuOpened(true)}>
                <AiOutlineMenu />
              </MenuOpenBtn>
            </div>
          </Mobile>
          <Desktop>
            <Logo color="white" />
            <Right>
              {menus.map((menu) => (
                <Link key={menu.id} href={'/'}>
                  <a>
                    <Menu selected={menu.href === router.asPath}>
                      {menu.name}
                    </Menu>
                  </a>
                </Link>
              ))}
            </Right>
          </Desktop>
        </Container>
      </Wrapper>
      {menuOpened && (
        <MobileMenuWrapper>
          {menus.map((menu) => (
            <Link key={menu.id} href={'/'}>
              <a>
                <MobileMenu selected={menu.href === router.asPath}>
                  {menu.name}
                </MobileMenu>
              </a>
            </Link>
          ))}
          <MenuCloseButton onClick={() => handleMenuOpened(false)}>
            <AiOutlineCloseCircle />
          </MenuCloseButton>
        </MobileMenuWrapper>
      )}
    </>
  )
}
const MobileMenu = styled.div<MenuProps>`
  font-family: 'Prompt', sans-serif;
  transition: all ease-in-out 0.5s 0s;
  font-weight: 500;
  font-style: italic;
  font-size: 3rem;
  color: ${(props) =>
    props.selected ? `rgba(255, 255, 255, 1)` : `rgba(255, 255, 255, 0.5)`};
`

const MenuOpenBtn = styled.div`
  svg {
    font-size: 1.5rem;
  }
`

const MenuCloseButton = styled.div`
  margin-top: 40px;
  svg {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.5);
  }
`

const Wrapper = styled.div`
  user-select: none;
  z-index: 20;
  position: fixed;
  width: 100%;
  padding: 10px;
`
const Container = styled.div`
  & > div {
    align-items: center;
    justify-content: space-between;
  }
`

const Mobile = styled.div`
  display: none;
  ${mobile} {
    display: flex;
  }
`

const MobileMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
