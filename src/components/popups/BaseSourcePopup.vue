<template>
  <span
    v-html="popupText"
  />
</template>

<script>
import audioSources from '@/helpers/data/audio/sources'

export default {
  name: 'BaseSourcePopup',
  props: {
    source: {
      type: String,
      required: true
    }
  },
  computed: {
    popupText () {
      return this.$t(
        'track.source',
        {
          source: this.sourceNameStrong
        }
      )
    },
    sourceNameStrong () {
      return `<strong>${this.sourceName}</strong>`
    },
    sourceName () {
      return this.sourceData?.name
    },
    sourceData () {
      return audioSources.find(
        this.isMatchedSource
      )
    }
  },
  methods: {
    isMatchedSource (
      sourceData
    ) {
      return (
        sourceData.id ===
          this.source
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
