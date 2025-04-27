import React from 'react';
import { StatsContainer, StatCard, StatValue, StatLabel, LoadingText, ErrorMessage } from './styled/StyledComponents';

const StatsSection = ({ stats, isLoading, error }) => {
  if (isLoading) {
    return (
      <StatsContainer>
        <LoadingText>Loading Stats</LoadingText>
      </StatsContainer>
    );
  }

  if (error) {
    return (
      <StatsContainer>
        <ErrorMessage>
          Error loading stats: {error}
        </ErrorMessage>
      </StatsContainer>
    );
  }

  return (
    <StatsContainer>
      <StatCard>
        <StatValue>{stats.entries_count.toLocaleString()}</StatValue>
        <StatLabel>Total Entries</StatLabel>
      </StatCard>
      <StatCard>
        <StatValue>{stats.tags_count.toLocaleString()}</StatValue>
        <StatLabel>Unique Tags</StatLabel>
      </StatCard>
    </StatsContainer>
  );
};

export default StatsSection;