import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,
  a {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--white);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  :root {
    ${props => {
      const theme = props.theme;
      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });
      return append;
    }}
  }
`;
