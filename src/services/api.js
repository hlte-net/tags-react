import axios from 'axios';

// Base URL for API calls - adjust this based on your server configuration
const BASE_URL = 'http://localhost:56555';

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