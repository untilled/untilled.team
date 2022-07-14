import styled from '@emotion/styled'
import Gradient from 'components/_shared/Gradient'
import { mobile } from 'styles/media'

const Wrapper = styled.div`
  .intro {
    position: relative;
    height: 600px;
    padding: 100px 0;
    display: flex;
    align-items: center;
  }
  .desc {
    height: 100vh;
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
