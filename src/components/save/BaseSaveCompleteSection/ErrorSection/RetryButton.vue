<template>
  <BaseButton
    class="basic circular fluid retry-button"
    icon="retry"
    :text="retryText"
    @click="handleClick"
  />
</template>

<script>
import BaseButton from '@/components/buttons/BaseButton.vue'

export default {
  name: 'RetryButton',
  components: {
    BaseButton
  },
  emits: [
    'click'
  ],
  computed: {
    retryText () {
      return this.$t(
        'actions.retry'
      )
    }
  },
  methods: {
    handleClick () {
      this.$emit(
        'click'
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.retry-button
  margin-top: 1em !important
</style>
