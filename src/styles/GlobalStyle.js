import { createGlobalStyle } from 'styled-components';

// CGA color palette
export const theme = {
  colors: {
    background: '#000000', // Black
    primary: '#55FFFF',    // Cyan
    secondary: '#FF55FF',  // Magenta
    accent: '#FFFF55',     // Yellow
    text: '#FFFFFF',       // White
    darkBlue: '#0000AA',   // Dark blue
    darkMagenta: '#AA00AA', // Dark magenta
    darkCyan: '#00AAAA',   // Dark cyan
  },
  fonts: {
    main: "'VT323', 'Courier New', monospace",
  }
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    min-height: 100vh;
    padding: 20px;
    font-size: 16px;
    line-height: 1.5;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${theme.colors.darkBlue};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 4px;
  }

  ::selection {
    background: ${theme.colors.secondary};
    color: ${theme.colors.background};
  }
`;

export default GlobalStyle;