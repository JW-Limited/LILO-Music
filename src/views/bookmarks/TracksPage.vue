<template>
  <BaseBookmarksPaginatedPageContainer
    model="bookmarkTrack"
    :scope="scope"
    :limit="limit"
    :order="order"
    is-with-top-segment
    is-with-order-change
  >
    <template
      #default="slotProps"
    >
      <BaseTracksSimpleList
        :tracks="slotProps[scope]"
        :profile-id="profileId"
        is-with-image
        is-with-artist-name
        is-with-album-title
        is-with-source
        is-with-created
        is-bookmark
        is-with-source-option
        is-with-library-option
        is-with-favorite-option
        is-with-listened-option
        is-with-playlist-option
        is-with-share-option
        is-with-queue-option
        is-with-delete-option
      />
    </template>
  </BaseBookmarksPaginatedPageContainer>
</template>

<script>
import {
  mapState
} from 'pinia'
import profileStore from '@/stores/profile'
import BaseBookmarksPaginatedPageContainer
  from '@/components/containers/pages/bookmarks/BaseBookmarksPaginatedPageContainer.vue'
import BaseTracksSimpleList
  from '@/components/lists/tracks/BaseTracksSimpleList.vue'
import orderChangeMixin from '@/mixins/orderChangeMixin'

export default {
  name: 'TracksPage',
  components: {
    BaseBookmarksPaginatedPageContainer,
    BaseTracksSimpleList
  },
  mixins: [
    orderChangeMixin
  ],
  data () {
    return {
      limit: 50,
      scope: 'tracks',
      order: 'createdDesc'
    }
  },
  computed: {
    ...mapState(
      profileStore,
      {
        profileId: 'id'
      }
    )
  }
}
</script>

<style lang="sass" scoped></style>
