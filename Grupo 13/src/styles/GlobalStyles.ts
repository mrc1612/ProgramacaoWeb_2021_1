import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --header: #3c6e71;
    --section: #353535;
    --footer: #284b63;
    --form: #353535;
    --text: #ffffff;
  }

  body,
  a {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
