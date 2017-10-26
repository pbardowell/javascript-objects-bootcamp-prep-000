var playlist = {artist:"song"}
function updatePlaylist(objPL,artist,song) {
  return Object.assign({}, objPL, {[artist]: song})
}
function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}
