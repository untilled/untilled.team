import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  overflow: scroll;
  padding-top: 80px;
  gap: 45px;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  & > *:last-child {
    margin-bottom: 45px;
  }

  ${mobile} {
    height: fit-content;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
    font-size: 2.5rem;
    text-align: center;
  }

  h3 {
    color: #ced4da;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
  }

  ${mobile} {
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`
const MemberListWrapper = styled.div`
  overflow: hidden;
  /* height: auto; */
  flex-shrink: 0;
`
const MemberList = styled.div`
  width: 100vw;
  overflow: visible;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  &:first-of-type,
  &:last-child {
    transform: translate(-80px, 0px);
  }
  & > * {
    border-radius: 50%;
    background-color: #212529;
  }
`
const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const MoreButton = styled(Button)`
  padding: 15px 90px;
  ${mobile} {
    padding: 10px 90px;
  }
`

export { Wrapper, Title, MemberListWrapper, MemberList, BtnBox, MoreButton }
