import styled from '@emotion/styled'
import { menus } from 'libs/data'
import Link from 'next/link'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai'
import Logo from '../Logo'

type Props = {}

const Footer = (props: Props) => {
  {
    /* <div>Copyright ©2022 All rights reserved.</div> */
  }
  return (
    <Wrapper>
      <Content className="container">
        <Top>
          <TopLeft>
            <Logo color="gray" />
            <Menus>
              <nav>
                <div>About</div>
                <div>Projects</div>
                <div>Members</div>
                <div>Contacts</div>
              </nav>
              <div>Copyright ©2022. Untilled All rights reserved.</div>
            </Menus>
          </TopLeft>
          <TopRight>
            <a
              href="https://www.instagram.com/more_dev_min"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>

            <a
              href="https://github.com/morethanmin"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <div>
              <AiFillFacebook />
            </div>
            <a
              href="https://www.linkedin.com/in/morethanmin"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </TopRight>
        </Top>
        <Mid></Mid>
        <Bottom>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            perferendis deleniti blanditiis recusandae soluta ea.
          </div>
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
          </div>
        </Bottom>
      </Content>
    </Wrapper>
  )
}
const Mid = styled.div`
  width: 100%;
  margin: 10px 0;
  border-top: 1px solid #343a40;
`

const Bottom = styled.div`
  font-family: 'Prompt', sans-serif;
  font-size: 0.8rem;
  padding: 10px 10px;
  color: #868e96;
  display: flex;
  justify-content: space-between;
`

const TopRight = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 10px;
  svg {
    font-size: 1.8rem;
  }
`

const TopLeft = styled.div`
  display: flex;
  gap: 80px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Wrapper = styled.div`
  height: 200px;
  background-color: #212529;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  padding: 45px 5px 30px 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Menus = styled.div`
  font-family: 'Prompt', sans-serif;

  nav {
    font-size: 0.9rem;
    display: flex;
    gap: 15px;
  }
  & > div {
    font-size: 0.8rem;
    color: #868e96;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  font-size: 0.9rem;
`

const Select = styled.select`
  border: none;
  background: none;
  background-color: white;
  border-radius: 12px;
  padding: 5px 15px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
`

export default Footer
