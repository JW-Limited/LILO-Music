<template>
  <div ref="segment">
    <BaseSearchButton
      model="video"
      :is-active="isShowVideoSelect"
      @click="handleSearchButtonClick"
    />

    <BaseTrackVideoSelect
      v-if="isVideoSelectCalled"
      v-show="isShowVideoSelect"
      class="video-select"
      :query="query"
      :is-show="isShowVideoSelect"
      @focus="handleFocus"
    />
  </div>
</template>

<script>
import BaseSearchButton from '@/components/buttons/BaseSearchButton.vue'
import BaseTrackVideoSelect
  from '@/components/models/track/BaseTrackVideoSelect.vue'
import {
  focusOnSegment
} from '@/helpers/actions/layout'

export default {
  name: 'VideoSegment',
  components: {
    BaseSearchButton,
    BaseTrackVideoSelect
  },
  props: {
    query: String
  },
  data () {
    return {
      isVideoSelectCalled: false,
      isShowVideoSelect: false
    }
  },
  watch: {
    isShowVideoSelect:
      'handleIsShowVideoSelectChange'
  },
  methods: {
    handleIsShowVideoSelectChange (
      value
    ) {
      if (value) {
        this.focus()
      }
    },
    handleSearchButtonClick () {
      this.isVideoSelectCalled = true

      this.isShowVideoSelect =
        !this.isShowVideoSelect
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
.video-select
  margin-top: 1em
</style>
