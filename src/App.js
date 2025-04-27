import React, { useState, useEffect } from 'react';
import GlobalStyle, { theme } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { AppContainer, Header, Title, Subtitle, MainContent, Footer } from './components/styled/StyledComponents';
import TagSection from './components/TagSection';
import { getTopTags, getRecentTags } from './services/api';

function App() {
  const [topTags, setTopTags] = useState([]);
  const [recentTags, setRecentTags] = useState([]);
  const [topTagsLoading, setTopTagsLoading] = useState(true);
  const [recentTagsLoading, setRecentTagsLoading] = useState(true);
  const [topTagsError, setTopTagsError] = useState(null);
  const [recentTagsError, setRecentTagsError] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        // Fetch top tags
        setTopTagsLoading(true);
        const topTagsData = await getTopTags(10);
        setTopTags(topTagsData);
        setTopTagsError(null);
      } catch (error) {
        setTopTagsError('Failed to load popular tags');
        console.error('Error fetching top tags:', error);
      } finally {
        setTopTagsLoading(false);
      }

      try {
        // Fetch recent tags
        setRecentTagsLoading(true);
        const recentTagsData = await getRecentTags(10);
        setRecentTags(recentTagsData);
        setRecentTagsError(null);
      } catch (error) {
        setRecentTagsError('Failed to load recent tags');
        console.error('Error fetching recent tags:', error);
      } finally {
        setRecentTagsLoading(false);
      }
    };

    fetchTags();

    // Set up periodic refresh - every 30 seconds
    const refreshInterval = setInterval(fetchTags, 30000);

    // Clean up interval on component unmount
    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Title>HLTE Tag Explorer</Title>
          <Subtitle>Discover the trending and latest tags in the system</Subtitle>
        </Header>

        <MainContent>
          <TagSection 
            title="Popular Tags" 
            tags={topTags} 
            isLoading={topTagsLoading} 
            error={topTagsError}
            showTimestamp={false}
          />
          
          <TagSection 
            title="Recently Used Tags" 
            tags={recentTags} 
            isLoading={recentTagsLoading} 
            error={recentTagsError}
            showTimestamp={true}
          />
        </MainContent>

        <Footer>
          <p>© {new Date().getFullYear()} HLTE Tag Explorer • Cyberpunk CGA Edition</p>
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
