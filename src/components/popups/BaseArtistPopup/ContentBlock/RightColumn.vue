<template>
  <div class="right-column">
    <HeaderSection
      :artist-data="artistData"
      @link-click="handleLinkClick"
    />

    <LabelsSection
      :artist-data="artistData"
      @link-click="handleLinkClick"
    />

    <DescriptionSection
      :artist-data="artistData"
    />
  </div>
</template>

<script>
import HeaderSection from './RightColumn/HeaderSection.vue'
import LabelsSection from './RightColumn/LabelsSection.vue'
import DescriptionSection from './RightColumn/DescriptionSection.vue'

export default {
  name: 'RightColumn',
  components: {
    HeaderSection,
    LabelsSection,
    DescriptionSection
  },
  props: {
    artistData: Object
  },
  emits: [
    'linkClick'
  ],
  methods: {
    handleLinkClick () {
      this.$emit(
        'linkClick'
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.right-column
  @extend .flex-full
  margin-left: 1em
</style>
