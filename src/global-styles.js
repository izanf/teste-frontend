/* eslint-disable */
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

injectGlobal`
  ${normalize()}

  html,
  body {
    height: 100%;
    background: var(--black);
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  input {
    :focus {
      outline: none;
    }
  }

  :root {
    --orange: #f37820;
    --black: #000000;
    --white: #ffffff;
    --silver: #bfbfbf;
    --gray: #808080;
    --eclipse: #404040;
    --nero: #262626;
    --font-size-1: 36px;
    --font-size-2: 28px;
    --font-size-3: 20px;
    --font-size-4: 18px;
    --font-size-5: 16px;
    --font-size-6: 14px;
    --font-size-7: 12px;
    --font-size-8: 8px;
    --space-1: 48px;
    --space-2: 32px;
    --space-3: 24px;
    --space-4: 16px;
    --space-5: 8px;
    --space-6: 4px;
    --space-7: 2px;
  }

  @font-face {
   font-family: 'Montserrat-Medium';
   font-style: normal;
   font-weight: 400;
   src: url('./assets/fonts/Montserrat-Medium.ttf');
  }
`;
