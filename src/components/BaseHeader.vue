<template>
  <Component
    :is="tag"
    class="ui header main-header"
    :class="{
      inverted: isDarkMode
    }"
  >
    <BaseIcon
      v-if="icon"
      :icon="icon"
    />

    {{ text }}
  </Component>
</template>

<script>
import {
  mapState
} from 'pinia'
import layoutStore from '@/stores/layout'
import BaseIcon from '@/components/icons/BaseIcon.vue'

export default {
  name: 'BaseHeader',
  components: {
    BaseIcon
  },
  props: {
    tag: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    icon: String
  },
  computed: {
    ...mapState(
      layoutStore,
      [
        'isDarkMode'
      ]
    )
  }
}
</script>

<style lang="sass" scoped></style>
