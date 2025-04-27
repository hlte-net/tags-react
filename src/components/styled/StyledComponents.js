import styled from 'styled-components';
import { theme } from '../../styles/GlobalStyle';

// Layout Components
export const AppContainer = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  position: relative;
  padding: 25px 20px;
  background: linear-gradient(135deg, rgba(11, 22, 34, 0.7), rgba(15, 45, 72, 0.7));
  border-radius: ${theme.borderRadius};
  backdrop-filter: blur(10px);
  box-shadow: ${theme.boxShadow};
`;

export const Header = styled.header`
  position: relative;
  text-align: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  background: linear-gradient(90deg, 
    transparent, 
    ${theme.colors.darkBlue}, 
    ${theme.colors.gradientEnd}, 
    ${theme.colors.darkBlue}, 
    transparent
  );
  background-size: 100% 2px;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  color: ${theme.colors.highlight};
  font-size: ${theme.fontSize.xxl};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 10px;
  background: linear-gradient(
    90deg,
    ${theme.colors.highlight},
    ${theme.colors.primary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 15px rgba(0, 204, 255, 0.5);
`;

export const Subtitle = styled.p`
  color: ${theme.colors.secondary};
  font-size: ${theme.fontSize.lg};
  letter-spacing: 0.5px;
`;

export const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.section`
  background: ${theme.colors.darkBlue};
  background: linear-gradient(145deg, ${theme.colors.darkBlue} 0%, ${theme.colors.accentDark} 100%);
  border-radius: ${theme.borderRadius};
  padding: 20px;
  box-shadow: ${theme.boxShadow};
  border: 1px solid rgba(0, 204, 255, 0.2);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent, 
      ${theme.colors.primary}, 
      transparent
    );
  }
`;

export const SectionTitle = styled.h2`
  color: ${theme.colors.highlight};
  font-size: ${theme.fontSize.xl};
  margin-bottom: 15px;
  padding-bottom: 8px;
  position: relative;
  letter-spacing: 0.5px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      ${theme.colors.secondary}30, 
      ${theme.colors.primary}60, 
      ${theme.colors.secondary}30
    );
  }
`;

export const TagList = styled.ul`
  list-style: none;
  margin-top: 15px;
`;

export const TagItem = styled.li`
  padding: 8px 12px;
  margin-bottom: 8px;
  background: rgba(11, 22, 34, 0.7);
  border-radius: ${theme.borderRadius};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-left: 2px solid ${props => props.$accent ? theme.colors.accent : theme.colors.primary};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 204, 255, 0.2);
    background: rgba(12, 45, 72, 0.7);
  }
`;

export const TagName = styled.span`
  color: ${theme.colors.text};
  font-size: ${theme.fontSize.md};
  letter-spacing: 0.5px;
  
  &::before {
    content: "#";
    color: ${theme.colors.primary};
    margin-right: 4px;
    font-weight: bold;
  }
`;

export const TagCount = styled.span`
  background: linear-gradient(90deg, ${theme.colors.gradientStart}, ${theme.colors.gradientEnd});
  color: ${theme.colors.text};
  padding: 2px 10px;
  border-radius: 12px;
  font-size: ${theme.fontSize.xs};
  min-width: 30px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const TimeStamp = styled.span`
  color: ${theme.colors.highlight};
  font-size: ${theme.fontSize.xs};
  background-color: rgba(0, 204, 255, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
  letter-spacing: 0.5px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

export const LoadingText = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.lg};
  position: relative;
  padding: 8px 20px;
  background-color: rgba(0, 204, 255, 0.1);
  border-radius: 20px;
  letter-spacing: 1px;
  
  &::after {
    content: "...";
  }
`;

export const ErrorMessage = styled.div`
  color: #E6F1FF;
  background-color: rgba(0, 119, 182, 0.15);
  padding: 12px;
  border-left: 3px solid ${theme.colors.blue};
  margin: 12px 0;
  border-radius: 0 ${theme.borderRadius} ${theme.borderRadius} 0;
  box-shadow: 0 2px 8px rgba(0, 119, 182, 0.2);
  font-size: ${theme.fontSize.sm};
`;

export const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text};
  padding-top: 15px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      ${theme.colors.primary}50, 
      transparent
    );
  }
`;

export const RefreshButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.primary});
  color: ${theme.colors.text};
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSize.md};
  cursor: pointer;
  margin: 0 auto 20px;
  display: block;
  letter-spacing: 0.5px;
  box-shadow: 0 3px 10px rgba(0, 204, 255, 0.25);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transition: all 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 204, 255, 0.35);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(0, 204, 255, 0.25);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #0F4C75, #3282B8);
    opacity: 0.7;
    cursor: not-allowed;
    box-shadow: none;
  }
`;