import * as styled from './index.style'
import { menus } from 'libs/data'
import Link from 'next/link'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineInstagram,
} from 'react-icons/ai'
import Logo from '../Logo'
import useHandleVisibleFooter from 'hooks/useHandleVisibleFooter'

type Props = {}
const Footer = ({}: Props) => {
  const elementRef = useHandleVisibleFooter()

  {
    /* <div>Copyright ©2022 All rights reserved.</div> */
  }
  return (
    <styled.Wrapper ref={elementRef}>
      <styled.Content className="container">
        <styled.Top>
          <styled.TopLeft>
            <Logo color="gray" />
            <styled.Menus>
              {menus.map((menu, idx) => (
                <Link key={idx} href={menu.href}>
                  <a>
                    <div>{menu.name}</div>
                  </a>
                </Link>
              ))}
              {/* <div>
                Untilled is the development team. We are developing the worlds
                by making products.
              </div> */}
            </styled.Menus>
          </styled.TopLeft>
          <styled.TopRight>
            <a
              href="https://github.com/morethanmin"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.instagram.com/more_dev_min"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/morethanmin"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <div>
              <AiFillFacebook />
            </div>
          </styled.TopRight>
        </styled.Top>
        <styled.Mid></styled.Mid>
        <styled.Bottom>
          <div> Copyright ©2022. Untilled All rights reserved.</div>
          <div>
            Powerd by{' '}
            <span>
              <a
                href="https://morethanmin.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                morethanmin
              </a>
            </span>
            {' | '}
            <span>Korean</span>
          </div>
        </styled.Bottom>
      </styled.Content>
    </styled.Wrapper>
  )
}

export default Footer
