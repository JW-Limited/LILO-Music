<template>
  <div class="add-buttons-container">
    <MusicButton
      :artists="artists"
      :albums="albums"
      :tracks="tracks"
    />

    <ImagesButton />

    <EmojiButton
      :is-modal="isModal"
    />
  </div>
</template>

<script>
import MusicButton from './BaseFormAddButtonsSection/MusicButton.vue'
import ImagesButton from './BaseFormAddButtonsSection/ImagesButton.vue'
import EmojiButton from './BaseFormAddButtonsSection/EmojiButton.vue'

export default {
  name: 'BaseFormAddButtonsSection',
  components: {
    MusicButton,
    ImagesButton,
    EmojiButton
  },
  props: {
    artists: Array,
    albums: Array,
    tracks: Array,
    images: Array,
    isModal: Boolean
  }
}
</script>

<style lang="sass" scoped>
::v-deep(.add-button)
  &:not(:first-child)
    margin-left: 0.5em !important
</style>
