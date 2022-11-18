import styled from '@emotion/styled'
import Gradient from 'components/_common/Gradient'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
  .box {
    height: 600px;
    &.grey {
      background-color: #212529;
    }
    &.intro {
      padding: 20px;
      position: relative;
      display: flex;
      align-items: center;
    }
    &.channel {
      padding: 20px;
      text-align: center;
    }
  }
  .channel {
    height: 600px;
  }
`

const StyledGradient = styled(Gradient)`
  right: 0px;
  bottom: 0px;
`

const Title = styled.h1`
  /* z-index: 1; */
  font-weight: 600;
  font-size: 3rem;
  width: 100%;
  margin-bottom: 80px;
`

export { Wrapper, StyledGradient, Title }
