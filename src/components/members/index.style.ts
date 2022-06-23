import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: 'Prompt', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
`
const MemberList = styled.div`
  display: flex;
  width: 100%;
  max-width: 990px;
  gap: 40px;
  flex-wrap: wrap;
  ${mobile} {
    justify-content: center;
  }
`

const Member = styled.div`
  width: 300px;
  height: 300px;
  background-color: #212529;
  border-radius: 15px;
  ${mobile} {
    width: 100%;
  }
`

export { Wrapper, Title, MemberList, Member }
