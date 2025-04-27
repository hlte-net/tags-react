import React from 'react';
import { Section, SectionTitle, TagList, TagItem, TagName, TagCount, TimeStamp, LoadingContainer, LoadingText, ErrorMessage } from './styled/StyledComponents';

// Format timestamp to a readable date
const formatTimestamp = (timestamp) => {
  if (!timestamp) return '';
  
  // Convert nanoseconds to milliseconds (assumes timestamp is in nanoseconds)
  const date = new Date(parseInt(timestamp) / 1000000);
  
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const TagSection = ({ title, tags, isLoading, error, showTimestamp, isRecentList }) => {
  if (isLoading) {
    return (
      <Section>
        <SectionTitle>{title}</SectionTitle>
        <LoadingContainer>
          <LoadingText>Loading</LoadingText>
        </LoadingContainer>
      </Section>
    );
  }

  if (error) {
    return (
      <Section>
        <SectionTitle>{title}</SectionTitle>
        <ErrorMessage>
          Error loading tags: {error}
        </ErrorMessage>
      </Section>
    );
  }

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <TagList>
        {tags && tags.length > 0 ? (
          tags.map((tag, index) => (
            <TagItem 
              key={index} 
              $accent={!isRecentList && index < 3}
              $isRecent={isRecentList}
            >
              <TagName>{tag.tag}</TagName>
              {showTimestamp ? (
                <TimeStamp>{formatTimestamp(tag.timestamp)}</TimeStamp>
              ) : (
                <TagCount>{tag.count}</TagCount>
              )}
            </TagItem>
          ))
        ) : (
          <ErrorMessage>No tags found</ErrorMessage>
        )}
      </TagList>
    </Section>
  );
};

export default TagSection;