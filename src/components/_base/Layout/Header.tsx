import * as styled from './Header.styled'
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
    <styled.Wrapper>
      <styled.Container className="container">
        <Logo color="white" />
        <styled.Right>
          {menus.map((menu, idx) => (
            <Link key={idx} href={menu.href}>
              <a>
                <styled.Menu
                  selected={menu.href === router.asPath}
                  {...hoverHandlers}
                >
                  {menu.name}
                </styled.Menu>
              </a>
            </Link>
          ))}
        </styled.Right>
      </styled.Container>
    </styled.Wrapper>
  )
}

export default Header
