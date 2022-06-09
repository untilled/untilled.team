import styled from "@emotion/styled"
import { mobile } from "styles/media"

export const Wrapper = styled.div`
&::-webkit-scrollbar {
  display: none;
}
height: 100vh;
padding: 80px 0px;
overflow: scroll;
${mobile} {
  height: fit-content;
  padding-bottom: 0;
}
`

export const Title = styled.div`
/* font-family: 'Prompt', sans-serif; */
display: flex;
flex-direction: column;
align-items: center;
color: white;
padding-bottom: 40px;
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
export const ContentWrapper = styled.div`
height: fit-content;
`

export const CardWrapper = styled.div`
display: flex;
gap: 40px;
height: fit-content;
align-items: center;
height: 300px;
padding: 0;
margin-bottom: 40px;
${mobile} {
  flex-direction: column;
  height: fit-content;
}
`

export const Card = styled.div`
width: 100%;
background-color: #212529;
border-radius: 15px;
height: 300px;
color: #212529;
${mobile} {
  border-radius: 0;
  height: 180px;
}
`

export const CommentBox = styled.div`
background-color: #212529;
padding: 10px 0;
height: 180px;
width: 100%;
border-radius: 15px;
padding-bottom: 50px;
${mobile} {
  border-radius: 0px;
  height: 120px;
}
`