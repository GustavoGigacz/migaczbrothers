import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  outline: none;
  letter-spacing: -0.01em;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

button {
  background-color: transparent;
  color: inherit;
  border-width: 0;
  padding: 0;
  cursor: pointer;
}

body {
  margin: 0;
  height: 100vh;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;

  background-color: var(--background-primary);
}

div#__next {
  height: 100%;
}

figure {
  margin: 0;
}

input::-moz-focus-inner {
  border: 0;
  padding: 0;
  margin: 0;
}

input,
button,
select,
textarea {
  font-family: inherit;
}

ul,
ol,
dd {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

p {
  margin: 0;
}

cite {
  font-style: normal;
}

fieldset {
  border-width: 0;
  padding: 0;
  margin: 0;
}
`;

export default GlobalStyle;
