import { useEffect, useState } from 'react'
import * as styled from './MobilleHeader.styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/_shared/Logo'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useRecoilValue } from 'recoil'
import { isLayoutClosedState } from 'states'
import { menus } from 'libs/data'
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

  return (
    <>
      <styled.Wrapper isColsed={isLayoutClosed}>
        <styled.Container className="container">
          <Logo />
          <div>
            <styled.MenuOpenBtn onClick={() => handleMenuOpened(true)}>
              <AiOutlineMenu />
            </styled.MenuOpenBtn>
          </div>
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
          <styled.MenuCloseButton onClick={() => handleMenuOpened(false)}>
            <AiOutlineClose />
          </styled.MenuCloseButton>
        </styled.MobileMenuWrapper>
      )}
    </>
  )
}

export default MobileHeader
