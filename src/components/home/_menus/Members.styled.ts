import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import { mobile } from 'styles/media'

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const MoreButton = styled(Button)`
  padding: 15px 90px;
`

export const Wrapper = styled.div`
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

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
    font-size: 2.5rem;
  }

  h3 {
    color: #ced4da;
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
export const MemberListWrapper = styled.div`
  overflow: hidden;
  /* height: auto; */
  flex-shrink: 0;
`
export const MemberList = styled.div`
  width: 100vw;
  overflow: visible;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  &:first-of-type,
  &:last-child {
    transform: translate(-80px, 0px);
  }
`

type Member = {
  images: string[]
}

export const Member = styled.div<Member>`
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #212529;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url(${({ images }) => images[0]});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all ease 0.2s 0s;
  &:hover {
    background-image: url(${({ images }) => images[1]});
  }
  ${mobile} {
    width: 100px;
    height: 100px;
  }
`
