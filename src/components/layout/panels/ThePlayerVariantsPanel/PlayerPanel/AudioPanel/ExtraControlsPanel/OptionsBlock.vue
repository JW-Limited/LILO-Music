<template>
  <BaseTrackOptionsDropdown
    :track-data="playerPlaying"
    :library-id="libraryId"
    :favorite-id="favoriteId"
    :bookmark-id="bookmarkId"
    :listened-id="listenedId"
    is-with-library-option
    is-with-favorite-option
    is-with-bookmark-option
    is-with-listened-option
    is-with-playlist-option
    is-with-queue-option
    is-with-save-option
    is-with-share-option
  />
</template>

<script>
import {
  mapState
} from 'pinia'
import playerStore from '@/stores/player'
import BaseTrackOptionsDropdown
  from '@/components/dropdowns/track/BaseTrackOptionsDropdown.vue'
import selfMixin from '@/mixins/selfMixin'

export default {
  name: 'OptionsBlock',
  components: {
    BaseTrackOptionsDropdown
  },
  mixins: [
    selfMixin
  ],
  computed: {
    ...mapState(
      playerStore,
      {
        playerPlaying: 'playing'
      }
    ),
    modelData () {
      return this.playerPlaying
    }
  }
}
</script>

<style lang="sass" scoped></style>
