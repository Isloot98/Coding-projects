import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const mockData = [
    { id: 1, name: 'Sugma', artist: 'eminem', album: 'flippy nips' },
    { id: 2, name: 'Ligma', artist: 'Rihanna', album: 'Big nips' },
    { id: 3, name: 'Indubitably', artist: 'Jeremy', album: 'Christmas no.1' },
    { id: 4, name: 'Glip Glop', artist: 'Richard', album: 'Mortimer' },
  ];

  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (searchInput === '') {
      setSearchResults([]);
    }
  }, [searchInput]);

  const handleChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    setSearchResults(
      mockData.filter((result) => result.name.toLowerCase().includes(input.toLowerCase()))
    );
    setSubmitted(false); // Reset submitted state on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted state on form submission
    setSearchResults(
      mockData.filter((result) => result.name.toLowerCase().includes(searchInput.toLowerCase()))
    );
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          className='searchBox'
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
        <div id="resultsContainer">
          {!submitted && (
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>{result.name}</li>
              ))}
            </ul>
          )}
        </div>
        {submitted && (
          <div>
            <h3>Search Results</h3>
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>{result.name}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
