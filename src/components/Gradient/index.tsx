import styled from '@emotion/styled'
import React from 'react'
import { mobile } from 'styles/media'

interface TGradientProps {
  className?: string
}

const Gradient: React.FC<TGradientProps> = ({ className }) => {
  return <StyledWrapper className={className}></StyledWrapper>
}

const StyledWrapper = styled.div`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  position: absolute;
  width: 600px;
  height: 600px;
  filter: blur(calc(600px / 5));
  background-image: linear-gradient(#364fc7, #862e9c);
  animation: rotate 15s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

  ${mobile} {
    width: 250px;
    height: 250px;
    filter: blur(calc(250px / 5));
  }
`

export default Gradient
