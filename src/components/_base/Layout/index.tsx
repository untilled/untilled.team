import * as styled from './index.styled'
import Cursor from 'components/_shared/Cursor'
import Footer from 'components/_shared/Footer'
import useMobile from 'hooks/useMobile'
import { useRouter } from 'next/router'
import { CSSProperties, useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { isVisibleFooterState, pageState } from 'states'
import Header from './Header'
import MobileHeader from './MobileHeader'
import Toolbar from 'components/_shared/Toolbar'
import { BsFillMoonFill } from 'react-icons/bs'
import useMouseHover from 'hooks/useMouseHover'
import { Transition, TransitionGroup } from 'react-transition-group'
import { css, Interpolation, Theme } from '@emotion/react'
import useVisibleElement from 'hooks/useVisibleElement'

type getTransitionStyles = {
  entering: Interpolation<Theme>
  entered: Interpolation<Theme>
  exiting: Interpolation<Theme>
  exited: Interpolation<Theme>
}

const TIMEOUT = 300
const getTransitionWrapperCss: getTransitionStyles = {
  entering: css`
    opacity: 0;
  `,
  entered: css`
    opacity: 1;
  `,
  exiting: css`
    opacity: 0;
  `,
  exited: css`
    opacity: 0;
  `,
}

const getTransitionHeaderCss: getTransitionStyles = {
  entering: css`
    opacity: 0;
  `,
  entered: css`
    opacity: 0;
  `,
  exiting: css`
    transform: translate(0px, 300px);
  `,
  exited: css`
    opacity: 0;
  `,
}

type Props = {
  children: any
}

const Layout = ({ children }: Props) => {
  const isMobile = useMobile()
  const isVisibleFooter = useRecoilValue(isVisibleFooterState)
  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const page = useRecoilValue(pageState)
  const hoverHandlers = useMouseHover()
  const isHome = page !== null

  const visible =
    (page === null && !isVisibleFooter) || (page !== null && page !== 6)

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo(0, 0)
    }
  }, [router])

  return (
    <>
      {/* <TransitionGroup>
        <Transition
          key={router.pathname}
          timeout={{
            enter: TIMEOUT,
            exit: TIMEOUT,
          }}
        >
          {(status: 'entering' | 'entered' | 'exiting' | 'exited') => <></>}
        </Transition>
      </TransitionGroup> */}
      <styled.Wrapper ref={wrapperRef} isScrollHidden={isHome && !isMobile}>
        {isMobile === false && <Header />}
        {isMobile === true && <MobileHeader />}
        {children}
        <Toolbar direction="left">
          <div></div>
          <div></div>
          <styled.ShareBox visible={visible}>
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
