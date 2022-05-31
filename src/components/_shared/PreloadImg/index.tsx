import styled from '@emotion/styled'
import imageLoader from 'libs/loader'
import Image from 'next/image'

type Props = {
  data: Array<string>
}

// 이미지를 미리 로드하기 위함
function PreloadImg({ data }: Props) {
  return (
    <Wrapper>
      {data.map((el, idx) => (
        <Image
          key={idx}
          src={el}
          loader={imageLoader}
          width={1}
          height={1}
          alt=""
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  left: -9999px;
  top: -9999px;
  height: 1px;
  width: 1px;
`

export default PreloadImg
