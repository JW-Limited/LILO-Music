<template>
  <BaseProfileLibraryArtistPaginatedPageContainer
    model="playlist"
    :profile-id="profileId"
    :library-artist-id="libraryArtistId"
    :scope="scope"
    :limit="limit"
    :order="order"
    is-with-top-segment
    is-with-order-change
  >
    <template
      #default="slotProps"
    >
      <BasePlaylistsSimpleList
        :playlists="slotProps[scope]"
        is-with-created
        is-with-share-option
        is-with-delete-option
      />
    </template>
  </BaseProfileLibraryArtistPaginatedPageContainer>
</template>

<script>
import BaseProfileLibraryArtistPaginatedPageContainer
  from '@/components/containers/pages/profile/library/artist/BaseProfileLibraryArtistPaginatedPageContainer.vue'
import BasePlaylistsSimpleList
  from '@/components/lists/playlists/BasePlaylistsSimpleList.vue'
import orderChangeMixin from '@/mixins/orderChangeMixin'

export default {
  name: 'PlaylistsPage',
  components: {
    BaseProfileLibraryArtistPaginatedPageContainer,
    BasePlaylistsSimpleList
  },
  mixins: [
    orderChangeMixin
  ],
  props: {
    profileId: String,
    libraryArtistId: String
  },
  data () {
    return {
      limit: 50,
      scope: 'playlists',
      order: 'createdDesc'
    }
  }
}
</script>

<style lang="sass" scoped></style>
