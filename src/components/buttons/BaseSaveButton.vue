<template>
  <BaseButton
    class="primary circular fluid main-save-button"
    icon="save"
    :text="saveText"
    :is-invertable="false"
    @click="handleClick"
  />
</template>

<script>
import BaseButton from '@/components/buttons/BaseButton.vue'

export default {
  name: 'BaseSaveButton',
  components: {
    BaseButton
  },
  emits: [
    'click'
  ],
  computed: {
    saveText () {
      return this.$t(
        'actions.save'
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
