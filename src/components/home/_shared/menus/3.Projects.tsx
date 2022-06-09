import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import { projects } from 'libs/data'
import { mobile } from 'styles/media'
type Props = {}

const Projects = (props: Props) => {
  return (
    <Wrapper>
      <Title className="container">
        <h1>지금까지 우리가 만들어온 것들🌆</h1>
        <h3>발전적인 사람으로부터 발전적인 서비스가 나온다고 믿고 있어요.</h3>
        {/*   */}
      </Title>
      <List>
        {projects.map((project) => (
          <Project key={project.id}></Project>
        ))}
      </List>
      <BtnBox>
        <MoreButton href="/projects">더 알아보기</MoreButton>
      </BtnBox>
    </Wrapper>
  )
}

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const MoreButton = styled(Button)`
  padding: 15px 90px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  padding-bottom: 40px;

  ${mobile} {
    height: fit-content;
    padding-bottom: 0;
  }
`

const Title = styled.div`
  width: 100%;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
    font-size: 2.5rem;
  }

  h3 {
    color: #ced4da;
    font-weight: 500;
    font-size: 1.2rem;
  }

  ${mobile} {
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`

const List = styled.div`
  width: 100%;
  margin: 45px 0;
  padding: 45px 0;
  display: flex;
  align-items: center;
  gap: 45px;
  overflow: hidden;
  background-color: #212529;
`

const Project = styled.div`
  background-color: #212529;
  width: 300px;
  flex-shrink: 0;
  height: 400px;

  ${mobile} {
    height: 230px;
  }
`

export default Projects
