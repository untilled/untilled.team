import { css } from '@emotion/react'

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
  html,
  body {
    font-family: 'Noto Sans KR', sans-serif;
    padding: 0;
    margin: 0;

    background-color: black;
    color: white;
  }
  * {
    box-sizing: border-box;
  }
  *:link {
    text-decoration: none;
  }
  a {
    color: white;
  }

  button {
    border: 0;
    outline: 0;
    background-color: white;
    cursor: pointer;
  }
  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0px 5px;
  }

  .borderLine {
    border: 1px solid black;
  }
`
