<template>
  <BasePaginatedListContainer
    :response-data="tracksData"
    :scope="scope"
    :limit="limit"
    :response-page-limit="tracksCount"
    is-reset
    is-with-pagination
    @focus="handleFocus"
  >
    <template
      #default="slotProps"
    >
      <BaseTracksSimpleList
        :tracks="slotProps[scope]"
        :profile-id="profileId"
        :is-link-to-library="isLinkToLibrary"
        is-with-image
        is-with-artist-name
        is-with-album-title
        is-with-source
        is-with-source-option
        is-with-clear-button
        @link-click="handleLinkClick"
        @clear-button-click="handleClearButtonClick"
      />
    </template>
  </BasePaginatedListContainer>
</template>

<script>
import {
  mapState
} from 'pinia'
import profileStore from '@/stores/profile'
import BasePaginatedListContainer
  from '@/components/containers/lists/BasePaginatedListContainer.vue'
import BaseTracksSimpleList
  from '@/components/lists/tracks/BaseTracksSimpleList.vue'

export default {
  name: 'TracksList',
  components: {
    BasePaginatedListContainer,
    BaseTracksSimpleList
  },
  inject: [
    'deleteCollectionItem',
    'hideModal'
  ],
  props: {
    tracks: {
      type: Array,
      default () {
        return []
      }
    },
    isLinkToLibrary: Boolean
  },
  emits: [
    'focus'
  ],
  data () {
    return {
      limit: 50,
      scope: 'tracks'
    }
  },
  computed: {
    ...mapState(
      profileStore,
      {
        profileId: 'id'
      }
    ),
    tracksData () {
      return {
        page: 1,
        total_pages: 1,
        tracks: this.tracks
      }
    },
    tracksCount () {
      return this.tracks.length
    }
  },
  methods: {
    handleLinkClick () {
      this.hideModal()
    },
    handleClearButtonClick (
      {
        uuid
      }
    ) {
      this.deleteCollectionItem(
        {
          collection: 'collection',
          uuid
        }
      )
    },
    handleFocus () {
      this.$emit(
        'focus'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
