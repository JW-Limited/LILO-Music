<template>
  <div ref="segment">
    <BaseSearchButton
      model="lyrics"
      :is-active="isShowLyricsSelect"
      @click="handleSearchButtonClick"
    />

    <BaseTrackLyricsSelect
      v-if="isLyricsSelectCalled"
      v-show="isShowLyricsSelect"
      class="lyrics-select"
      :query="query"
      @focus="handleFocus"
    />
  </div>
</template>

<script>
import BaseSearchButton from '@/components/buttons/BaseSearchButton.vue'
import BaseTrackLyricsSelect
  from '@/components/models/track/BaseTrackLyricsSelect.vue'
import {
  focusOnSegment
} from '@/helpers/actions/layout'

export default {
  name: 'LyricsSegment',
  components: {
    BaseSearchButton,
    BaseTrackLyricsSelect
  },
  props: {
    query: String
  },
  data () {
    return {
      isLyricsSelectCalled: false,
      isShowLyricsSelect: false
    }
  },
  watch: {
    isShowLyricsSelect:
      'handleIsShowLyricsSelectChange'
  },
  methods: {
    handleIsShowLyricsSelectChange (
      value
    ) {
      if (value) {
        this.focus()
      }
    },
    handleSearchButtonClick () {
      this.isLyricsSelectCalled = true

      this.isShowLyricsSelect =
        !this.isShowLyricsSelect
    },
    handleFocus () {
      this.focus()
    },
    focus () {
      focusOnSegment(
        this.$refs.segment
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.lyrics-select
  margin-top: 1em
</style>
