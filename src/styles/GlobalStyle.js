import { createGlobalStyle } from 'styled-components';

// Modern flat pastel palette with blues, yellows and greens
export const theme = {
  colors: {
    background: '#F7F9FC',     // Light background
    primary: '#7FB7D5',        // Soft blue
    secondary: '#92D5E6',      // Light sky blue
    accent: '#FFDE8A',         // Soft yellow
    highlight: '#A8D5BA',      // Mint green
    blue: '#5B9BD5',           // Medium blue
    text: '#4A5568',           // Slate grey
    darkBlue: '#6A9EC0',       // Muted blue
    darkCyan: '#8AC1D0',       // Soft teal
    accentDark: '#D6EAF5',     // Very light blue
    green: '#87BBA2',          // Pastel green
    gradientStart: '#E8F4FC',  // Light blue for gradients
    gradientEnd: '#D6EAF5',    // Lighter blue for gradients
    lightYellow: '#FFF5D6',    // Very light yellow
  },
  fonts: {
    main: "'Inter', 'Helvetica', 'Arial', sans-serif",
  },
  borderRadius: '6px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  fontSize: {
    xs: '0.7rem',
    sm: '0.8rem',
    md: '0.95rem',
    lg: '1.1rem',
    xl: '1.3rem',
    xxl: '1.8rem',
  },
  maxWidth: '1200px',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    background-image: 
      linear-gradient(120deg, ${theme.colors.gradientStart}80 0%, transparent 70%),
      linear-gradient(200deg, ${theme.colors.lightYellow}50 0%, transparent 70%);
    color: ${theme.colors.text};
    min-height: 100vh;
    padding: 25px 15px;
    font-size: 14px;
    line-height: 1.6;
    letter-spacing: 0;
    font-weight: 400;
  }
  
  code {
    font-family: 'SF Mono', 'Roboto Mono', Menlo, Monaco, Consolas, monospace;
    font-size: 13px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${theme.colors.accentDark};
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.blue};
  }

  ::selection {
    background: ${theme.colors.secondary}40;
    color: ${theme.colors.text};
  }
  
  a {
    color: ${theme.colors.blue};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

export default GlobalStyle;