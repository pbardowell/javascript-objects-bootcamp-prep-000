var playlist = {artist : "Beyonce", song : "Single Ladies"}
function updatePlaylist(objPL,artist,song) {
  return Object.assign({}, objPL, {[artist]: song})
}
