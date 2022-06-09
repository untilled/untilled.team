import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/_shared/Logo'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useRecoilValue } from 'recoil'
import { isLayoutClosedState } from 'states'
import { menus } from 'libs/data'
import { css } from '@emotion/react'
import useMobile from 'hooks/useMobile'

type Props = {}

const MobileHeader = ({}: Props) => {
  const isMobile = useMobile()
  const [menuOpened, setMenuOpened] = useState(false)
  const isLayoutClosed = useRecoilValue(isLayoutClosedState)
  const router = useRouter()

  const handleMenuOpened = (opened: boolean) => {
    setMenuOpened(opened)
  }

  useEffect(() => {
    setMenuOpened(false)
  }, [router])

  // useEffect(() => {
  //   if (!isMobile) {
  //     setMenuOpened(false)
  //   }
  // }, [isMobile])

  return (
    <>
      <Wrapper isColsed={isLayoutClosed}>
        <Container className="container">
          <Logo />
          <div>
            <MenuOpenBtn onClick={() => handleMenuOpened(true)}>
              <AiOutlineMenu />
            </MenuOpenBtn>
          </div>
        </Container>
      </Wrapper>
      {menuOpened && (
        <MobileMenuWrapper>
          {menus.map((menu, idx) => (
            <Link key={idx} href={menu.href}>
              <a>
                <MobileMenu selected={menu.href === router.asPath}>
                  {menu.name}
                </MobileMenu>
              </a>
            </Link>
          ))}
          <MenuCloseButton onClick={() => handleMenuOpened(false)}>
            <AiOutlineClose />
          </MenuCloseButton>
        </MobileMenuWrapper>
      )}
    </>
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

const MobileMenuWrapper = styled.div`
  position: fixed;
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
  overflow: hidden;
`

type MenuProps = {
  selected: boolean
}

const MobileMenu = styled.div<MenuProps>`
  font-family: 'Prompt', sans-serif;
  transition: all ease-in-out 0.5s 0s;
  font-weight: 500;
  font-style: italic;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.5);
  ${(props) =>
    props.selected &&
    css`
      color: rgba(255, 255, 255, 1);
    `};
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

export default MobileHeader
