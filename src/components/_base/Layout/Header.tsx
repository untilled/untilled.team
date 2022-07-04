import { Wrapper, Container, Right, Menu } from './Header.style'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/_shared/Logo'
import useMouseHover from 'hooks/useMouseHover'
import { menus } from 'constants/menus'

const Header: React.FC = () => {
  const hoverHandlers = useMouseHover()
  const router = useRouter()

  return (
    <Wrapper>
      <Container className="container">
        <Logo color="white" />
        <Right>
          {menus.map((menu, idx) => (
            <Link key={idx} href={menu.href}>
              <a>
                <Menu selected={menu.href === router.asPath} {...hoverHandlers}>
                  {menu.name}
                </Menu>
              </a>
            </Link>
          ))}
        </Right>
      </Container>
    </Wrapper>
  )
}

export default Header
