import React, { useEffect, useState } from 'react'
import * as Styled from './index.styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/Logo'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { menus } from 'constants/menus'

const MobileHeader: React.FC = () => {
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
      <Styled.Wrapper>
        <Styled.Container className="container">
          {menuOpened === false && (
            <>
              <Logo />
              <div>
                <Styled.MenuOpenBtn onClick={() => handleMenuOpened(true)}>
                  <AiOutlineMenu />
                </Styled.MenuOpenBtn>
              </div>
            </>
          )}
          {menuOpened === true && (
            <>
              <div></div>
              <div>
                <Styled.MenuOpenBtn onClick={() => handleMenuOpened(false)}>
                  <AiOutlineClose />
                </Styled.MenuOpenBtn>
              </div>
            </>
          )}
        </Styled.Container>
      </Styled.Wrapper>
      {/* {menuOpened && ( */}
      <Styled.MobileMenuWrapper opened={menuOpened}>
        {menus.map((menu, idx) => (
          <Link key={idx} href={menu.href}>
            <Styled.MobileMenu selected={menu.href === router.asPath}>
              {menu.name}
            </Styled.MobileMenu>
          </Link>
        ))}
      </Styled.MobileMenuWrapper>
      {/* )} */}
    </>
  )
}

export default MobileHeader
