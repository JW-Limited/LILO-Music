import getPlayerTrackAudio from '@/helpers/actions/player/track/audio/get'
import {
  updateGlobal as updateGlobalStore
} from '@/helpers/actions/store'

export default function (
  {
    source,
    trackData,
    queueTracks
  }
) {
  this.error = null
  this.isLoading = true

  const playerTrackAudioArgs = {
    source,
    trackData
  }

  const handleError = (
    error
  ) => {
    this.error = error
  }

  const handleFinish = () => {
    this.isLoading = false

    if (queueTracks) {
      updateGlobalStore(
        {
          'queue.tracks': queueTracks,
          'queue.isShuffle': false
        }
      )
    }
  }

  return getPlayerTrackAudio(
    playerTrackAudioArgs
  ).catch(
    handleError
  ).finally(
    handleFinish
  )
}
