import { css } from '@emotion/react'
import { mobile } from './media'

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

  html,
  body {
    font-family: 'Noto Sans KR', sans-serif;
    padding: 0;
    margin: 0;
    background-color: black;
    color: white;
    overflow: hidden;
  }
  * {
    cursor: none !important;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    ${mobile} {
      cursor: default !important;
    }
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
    max-width: 1280px;
    margin: 0 auto;
    padding: 0px 5px;
  }

  .borderLine {
    border: 1px solid black;
  }

  .title_1 {
    font-size: 55px;
    font-weight: 600;
    ${mobile} {
      font-size: 40px;
    }
  }

  .main {
    transition: opacity 200ms ease-in-out;
    &.entering {
      opacity: 0;
    }
    &.entered {
      opacity: 1;
    }
    &.exiting {
      opacity: 0;
    }
    &.exited {
      opacity: 0;
    }
  }
`
