<template>
  <BaseLinkContainer
    class="item main-simple-list-item"
    :class="{
      disabled: isDeleted
    }"
    :link="link"
    @click="handleLinkClick"
  >
    <BaseDeletedSection
      v-if="isDeleted"
      model="video"
    />
    <template
      v-else
    >
      <BaseImage
        class="rounded-medium bordered video-image"
        model="video"
        :image="imageData?.extrasmall"
      />

      <div class="content">
        <BaseHeader
          tag="h4"
          :class="{
            link: isMainLinkActive
          }"
          :text="videoTitle"
        />

        <BaseVideoChannelLinkSection
          v-if="isWithChannelTitle"
          :model-data="videoData"
          @link-click="handleLinkClick"
          @active-change="handleChannelLinkActiveChange"
        />
      </div>

      <BaseSelfIcons
        :favorite-id="favoriteId"
        :bookmark-id="bookmarkId"
        :watched-id="watchedId"
        :is-with-favorite-icon="isWithFavoriteIcon"
        :is-with-bookmark-icon="isWithBookmarkIcon"
      />

      <BaseCreatedSection
        v-if="isWithCreated"
        class="description right"
        :model-data="videoData"
      />
      <BasePublishDateSection
        v-else
        class="description"
        :model-data="videoData"
      />

      <BaseVideoOptionsDropdown
        :video-data="videoData"
        :favorite-id="favoriteId"
        :bookmark-id="bookmarkId"
        :watched-id="watchedId"
        :is-favorite="isFavorite"
        :is-bookmark="isBookmark"
        :is-with-favorite-option="isWithFavoriteOption"
        :is-with-bookmark-option="isWithBookmarkOption"
        :is-with-watched-option="isWithWatchedOption"
        :is-with-share-option="isWithShareOption"
        :is-with-delete-option="isWithDeleteOption"
        @deleted="handleDeleted"
      />

      <BaseClearButton
        v-if="isWithClearButton"
        @click="handleClearButtonClick"
      />
    </template>
  </BaseLinkContainer>
</template>

<script>
import BaseLinkContainer
  from '@/components/containers/links/BaseLinkContainer.vue'
import BaseDeletedSection from '@/components/sections/BaseDeletedSection.vue'
import BaseImage from '@/components/images/BaseImage.vue'
import BaseHeader from '@/components/BaseHeader.vue'
import BaseVideoChannelLinkSection
  from '@/components/sections/videoChannel/BaseVideoChannelLinkSection.vue'
import BaseSelfIcons from '@/components/models/self/BaseSelfIcons.vue'
import BaseCreatedSection from '@/components/sections/BaseCreatedSection.vue'
import BasePublishDateSection
  from '@/components/sections/BasePublishDateSection.vue'
import BaseVideoOptionsDropdown
  from '@/components/dropdowns/video/BaseVideoOptionsDropdown.vue'
import BaseClearButton from '@/components/buttons/BaseClearButton.vue'
import {
  main as formatVideoMainLink
} from '@/helpers/formatters/links/video'
import selfMixin from '@/mixins/selfMixin'

export default {
  name: 'VideoItem',
  components: {
    BaseLinkContainer,
    BaseDeletedSection,
    BaseImage,
    BaseHeader,
    BaseVideoChannelLinkSection,
    BaseSelfIcons,
    BaseCreatedSection,
    BasePublishDateSection,
    BaseVideoOptionsDropdown,
    BaseClearButton
  },
  mixins: [
    selfMixin
  ],
  inject: {
    findPaginationItem: {
      default: () => false
    }
  },
  props: {
    videoData: {
      type: Object,
      required: true
    },
    isWithChannelTitle: Boolean,
    isWithCreated: Boolean,
    profileId: String,
    isFavorite: Boolean,
    isBookmark: Boolean,
    isWithFavoriteOption: Boolean,
    isWithBookmarkOption: Boolean,
    isWithWatchedOption: Boolean,
    isWithShareOption: Boolean,
    isWithDeleteOption: Boolean,
    isWithClearButton: Boolean
  },
  emits: [
    'linkClick',
    'clearButtonClick'
  ],
  data () {
    return {
      isMainLinkActive: true
    }
  },
  computed: {
    modelData () {
      return this.videoData
    },
    link () {
      return formatVideoMainLink(
        {
          videoId: this.videoId
        }
      )
    },
    videoId () {
      return this.videoData.source.id
    },
    imageData () {
      return this.videoData.image
    },
    videoTitle () {
      return this.videoData.title
    },
    uuid () {
      return this.videoData.uuid
    },
    paginationItem () {
      return this.findPaginationItem(
        {
          uuid: this.uuid
        }
      )
    },
    isDeleted () {
      return !!this.videoData.isDeleted
    }
  },
  methods: {
    handleLinkClick () {
      this.$emit(
        'linkClick'
      )
    },
    handleClearButtonClick () {
      this.$emit(
        'clearButtonClick',
        {
          uuid: this.uuid
        }
      )
    },
    handleChannelLinkActiveChange (
      value
    ) {
      this.isMainLinkActive = !value
    },
    handleDeleted () {
      this.paginationItem.isDeleted = true
    }
  }
}
</script>

<style lang="sass" scoped>
.video-image
  width: 100px !important
  height: calc(100px / 16 * 9) !important

.content
  @extend .no-padding
</style>
