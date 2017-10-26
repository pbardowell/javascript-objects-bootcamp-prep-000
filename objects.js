var playlist = {artist : "", song : ""}
function updatePlaylist(objPL,artist,song) {
  return Object.assign({}, objPL, {[artist]: song})
}
function removeFromPlaylist(objPL,artist) {
  delete objPL.artist
  return objPL
}
