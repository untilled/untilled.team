import styled from '@emotion/styled'
import Footer from 'components/_shared/Footer'
import { useRouter } from 'next/router'
import Header from './Header'

type Props = {
  children: any
}

const Layout = ({ children }: Props) => {
  const router = useRouter()
  return (
    <Wrapper>
      <Header />
      {children}
      {router.route !== '/' && <Footer />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  min-height: 100vh;
`
export default Layout
