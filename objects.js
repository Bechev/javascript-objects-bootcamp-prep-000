var playlist = {
  ACDC: 'Thunderstruck'
}

function updatePlaylist (playlist, artistName,songTitle){
  return Object.assign({},playlist,{[artistName]: songTitle})

}

function removeFromPlaylist(playlist,artistName){
  playlist.delete [artistName]
  return playlist
}
