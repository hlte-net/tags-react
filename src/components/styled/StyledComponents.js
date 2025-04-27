import styled from 'styled-components';
import { theme } from '../../styles/GlobalStyle';

// Layout Components
export const AppContainer = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  position: relative;
  padding: 28px 24px;
  background: white;
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
`;

export const Header = styled.header`
  position: relative;
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${theme.colors.gradientEnd};
`;

export const Title = styled.h1`
  color: ${theme.colors.text};
  font-size: ${theme.fontSize.xxl};
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  color: ${theme.colors.blue};
  font-size: ${theme.fontSize.md};
  font-weight: 400;
`;

export const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.section`
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius};
  padding: 22px;
  box-shadow: ${theme.boxShadow};
  border: 1px solid ${theme.colors.accentDark};
  position: relative;
`;

export const SectionTitle = styled.h2`
  color: ${theme.colors.blue};
  font-size: ${theme.fontSize.lg};
  margin-bottom: 16px;
  padding-bottom: 8px;
  position: relative;
  font-weight: 500;
  border-bottom: 1px solid ${theme.colors.accentDark};
`;

export const TagList = styled.ul`
  list-style: none;
  margin-top: 15px;
`;

export const TagItem = styled.li`
  padding: 10px 14px;
  margin-bottom: 8px;
  background: white;
  border-radius: ${theme.borderRadius};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  border-left: ${props => {
    // For Recent Tags list, use blue
    if (props.$isRecent) {
      return `2px solid ${theme.colors.secondary}`;
    }
    // For Popular Tags list, use yellow for top 3, green for the rest
    return `2px solid ${props.$accent ? theme.colors.accent : theme.colors.highlight}`;
  }};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`;

export const TagName = styled.span`
  color: ${theme.colors.text};
  font-size: ${theme.fontSize.md};
  
  &::before {
    content: "#";
    color: ${props => props.$accent ? theme.colors.accent : theme.colors.blue};
    margin-right: 4px;
    font-weight: 500;
  }
`;

export const SpecialTagName = styled(TagName)`
  color: #ea4c89;
  font-weight: 600;
  text-decoration: underline;
  
  &::before {
    color: #ea4c89;
    font-weight: 700;
  }
  
  &:hover {
    opacity: 0.85;
  }
`;

export const TagCount = styled.span`
  background: ${theme.colors.accentDark};
  color: ${theme.colors.blue};
  padding: 3px 10px;
  border-radius: 12px;
  font-size: ${theme.fontSize.xs};
  min-width: 30px;
  text-align: center;
  font-weight: 500;
`;

export const TimeStamp = styled.span`
  color: ${theme.colors.text};
  font-size: ${theme.fontSize.xs};
  background-color: ${theme.colors.lightYellow};
  padding: 3px 10px;
  border-radius: 12px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

export const LoadingText = styled.span`
  color: ${theme.colors.blue};
  font-size: ${theme.fontSize.md};
  position: relative;
  padding: 8px 20px;
  background-color: ${theme.colors.accentDark};
  border-radius: 16px;
  font-weight: 500;
  
  &::after {
    content: "...";
  }
`;

export const ErrorMessage = styled.div`
  color: ${theme.colors.text};
  background-color: ${theme.colors.lightYellow};
  padding: 12px 16px;
  border-left: 2px solid ${theme.colors.accent};
  margin: 12px 0;
  border-radius: 0 ${theme.borderRadius} ${theme.borderRadius} 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  font-size: ${theme.fontSize.sm};
`;

export const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text};
  padding-top: 15px;
  position: relative;
  border-top: 1px solid ${theme.colors.accentDark};
`;

export const RefreshButton = styled.button`
  background: ${theme.colors.blue};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 24px;
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSize.md};
  cursor: pointer;
  margin: 0 auto 20px;
  display: block;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: none;
  }
  
  &:disabled {
    background: ${theme.colors.accentDark};
    color: ${theme.colors.blue};
    opacity: 0.7;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

// Stats Components
export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius};
  padding: 15px;
  box-shadow: ${theme.boxShadow};
  border: 1px solid ${theme.colors.accentDark};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background: white;
  border-radius: ${theme.borderRadius};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const StatValue = styled.div`
  font-size: ${theme.fontSize.xl};
  font-weight: 600;
  color: ${theme.colors.blue};
  margin-bottom: 5px;
`;

export const StatLabel = styled.div`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text};
  font-weight: 500;
`;