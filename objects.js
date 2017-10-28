var playlist = {
  ACDC: 'Thunderstruck'
}

function updatePlaylist (obj, artistName,songTitle){
  return Object.assign({},playlist,{artistName: songTitle})

}
