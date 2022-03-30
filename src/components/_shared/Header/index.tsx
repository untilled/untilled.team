import styled from '@emotion/styled'
import React from 'react'

type Props = {
  height: number
  title: string
  color?: string
}

const Header = ({ title, height, color = '#343a41' }: Props) => {
  return (
    <Wrapper height={height} color={color}>
      <Left>{title}</Left>
      <Right>
        <Button color="#fd6359" />
        <Button color="#ffb727" />
        <Button color="#25c83b" />
      </Right>
    </Wrapper>
  )
}

type Wrapper = {
  height: number
  color: string
}

const Wrapper = styled.div<Wrapper>`
  background-color: ${({ color }) => color};
  width: 100%;
  height: ${({ height }) => height}px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`

const Left = styled.div`
  color: white;
`

const Right = styled.div`
  display: flex;
  height: 100%;
  z-index: 15;
  align-items: center;
  gap: 10px;
`

type Button = {
  color: string
}

const Button = styled.div<Button>`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${({ color }) => color};
`

export default Header
