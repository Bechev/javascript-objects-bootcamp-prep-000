var playlist = {
  ACDC: 'Thunderstruck'
}

function updatePlaylist (playlist, artistName,songTitle){
  return Object.assign({},playlist,{[artistName]: songTitle})

}
