import React, { useState} from 'react';
import logo from './logo.svg';
import isa from './isa.svg'
import './App.css';
import SearchBar from './components/search-bar/SearchBar'
import Playlist from './components/playlist/Playlist'

const mockData = [
  { id: 1, name: 'Song A' },
  { id: 2, name: 'Song B' },
  { id: 3, name: 'Song C' },
];
function App() {

  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (input) => {
    setSearchInput(input);
    // Simulating API call delay using setTimeout
    setTimeout(() => {
      setSearchResults(
        mockData.filter((result) => result.name.toLowerCase().includes(input.toLowerCase()))
      );
    }, 500); // Simulating a 500ms delay, similar to an API response delay
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='appName'>
          <span className='playlist'>Playlist</span>
          <span className='forge'>Forge</span>
        </h1>
        <img src={isa} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <div className='grid'>
          <div className='gridCol1'>
        <SearchBar className='searchBar' handleSearch={handleSearch} />
        {/* Display search results */}
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
        </div>
        <div className='gridCol2'>
          <Playlist />
        </div>
        </div>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;