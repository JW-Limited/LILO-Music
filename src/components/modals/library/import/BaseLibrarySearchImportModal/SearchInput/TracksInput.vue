<template>
  <BaseSearchInput
    ref="input"
    class="tracks-input"
    :url="url"
    :fields="fields"
    :format-response="formatResponse"
    @select="handleSelect"
  />
</template>

<script>
import BaseSearchInput from '@/components/inputs/BaseSearchInput.vue'
import {
  fields as trackFields,
  format as formatTrack
} from '@/helpers/formatters/search/track'

export default {
  name: 'TracksInput',
  components: {
    BaseSearchInput
  },
  props: {
    source: {
      type: String,
      required: true
    },
    tracks: {
      type: Array,
      default () {
        return []
      }
    }
  },
  emits: [
    'select'
  ],
  computed: {
    url () {
      return (
        `${this.source}/search/tracks` +
        '?query={query}&limit=5'
      )
    },
    fields () {
      return trackFields
    }
  },
  methods: {
    handleSelect (
      track
    ) {
      this.$emit(
        'select',
        track
      )

      this.clear()
    },
    formatResponse (
      response
    ) {
      const {
        tracks
      } = response.search

      return tracks.map(
        formatTrack
      )
    },
    focus () {
      this.$refs
        .input
        .focus()
    },
    clear () {
      this.$refs
        .input
        .clear()
    }
  }
}
</script>

<style lang="sass" scoped></style>
