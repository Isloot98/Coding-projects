
import React, { useState, useEffect } from 'react';
import isa from './isa.svg'
import styles from './app.module.css';
import SearchBar from './components/SearchBar'
import Playlist from './components/Playlist';
import axios from 'axios';



function App() {
  
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [currentPlaylistName, setCurrentPlaylistName] = useState('');
const [accessToken, setAccessToken] = useState('');
const [playlistCreated, setplaylistCreated] = useState(false);


useEffect(() => {
  const urlParams = new URLSearchParams(window.location.hash.substring(1));
  const token = urlParams.get('access_token');

  if (token) {
    setAccessToken(token);

    window.history.replaceState({}, document.title, window.location.pathname);
  } 

  console.log('accessToken', accessToken)
}, [accessToken]);


const updatePlaylistName = (newName) => {
    setCurrentPlaylistName(newName);
  };


  const getAccess = () => {
    window.location.hash = ''; 
    const client_id = 'a3160decef2a46249bfaeecc944796d7'; 
    const redirect_uri = 'http://localhost:3000/callback'; 
    const state = 'YOUR_STATE'; 
    const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';
    
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&state=' + encodeURIComponent(state);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

  
    
    window.location.href = url;
  };

  



  
  const handleSearch = async (input) => {
    if (input === '') {
      setSearchResults([]);
      return;
    }

    const apiUrl = `https://api.spotify.com/v1/search?type=track&q=${input}`;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const tracks = data.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists.map((artist) => artist.name).join(', '),
          album: track.album.name,
          uri: track.uri,
        }));
        setSearchResults(tracks);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
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

const createPlaylist = async () => {
  const userId = 'isa.sloot';
  const playlistName = currentPlaylistName;

  try {
    const response = await axios.post(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        name: playlistName,
        public: true,
        collaborative: false,
        description: 'This playlist was created using PlaylistForge',
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Playlist created:', response.data);
    const playlistId = response.data.id;

    await addTracksToPlaylist(playlistId, accessToken);

    setplaylistCreated(true);

  } catch (error) {
    console.error('Error creating playlist:', error);
  }
 
};
const addTracksToPlaylist = async (playlistId, accessToken) => {
  const trackUris = playlist.map((item) => item.uri);

  try {
    const response = await axios.post(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        uris: trackUris,
        position: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Tracks added to playlist:', response.data);
  } catch (error) {
    console.error('Error adding tracks to playlist:', error);
  }
};

const removePlaylistCreated = () => {
   setTimeout(() => {
    setplaylistCreated(false);
  }, 10000);
};

const handleCreatePlaylist = () => {
  if (playlistCreated === true) {
    return <div className={styles.created} > <h4>Playlist Created!<div className={styles.tick} >{removePlaylistCreated()}</div></h4></div>    
  
}
};


 

  return (
    <div className={styles.App}>

      <header className={styles.AppHeader}>
        <h1 className={styles.AppName}>
          <span className={styles.playlist}>Playlist</span>
          <span className={styles.forge}>Forge </span>
        </h1>
        <img src={isa} className={styles.AppLogo} alt="logo" />
        <button className={styles.logIn} onClick={getAccess}>Log in</button>
      </header>
      <body className={styles.AppBody}>
        <div className={styles.grid}>
          <div className={styles.gridCol1}>
            <SearchBar className={styles.searchBar} searchResults={searchResults} handleSearch={handleSearch} addToPlaylist={addToPlaylist} />
            
          </div>
          <div className={styles.gridCol2}>
            <Playlist playlist={playlist} 
            removeFromPlaylist={removeFromPlaylist}   
            createPlaylist={createPlaylist} 
            updatePlaylistName={updatePlaylistName} 
            handleCreatePlaylist={handleCreatePlaylist}
            />
          </div>
        </div>
      </body>
      <footer></footer>
    </div>
  );
}
export default App;

