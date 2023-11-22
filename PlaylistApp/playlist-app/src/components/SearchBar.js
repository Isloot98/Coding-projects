import styles from './searchBar.module.css';
import React, { useState, useEffect } from 'react';

const SearchBar = ({ addToPlaylist, handleSearch, searchResults }) => {
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchResults.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchResults, mockData]);

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchBox}
        type="text"
        placeholder="Search here"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div
        id={styles.resultsContainer}
        className={`${styles.resultsContainer} ${showResults ? styles.open : ''}`}
      >
        {showResults && <h3 className={styles.results}>Results</h3>}
        <ul className={styles.list}>
          {searchResults.map((result) => (
            <li className={styles.listItem} key={result.id}>
              <div className={styles.details}>
                <span className={styles.name}>{result.name}</span>
                <span className={styles.artistAlbum}>
                  {result.artist} - {result.album}
                </span>
              </div>
              <button
                className={styles.addButton}
                onClick={() => addToPlaylist(result)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
