import React, { useEffect, useState } from 'react'
import * as styled from './MobilleHeader.styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/_shared/Logo'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { menus } from 'libs/data'

type Props = {}

const MobileHeader = ({}: Props) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const router = useRouter()

  const handleMenuOpened = (opened: boolean) => {
    setMenuOpened(opened)
  }

  useEffect(() => {
    setMenuOpened(false)
  }, [router])

  return (
    <>
      <styled.Wrapper>
        <styled.Container className="container">
          {menuOpened === false && (
            <>
              <Logo />
              <div>
                <styled.MenuOpenBtn onClick={() => handleMenuOpened(true)}>
                  <AiOutlineMenu />
                </styled.MenuOpenBtn>
              </div>
            </>
          )}
          {menuOpened === true && (
            <>
              <div></div>
              <div>
                <styled.MenuOpenBtn onClick={() => handleMenuOpened(false)}>
                  <AiOutlineClose />
                </styled.MenuOpenBtn>
              </div>
            </>
          )}
        </styled.Container>
      </styled.Wrapper>
      {menuOpened && (
        <styled.MobileMenuWrapper>
          {menus.map((menu, idx) => (
            <Link key={idx} href={menu.href}>
              <a>
                <styled.MobileMenu selected={menu.href === router.asPath}>
                  {menu.name}
                </styled.MobileMenu>
              </a>
            </Link>
          ))}
        </styled.MobileMenuWrapper>
      )}
    </>
  )
}

export default MobileHeader
