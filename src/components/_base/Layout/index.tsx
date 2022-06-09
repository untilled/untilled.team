import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Cursor from 'components/_shared/Cursor'
import Footer from 'components/_shared/Footer'
import useMobile from 'hooks/useMobile'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { pageState } from 'states'
import { mobile } from 'styles/media'
import Header from './Header'
import MobileHeader from './MobileHeader'

type Props = {
  children: any
}

const Layout = ({ children }: Props) => {
  const isMobile = useMobile()
  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isHome = useRecoilValue(pageState) !== null

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo(0, 0)
    }
  }, [router])

  return (
    <>
      <Wrapper ref={wrapperRef} isScrollHidden={isHome && !isMobile}>
        {!isMobile && <Header />}
        {isMobile && <MobileHeader />}
        {children}
        {router.route !== '/' && <Footer />}
      </Wrapper>
      {!isMobile && <Cursor />}
    </>
  )
}

type Wrapper = {
  isScrollHidden: boolean
}

const Wrapper = styled.div<Wrapper>`
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    props.isScrollHidden &&
    css`
      overflow: hidden;
    `}
  ${mobile} {
  }
`
export default Layout
