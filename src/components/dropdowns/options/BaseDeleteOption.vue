<template>
  <BaseOption
    icon="delete"
    :text="deleteText"
    is-red
    @click="handleClick"
  />
</template>

<script>
import BaseOption from './BaseOption.vue'

export default {
  name: 'BaseDeleteOption',
  components: {
    BaseOption
  },
  emits: [
    'click'
  ],
  computed: {
    deleteText () {
      return this.$t(
        'actions.delete'
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

<style lang="sass" scoped></style>
