import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const mockData = [
    { id: 1, name: 'Sugma', artist: 'eminem', album: 'flippy nips' },
    { id: 2, name: 'Ligma', artist: 'Rihanna', album: 'Big nips' },
    { id: 3, name: 'Indubitably', artist: 'Jeremy', album: 'Christmas no.1' },
    { id: 4, name: 'Glip Glop', artist: 'Richard', album: 'Mortimer' },
  ];
  const newPlaylist = []

  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [addedToPlaylist, setAddedToPlaylist] = useState(false)

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
  };


  const addToPlaylist = (results) => {
    results.preventDefault();
    setAddedToPlaylist(true);
    if (addedToPlaylist === true) {
results.push(newPlaylist);
console.log(results);

  }
};

const removeFromPlaylist = (array) => {
    array.preventDefault();
    setAddedToPlaylist(false);
    if (addedToPlaylist === false) {
        array.splice(-1,1)}
        console.log(array);
};

 
  return (
    <div className="searchBar">
      <form >
        <input
          className='searchBox'
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
        <div id="resultsContainer">
          
            <ul>
              {searchResults.map((result) => (
                <>
                <li key={result.id}>{result.name}</li>
                <button onClick={() => addToPlaylist(result.name)}>+</button>
                <button onClick={() => removeFromPlaylist(newPlaylist)}>-</button>

                </>
              ))}
            </ul>
          
        </div>

      </form>
    </div>
  );
};

export default SearchBar;