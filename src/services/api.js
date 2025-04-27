import axios from 'axios';

// Base URL for API calls
const BASE_URL = 'https://ryan.hlte.net';

// Get top N tags by usage count
export const getTopTags = async (limit = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/tags?n=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top tags:', error);
    throw error;
  }
};

// Get most recently used N tags
export const getRecentTags = async (limit = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/tags/recent?n=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recent tags:', error);
    throw error;
  }
};

// Get database statistics (entry count and tag count)
export const getDBStats = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/stats`);
    return response.data;
  } catch (error) {
    console.error('Error fetching database stats:', error);
    throw error;
  }
};