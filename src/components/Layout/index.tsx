import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'

import { BsFillMoonFill } from 'react-icons/bs'

import { CursorifyProvider } from '@cursorify/react'
import Toolbar from 'components/Toolbar'
import useMediaQuery from 'hooks/useMediaQuery'
import { useStore } from 'stores'
import { breakpoints } from 'styles/media'
import Header from './Header'

import * as Styled from './index.styled'
import MobileHeader from './MobileHeader'
interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isVisibleFooterState = useStore((store) => store.isVisibleFooterState)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[0]}px)`)

  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)

  //페이지가 변경될 경우 스크롤 이벤트 발생
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo(0, 0)
    }
  }, [router])

  return (
    <CursorifyProvider enabled breakpoint={breakpoints[0]}>
      <Styled.Wrapper ref={wrapperRef}>
        {isMobile === false && <Header />}
        {isMobile === true && <MobileHeader />}
        {children}
        <Toolbar direction="left">
          <Styled.ShareBox visible={!isVisibleFooterState}>
            <Styled.ShareBtn>
              <BsFillMoonFill />
            </Styled.ShareBtn>
          </Styled.ShareBox>
        </Toolbar>
      </Styled.Wrapper>
    </CursorifyProvider>
  )
}

export default Layout
