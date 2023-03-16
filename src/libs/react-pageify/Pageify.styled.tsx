import styled from '@emotion/styled'

const StyledWrapper = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`

export default StyledWrapper
