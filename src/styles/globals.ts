import { css } from '@emotion/react'

export const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: black;
    color: white;
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
