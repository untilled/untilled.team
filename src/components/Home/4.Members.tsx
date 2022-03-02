import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

type Props = {}
type member = {
  name: string
}

//27
const members = [
  {
    name: 'members1',
  },
  {
    name: 'members2',
  },
  {
    name: 'members3',
  },
  {
    name: 'members4',
  },
  {
    name: 'members5',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members3',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
  {
    name: 'members',
  },
]

const Page = (props: Props) => {
  const [resizedMembers, setResizedMembers] = useState<Array<Array<member>>>([])
  const handleResize = () => {
    const resizedMembers: Array<Array<member>> = new Array(6)
    let memberIdx = 0
    for (let i = 0; i < resizedMembers.length; i++) {
      resizedMembers[i] = []
    }

    for (let i = 0; i < resizedMembers.length; i++) {
      //홀수
      const isOdd = (i + 1) % 2 === 1
      if (isOdd)
        for (let j = 0; j < 5; j++) {
          resizedMembers[i].push(
            members[memberIdx] ? members[memberIdx] : { name: '' }
          )
          memberIdx = memberIdx + 1
        }
      else
        for (let j = 0; j < 4; j++) {
          resizedMembers[i].push(
            members[memberIdx] ? members[memberIdx] : { name: '' }
          )
          memberIdx = memberIdx + 1
        }
    }
    setResizedMembers(resizedMembers)
  }

  useEffect(() => {
    handleResize()
  }, [])
  console.log(resizedMembers)

  return (
    <Wrapper className="container">
      {resizedMembers.map((memberList, idx) => (
        <Row key={idx} isOdd={memberList.length % 2 === 1}>
          {memberList.map((member, idx) => (
            <Member key={idx}>{member.name}</Member>
          ))}
        </Row>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
`

type Row = { isOdd: boolean }

const Row = styled.div<Row>`
  flex-grow: 1;
  display: flex;
  padding: 0px ${({ isOdd }) => (isOdd ? '0px' : '120px')};
  width: 100%;
  justify-content: space-between;
`

const Member = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: white;
`

export default Page
