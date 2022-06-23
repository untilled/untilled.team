import { Wrapper, Container, Right, Menu } from './Header.style'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/_shared/Logo'
import { menus } from 'libs/data'
import useMouseHover from 'hooks/useMouseHover'

type Props = {}

// header 올라갔다 내려오도록
const Header = ({}: Props) => {
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
