

const API_URL = 'https://api.example.com/search'; // Replace with your API endpoint

export const fetchSearchResults = async (searchInput) => {
  try {
    const response = await fetch(`${API_URL}?query=${searchInput}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching search results');
  }
};