export function artist (
  artistData
) {
  const {
    name
  } = artistData

  return {
    model: 'artist',
    name
  }
}

export function album (
  albumData
) {
  const {
    source,
    title,
    artist,
    artists,
    image
  } = albumData

  return {
    model: 'album',
    source,
    title,
    artist,
    artists,
    image
  }
}

export function track (
  trackData
) {
  const {
    source,
    title,
    artist,
    artists,
    album,
    image,
    audio
  } = trackData

  const {
    image: artistImage,
    ...artistData
  } = artist

  const audioData = audio && {
    present: audio.present
  }

  return {
    model: 'track',
    source,
    player_id:
      trackData.player_id,
    title,
    artist: artistData,
    artists,
    album,
    image,
    audio: audioData
  }
}

export function video (
  videoData
) {
  const {
    source,
    title,
    image
  } = videoData

  const imageData = image && {
    small: image.small
  }

  return {
    model: 'video',
    source,
    title,
    image: imageData
  }
}

export function videoPlaylist (
  playlistData
) {
  const {
    source,
    title,
    channel,
    description,
    image
  } = playlistData

  const imageData = image && {
    extrasmall: image.extrasmall
  }

  return {
    model: 'video_playlist',
    source,
    title,
    channel,
    description,
    image: imageData,
    videos_count:
      playlistData.videos_count
  }
}

export function playlist (
  playlistData
) {
  return {
    model: 'playlist',
    id: playlistData.id
  }
}

export function community (
  communityData
) {
  return {
    model: 'community',
    id: communityData.id
  }
}
