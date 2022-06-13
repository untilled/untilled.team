import * as styled from './index.styled'
import Cursor from 'components/_shared/Cursor'
import Footer from 'components/_shared/Footer'
import useMobile from 'hooks/useMobile'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { pageState } from 'states'
import Header from './Header'
import MobileHeader from './MobileHeader'
import Toolbar from 'components/_shared/Toolbar'
import { BsFillMoonFill } from 'react-icons/bs'
import useMouseHover from 'hooks/useMouseHover'

type Props = {
  children: any
}

const Layout = ({ children }: Props) => {
  const isMobile = useMobile()
  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isHome = useRecoilValue(pageState) !== null
  const hoverHandlers = useMouseHover()

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo(0, 0)
    }
  }, [router])

  return (
    <>
      <styled.Wrapper ref={wrapperRef} isScrollHidden={isHome && !isMobile}>
        {isMobile === false && <Header />}
        {isMobile === true && <MobileHeader />}
        {children}
        <Toolbar direction="left">
          <div></div>
          <div></div>
          <styled.ShareBox>
            <styled.ShareBtn {...hoverHandlers}>
              <BsFillMoonFill />
            </styled.ShareBtn>
            <styled.ShareMessage
              href="https://github.com/untilled/untilled"
              target="_blank"
              {...hoverHandlers}
            >
              Please visit and star this repository! 😎
            </styled.ShareMessage>
          </styled.ShareBox>
        </Toolbar>
        {router.route !== '/' && <Footer />}
      </styled.Wrapper>
      {isMobile === false && <Cursor />}
    </>
  )
}

export default Layout
