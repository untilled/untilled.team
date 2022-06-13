import * as styled from './Archievement.styled'

type Props = {}

//모바일인 경우 슬라이드로 전환되도록 수정
//멤버수, 프로젝트수, 시작한지
const Archivement = (props: Props) => {
  return (
    <styled.Wrapper>
      <styled.Title>
        <h1>함께 성장해온 언틸드📈</h1>
        <h3>지금도 팀원과 함께 끊임없이 성장해 나가고 있어요.</h3>
      </styled.Title>
      <styled.CardWrapper className="container">
        <styled.Card></styled.Card>
        <styled.Card></styled.Card>
        <styled.Card></styled.Card>
        <styled.Card></styled.Card>
        <styled.Card></styled.Card>
        <styled.Card></styled.Card>
      </styled.CardWrapper>
    </styled.Wrapper>
  )
}

export default Archivement
