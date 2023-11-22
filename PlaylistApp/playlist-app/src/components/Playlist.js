import React, { useState } from 'react';
import styles from './playlist.module.css';

function Playlist({ playlist, removeFromPlaylist, createPlaylist }) {
const [playlistName, setPlaylistName] = useState('My Playlist')





  return (
    <div className={styles.playlist}>
      <input
        className={styles.playlistBox}
        type="text"
        placeholder="Playlist name"
        onChange={(e) => {
          if (e.target.value === '') {
            setPlaylistName('My Playlist')
          } else {
            setPlaylistName(e.target.value)
          }
        }
      }
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
    </div>
  );
}

export default Playlist;
