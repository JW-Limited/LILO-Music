<template>
  <div
    class="item main-sidebar-item top-item"
    :class="{
      inverted: isDarkMode
    }"
  >
    <div class="icon-container">
      <BaseImage
        :image="logo"
      />
    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'pinia'
import layoutStore from '@/stores/layout'
import BaseImage from '@/components/images/BaseImage.vue'

export default {
  name: 'RootItem',
  components: {
    BaseImage
  },
  computed: {
    ...mapState(
      layoutStore,
      [
        'isDarkMode'
      ]
    ),
    logo () {
      return require(
        '@/../public/logo.png'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
