<template>
  <div
    ref="accordion"
    class="ui accordion"
    :class="{
      inverted: isDarkMode
    }"
  >
    <div
      class="title"
      :class="{
        'text-color-white': isTextWhite
      }"
    >
      <BaseIcon
        icon="dropdown"
      />

      {{ title }}
    </div>

    <div class="content">
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'pinia'
import layoutStore from '@/stores/layout'
import BaseIcon from '@/components/icons/BaseIcon.vue'
import {
  setAccordion
} from '@/helpers/actions/plugins/semantic'
import {
  mainAccordionOptions
} from '@/helpers/formatters/semantic'

export default {
  name: 'BaseAccordionContainer',
  components: {
    BaseIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    isTextWhite: Boolean
  },
  emits: [
    'open',
    'close'
  ],
  computed: {
    ...mapState(
      layoutStore,
      [
        'isDarkMode'
      ]
    ),
    accordionOptions () {
      return mainAccordionOptions(
        {
          onOpen: this.handleOpen,
          onClose: this.handleClose
        }
      )
    }
  },
  mounted () {
    setAccordion(
      this.$refs.accordion,
      this.accordionOptions
    )
  },
  methods: {
    handleOpen () {
      this.$emit(
        'open'
      )
    },
    handleClose () {
      this.$emit(
        'close'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
