import { createGlobalStyle } from 'styled-components';

// Updated Cyberpunk color palette with more blues and magenta
export const theme = {
  colors: {
    background: '#0B1622',     // Dark navy blue
    primary: '#00CCFF',        // Bright cyan
    secondary: '#036BFC',      // Vibrant blue
    accent: '#F055A9',         // Magenta accent
    highlight: '#4CC9F0',      // Sky blue
    blue: '#0077B6',           // Deep blue
    text: '#E6F1FF',           // Ice blue
    darkBlue: '#0C2D48',       // Deep navy
    darkCyan: '#065A82',       // Dark teal
    accentDark: '#073B4C',     // Dark cyan
    magenta: '#D926AA',        // Deep magenta
    gradientStart: '#0F2D48',  // Deep blue for gradients
    gradientEnd: '#1170CC',    // Brighter blue for gradients
  },
  fonts: {
    main: "'VT323', 'Courier New', monospace",
  },
  borderRadius: '8px',
  boxShadow: '0 4px 15px rgba(0, 204, 255, 0.3)',
  fontSize: {
    xs: '0.7rem',
    sm: '0.8rem',
    md: '0.95rem',
    lg: '1.1rem',
    xl: '1.4rem',
    xxl: '2.2rem',
  },
  maxWidth: '1200px',
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
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(0, 204, 255, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(0, 255, 204, 0.08) 0%, transparent 40%);
    color: ${theme.colors.text};
    min-height: 100vh;
    padding: 25px 15px;
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: 0.2px;
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
    border-radius: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, ${theme.colors.primary}, ${theme.colors.secondary});
    border-radius: 8px;
    border: 2px solid ${theme.colors.darkBlue};
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, ${theme.colors.accent}, ${theme.colors.primary});
  }

  ::selection {
    background: ${theme.colors.secondary};
    color: ${theme.colors.text};
  }
  
  a {
    color: ${theme.colors.highlight};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`;

export default GlobalStyle;