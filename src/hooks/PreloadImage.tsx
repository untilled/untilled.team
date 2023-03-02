import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { memberImages } from "containers/home/menus/Members"
import { useEffect } from "react"

type Props = {}

const PreloadImage :React.FC<Props> = () => {
  const contentString = memberImages.reduce(
    (prevVal: string[], currVal): string[] => {
      return [...prevVal, ...currVal]
    },
    []
  ).map(item=> `url(${item})`).join(' ')

  

  return <StyledWrapper css={css`
    content: ${contentString};
  `} />
}

export default PreloadImage

const StyledWrapper = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  z-index: -1;
`