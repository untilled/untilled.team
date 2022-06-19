import * as styled from './Projects.styled'
import { projects } from 'libs/data'
import { useRecoilValue } from 'recoil'
import { isMobileState } from 'states'
import TabMenu from 'components/_shared/TabMenu'
import { useState } from 'react'
type Props = {}

const Projects = (props: Props) => {
  const isMobile = useRecoilValue(isMobileState)

  return (
    <styled.Wrapper>
      <styled.Title className="container">
        <h1>지금까지 우리가 {isMobile && <br />} 만들어온 것들</h1>
        <h3>
          발전적인 사람으로부터 발전적인 {isMobile && <br />} 서비스가 나온다고
          믿고 있어요.
        </h3>
      </styled.Title>
      <styled.List>
        {/* {projects.map((project) => (
          <styled.Project key={project.id}></styled.Project>
        ))} */}
        Empty!
      </styled.List>
      <styled.BtnBox>
        <styled.MoreButton href="/projects">더 알아보기</styled.MoreButton>
      </styled.BtnBox>
    </styled.Wrapper>
  )
}

export default Projects
