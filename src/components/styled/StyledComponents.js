import styled from 'styled-components';
import { theme } from '../../styles/GlobalStyle';

// Layout Components
export const AppContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: 20px;
`;

export const Header = styled.header`
  position: relative;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 2px solid ${theme.colors.primary};
  padding-bottom: 10px;
`;

export const Title = styled.h1`
  color: ${theme.colors.primary};
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  color: ${theme.colors.secondary};
  font-size: 1.2rem;
`;

export const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.section`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 0 10px ${theme.colors.primary};
`;

export const SectionTitle = styled.h2`
  color: ${theme.colors.secondary};
  font-size: 1.5rem;
  margin-bottom: 15px;
  border-bottom: 1px dashed ${theme.colors.secondary};
  padding-bottom: 5px;
`;

export const TagList = styled.ul`
  list-style: none;
  margin-top: 15px;
`;

export const TagItem = styled.li`
  padding: 8px 12px;
  margin-bottom: 10px;
  background-color: ${theme.colors.darkBlue};
  border-left: 4px solid ${props => props.$accent ? theme.colors.accent : theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s, background-color 0.2s;
  
  &:hover {
    transform: translateX(5px);
    background-color: ${theme.colors.darkCyan};
  }
`;

export const TagName = styled.span`
  color: ${theme.colors.text};
  font-size: 1.1rem;
  &::before {
    content: "#";
    color: ${theme.colors.accent};
    margin-right: 2px;
  }
`;

export const TagCount = styled.span`
  background-color: ${theme.colors.darkMagenta};
  color: ${theme.colors.text};
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
`;

export const TimeStamp = styled.span`
  color: ${theme.colors.accent};
  font-size: 0.8rem;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const LoadingText = styled.span`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  position: relative;
  
  &::after {
    content: "...";
  }
`;

export const ErrorMessage = styled.div`
  color: ${theme.colors.accent};
  background-color: rgba(255, 0, 0, 0.2);
  padding: 15px;
  border-left: 4px solid ${theme.colors.accent};
  margin: 15px 0;
`;

export const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  font-size: 0.9rem;
  color: ${theme.colors.primary};
  border-top: 1px solid ${theme.colors.primary};
  padding-top: 15px;
`;

export const RefreshButton = styled.button`
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  border-radius: 4px;
  padding: 8px 16px;
  font-family: ${theme.fonts.main};
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0 auto 20px;
  display: block;
  
  &:hover {
    background-color: ${theme.colors.darkCyan};
  }
  
  &:active {
    transform: translateY(2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;