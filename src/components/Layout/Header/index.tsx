import Logo from 'components/Logo'
import { menus } from 'constants/menus'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Styled from './index.styled'

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <Styled.Wrapper>
      <Styled.Container className="container">
        <Logo color="white" />
        <Styled.Right>
          {menus.map((menu, idx) => (
            <Link key={idx} href={menu.href}>
              <Styled.Menu
                style={{ cursor: 'pointer' }}
                selected={menu.href === router.asPath}
              >
                {menu.name}
              </Styled.Menu>
            </Link>
          ))}
        </Styled.Right>
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default Header
