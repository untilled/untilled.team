import React, { useEffect, useState } from 'react'
import {
  Wrapper,
  Container,
  MobileMenuWrapper,
  MobileMenu,
  MenuOpenBtn,
  MenuCloseButton,
} from './MobilleHeader.style'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/_shared/Logo'
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
      <Wrapper>
        <Container className="container">
          {menuOpened === false && (
            <>
              <Logo />
              <div>
                <MenuOpenBtn onClick={() => handleMenuOpened(true)}>
                  <AiOutlineMenu />
                </MenuOpenBtn>
              </div>
            </>
          )}
          {menuOpened === true && (
            <>
              <div></div>
              <div>
                <MenuOpenBtn onClick={() => handleMenuOpened(false)}>
                  <AiOutlineClose />
                </MenuOpenBtn>
              </div>
            </>
          )}
        </Container>
      </Wrapper>
      {/* {menuOpened && ( */}
      <MobileMenuWrapper opened={menuOpened}>
        {menus.map((menu, idx) => (
          <Link key={idx} href={menu.href}>
            <a>
              <MobileMenu selected={menu.href === router.asPath}>
                {menu.name}
              </MobileMenu>
            </a>
          </Link>
        ))}
      </MobileMenuWrapper>
      {/* )} */}
    </>
  )
}

export default MobileHeader
