<template>
  <BaseArtistPageContainer
    ref="page"
    class="page-container"
    :artist-name="artistName"
  >
    <template
      #default="slotProps"
    >
      <LeftColumn
        :artist-data="slotProps.artistData"
        :scrollable="scrollable"
      />

      <RightColumn
        :artist-data="slotProps.artistData"
      />
    </template>
  </BaseArtistPageContainer>
</template>

<script>
import BaseArtistPageContainer
  from '@/components/containers/pages/artist/BaseArtistPageContainer.vue'
import LeftColumn from './MainPage/LeftColumn.vue'
import RightColumn from './MainPage/RightColumn.vue'

export default {
  name: 'MainPage',
  components: {
    BaseArtistPageContainer,
    LeftColumn,
    RightColumn
  },
  props: {
    artistName: String
  },
  data () {
    return {
      scrollable: null
    }
  },
  mounted () {
    this.scrollable =
      this.$refs.page.$el
  }
}
</script>

<style lang="sass" scoped>
.page-container
  @extend .d-flex
</style>
