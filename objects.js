var playlist = {
  ACDC: 'Thunderstruck'
}

updatePlaylist (obj, artistName,songTitle){
  return Object.assign({},obj,artistName,songTitle)
  
}