import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .content {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
  }
`

const Title = styled.h1`
  font-family: 'Prompt', sans-serif;
  font-style: italic;
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

const MemberWrapper = styled.div`
  width: 300px;
  height: 400px;
  border: 2px solid #212529;
  border-radius: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  ${mobile} {
    width: 100%;
  }
`

const MemberImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #212529; */
`

const MemberName = styled.div`
  font-family: 'Prompt', sans-serif;
  font-weight: bold;
  font-size: 25px;
  font-style: italic;
  padding-bottom: 20px;
`
const MemberDesc = styled.div`
  font-family: 'Prompt', sans-serif;
  font-style: italic;
  color: #ced4da;
`

export {
  Wrapper,
  Title,
  MemberList,
  MemberWrapper,
  MemberImage,
  MemberName,
  MemberDesc,
}
