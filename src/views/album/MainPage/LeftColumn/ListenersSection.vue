<template>
  <div
    v-if="listenersCount"
    class="listeners-section"
  >
    <BaseDivider />

    <BaseListenersCountSection
      :listeners-count="listenersCount"
      @click="handleListenersCountClick"
    />

    <BaseAlbumListenersModal
      ref="modal"
      :request-album-data="requestAlbumData"
    />
  </div>
</template>

<script>
import BaseDivider from '@/components/BaseDivider.vue'
import BaseListenersCountSection
  from '@/components/sections/BaseListenersCountSection.vue'
import BaseAlbumListenersModal
  from '@/components/modals/album/BaseAlbumListenersModal.vue'

export default {
  name: 'ListenersSection',
  components: {
    BaseDivider,
    BaseListenersCountSection,
    BaseAlbumListenersModal
  },
  props: {
    albumData: {
      type: Object,
      required: true
    }
  },
  computed: {
    listenersCount () {
      return this.albumData.profiles_count
    },
    requestAlbumData () {
      return {
        artistName: this.artistName,
        albumTitle: this.albumTitle
      }
    },
    artistName () {
      return this.albumData.artist.name
    },
    albumTitle () {
      return this.albumData.title
    }
  },
  methods: {
    handleListenersCountClick () {
      this.showModal()
    },
    showModal () {
      this.$refs
        .modal
        .show()
    }
  }
}
</script>

<style lang="sass" scoped>
.listeners-section
  @extend .text-align-center
</style>
