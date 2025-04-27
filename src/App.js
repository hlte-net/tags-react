import React, { useState, useEffect } from 'react';
import GlobalStyle, { theme } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { 
  AppContainer, 
  Header, 
  Title, 
  MainContent
} from './components/styled/StyledComponents';
import TagSection from './components/TagSection';
import StatsSection from './components/StatsSection';
import { getTopTags, getRecentTags, getDBStats } from './services/api';

function App() {
  const [topTags, setTopTags] = useState([]);
  const [recentTags, setRecentTags] = useState([]);
  const [dbStats, setDbStats] = useState({ entries_count: 0, tags_count: 0 });
  const [topTagsLoading, setTopTagsLoading] = useState(true);
  const [recentTagsLoading, setRecentTagsLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [topTagsError, setTopTagsError] = useState(null);
  const [recentTagsError, setRecentTagsError] = useState(null);
  const [statsError, setStatsError] = useState(null);

  const fetchData = async () => {
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
    
    try {
      // Fetch database stats
      setStatsLoading(true);
      const statsData = await getDBStats();
      setDbStats(statsData);
      setStatsError(null);
    } catch (error) {
      setStatsError('Failed to load database statistics');
      console.error('Error fetching database stats:', error);
    } finally {
      setStatsLoading(false);
    }
  };

  useEffect(() => {
    // Initial data fetch
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Title>HLTE Explorer</Title>
        </Header>
        
        <StatsSection 
          stats={dbStats}
          isLoading={statsLoading}
          error={statsError}
        />

        <MainContent>
          <TagSection 
            title="Recently Used Tags" 
            tags={recentTags} 
            isLoading={recentTagsLoading} 
            error={recentTagsError}
            showTimestamp={true}
            isRecentList={true}
          />
          
          <TagSection 
            title="Popular Tags" 
            tags={topTags} 
            isLoading={topTagsLoading} 
            error={topTagsError}
            showTimestamp={false}
            isRecentList={false}
          />
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
