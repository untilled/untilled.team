import styled from '@emotion/styled'
import Footer from 'components/_shared/Footer'
import Logo from 'components/_shared/Logo'
import { useRouter } from 'next/router'
import { mobile } from 'styles/media'
import Header from './Header'

type Props = {
  children: any
}

const Layout = ({ children }: Props) => {
  const router = useRouter()
  return (
    <>
      <Wrapper>
        <Header />
        {children}
        {router.route !== '/' && <Footer />}
      </Wrapper>
      <TempMobile>
        Currently mobile is not supported.
        <Logo />
      </TempMobile>
    </>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  min-height: 100vh;
  ${mobile} {
    display: none;
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
