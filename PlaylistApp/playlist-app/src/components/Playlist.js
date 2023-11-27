import React, { useState } from 'react';
import styles from './playlist.module.css';

function Playlist({ playlist, removeFromPlaylist, createPlaylist, updatePlaylistName, handleCreatePlaylist  }) {
const [playlistName, setPlaylistName] = useState('My Playlist')


const handlePlaylistNameChange = (e) => {
  const newName = e.target.value === '' ? 'My Playlist' : e.target.value;
  setPlaylistName(newName);
  updatePlaylistName(newName); 
}

  return (
    <div className={styles.playlist}>
      <input
        className={styles.playlistBox}
        type="text"
        placeholder="Playlist name"
        onChange={handlePlaylistNameChange}
      />
      <h3 className={styles.playlistName}>{playlistName}</h3>
      <ul className={styles.list}>
        {playlist.map((item, index) => (
          <li key={index}>
                <div className={styles.details}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.artistAlbum}>
                {item.artist} - {item.album}
              </span>
            </div>
            <button className={styles.removeButton} onClick={() => removeFromPlaylist(index)}>-</button>
          </li>
        ))}
      </ul>
      
      <button className={styles.create} onClick={() => createPlaylist(playlist)}>Create Playlist</button>
      <h4 className={styles.created}>{handleCreatePlaylist()}</h4>
    </div>
  );
}

export default Playlist;
