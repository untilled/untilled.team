import * as styled from './styled'
import { members } from 'libs/data'

type Props = {}

const Members = (props: Props) => {
  return (
    <styled.Wrapper>
      <styled.Title className="container">Members</styled.Title>
      <styled.MenuList>
        <styled.Menu selected>All</styled.Menu>
        <styled.Menu>Developer</styled.Menu>
        <styled.Menu>Designer</styled.Menu>
      </styled.MenuList>
      <styled.MemberList className="container">
        {members.map((member, idx) => (
          <styled.Member key={idx}></styled.Member>
        ))}
      </styled.MemberList>
    </styled.Wrapper>
  )
}

export default Members
