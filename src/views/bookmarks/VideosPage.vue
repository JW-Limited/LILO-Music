<template>
  <BaseBookmarksPaginatedPageContainer
    model="bookmarkVideo"
    :scope="scope"
    :limit="limit"
    :order="order"
    is-with-top-segment
    is-with-order-change
  >
    <template
      #default="slotProps"
    >
      <BaseVideosSimpleList
        :videos="slotProps[scope]"
        :profile-id="profileId"
        is-with-channel-title
        is-with-created
        is-bookmark
        is-with-favorite-option
        is-with-watched-option
        is-with-share-option
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
import BaseVideosSimpleList
  from '@/components/lists/videos/BaseVideosSimpleList.vue'
import orderChangeMixin from '@/mixins/orderChangeMixin'

export default {
  name: 'VideosPage',
  components: {
    BaseBookmarksPaginatedPageContainer,
    BaseVideosSimpleList
  },
  mixins: [
    orderChangeMixin
  ],
  data () {
    return {
      limit: 50,
      scope: 'videos',
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
