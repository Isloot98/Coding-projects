import React, { useState} from 'react';
import isa from './isa.svg'
import styles from './app.module.css';
import SearchBar from './components/SearchBar'
import Playlist from './components/Playlist';
const mockData = [
  { id: 1, name: 'Sugma', artist: 'eminem', album: 'flippy nips', uri: 'http://' },
  { id: 2, name: 'Ligma', artist: 'Rihanna', album: 'Nips', uri: 'http://1' },
  { id: 3, name: 'Indubitably', artist: 'Jeremy', album: 'Christmas no.1', uri: 'http://2' },
  { id: 4, name: 'Glip Glop', artist: 'Richard', album: 'Mortimer', uri: 'http://3' },
];

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

   const handleSearch = (input) => {
    if (input === '') {
      setSearchResults([]);
    } else {
      setSearchResults(
        mockData.filter((result) =>
          result.name.toLowerCase().includes(input.toLowerCase())
        )
      )
    }

  };



  const addToPlaylist = (item) => {
    setPlaylist([...playlist, item]);
  };

  const removeFromPlaylist = (index) => {
    const updatedPlaylist = [...playlist];
    updatedPlaylist.splice(index, 1);
    setPlaylist(updatedPlaylist);
    
};

const createPlaylist = (playlist) => {
  const uris = playlist.map((track) => track.uri);
  console.log('Creating playlist with URIs:', uris);

};
 

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1 className={styles.AppName}>
          <span className={styles.playlist}>Playlist</span>
          <span className={styles.forge}>Forge</span>
        </h1>
        <img src={isa} className={styles.AppLogo} alt="logo" />
      </header>
      <body className={styles.AppBody}>
        <div className={styles.grid}>
          <div className={styles.gridCol1}>
            <SearchBar className={styles.searchBar} searchResults={searchResults} handleSearch={handleSearch} addToPlaylist={addToPlaylist} />
            
          </div>
          <div className={styles.gridCol2}>
            <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} createPlaylist={createPlaylist}/>
          </div>
        </div>
      </body>
      <footer></footer>
    </div>
  );
}
export default App;
