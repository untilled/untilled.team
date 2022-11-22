import * as Styled from './index.styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from 'components/Logo'
import useMouseHover from 'hooks/useMouseHover'
import { menus } from 'constants/menus'

const Header: React.FC = () => {
  const hoverHandlers = useMouseHover()
  const router = useRouter()

  return (
    <Styled.Wrapper>
      <Styled.Container className="container">
        <Logo color="white" />
        <Styled.Right>
          {menus.map((menu, idx) => (
            (<Link key={idx} href={menu.href}>

              <Styled.Menu
                selected={menu.href === router.asPath}
                {...hoverHandlers}
              >
                {menu.name}
              </Styled.Menu>

            </Link>)
          ))}
        </Styled.Right>
      </Styled.Container>
    </Styled.Wrapper>
  );
}

export default Header
