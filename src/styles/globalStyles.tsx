import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  
  a {
    font-weight: 500;
    color: ${props => props.theme.primary};
    text-decoration: inherit;
  }
  
  a:active, a:focus {
    color: ${props => props.theme.primaryActive};
  }

  a:hover {
      color: ${props => props.theme.primaryHighlight};
      text-decoration: underline;
      transition: opacity 300ms ease;
  }
  
  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
  
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
  
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.neutral10};
    cursor: pointer;
    transition: border-color 0.25s;
    transition: background 0.25s;
  }

  button:hover {
    background: ${props => props.theme.primaryHighlight};
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`

export default GlobalStyle