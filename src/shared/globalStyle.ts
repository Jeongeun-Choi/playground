import { createGlobalStyle, css } from "styled-components";

// import { color, typography } from './styles';

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900";

export const bodyStyles = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  ul {
    list-style: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
