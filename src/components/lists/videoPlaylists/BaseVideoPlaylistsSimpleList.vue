<template>
  <BaseListContainer
    class="selection"
  >
    <VideoPlaylistItem
      v-for="playlistData in playlistsCollection"
      :key="playlistData.uuid"
      :playlist-data="playlistData"
      :is-with-channel-title="isWithChannelTitle"
      :is-with-share-option="isWithShareOption"
      :is-with-clear-button="isWithClearButton"
      @link-click="handleLinkClick"
      @clear-button-click="handleClearButtonClick"
    />
  </BaseListContainer>
</template>

<script>
import BaseListContainer
  from '@/components/containers/lists/BaseListContainer.vue'
import VideoPlaylistItem
  from './BaseVideoPlaylistsSimpleList/VideoPlaylistItem.vue'
import {
  collection as formatCollection
} from '@/helpers/formatters'

export default {
  name: 'BaseVideoPlaylistsSimpleList',
  components: {
    BaseListContainer,
    VideoPlaylistItem
  },
  props: {
    playlists: {
      type: Array,
      default () {
        return []
      }
    },
    isWithChannelTitle: Boolean,
    isWithShareOption: Boolean,
    isWithClearButton: Boolean
  },
  emits: [
    'linkClick',
    'clearButtonClick'
  ],
  computed: {
    playlistsCollection () {
      return formatCollection(
        this.playlists
      )
    }
  },
  methods: {
    handleLinkClick () {
      this.$emit(
        'linkClick'
      )
    },
    handleClearButtonClick (
      {
        uuid
      }
    ) {
      this.$emit(
        'clearButtonClick',
        {
          uuid
        }
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
