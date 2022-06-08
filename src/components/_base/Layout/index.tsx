import styled from '@emotion/styled'
import Cursor from 'components/_shared/Cursor'
import Footer from 'components/_shared/Footer'
import useMobile from 'hooks/useMobile'
import { useRouter } from 'next/router'
import { mobile } from 'styles/media'
import Header from './Header'
import MobileHeader from './MobileHeader'

type Props = {
  children: any
}

const Layout = ({ children }: Props) => {
  const isMobile = useMobile()
  const router = useRouter()
  return (
    <>
      <Wrapper>
        {!isMobile && <Header />}
        {isMobile && <MobileHeader />}
        {children}
        {router.route !== '/' && <Footer />}
        {!isMobile && <Cursor />}
      </Wrapper>
      {/* <TempMobile>
        Currently mobile is not supported.
        <Logo />
      </TempMobile> */}
    </>
  )
}

const Wrapper = styled.div`
  position: relative;
  /* display: grid; */
  /* grid-template-rows: minmax(0, 1fr) auto; */
  overflow: hidden;
  height: fit-content;
  ${mobile} {
    /* display: none; */
  }
`

const TempMobile = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  font-weight: 200;
  ${mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`
export default Layout
