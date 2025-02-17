<template>
  <div
    v-if="isRender"
    ref="modal"
    class="ui page modal main-modal"
    :class="size"
  >
    <slot />
  </div>
</template>

<script>
import {
  mapState
} from 'pinia'
import layoutStore from '@/stores/layout'
import {
  mainModalOptions
} from '@/helpers/formatters/semantic'
import {
  setModal,
  showModal,
  hideModal
} from '@/helpers/actions/plugins/semantic'
import {
  toggleClass
} from '@/helpers/actions/plugins/jquery'

export default {
  name: 'BaseModalContainer',
  props: {
    isImageModal: Boolean,
    isSettingsModal: Boolean,
    isSearchModal: Boolean,
    isMultiple: Boolean,
    size: {
      type: String,
      default: 'tiny'
    }
  },
  emits: [
    'show',
    'visible'
  ],
  data () {
    return {
      isCalled: false
    }
  },
  computed: {
    ...mapState(
      layoutStore,
      [
        'isDarkMode'
      ]
    ),
    isRender () {
      return (
        this.isCalled ||
          this.isImageModal ||
          this.isSettingsModal ||
          this.isSearchModal
      )
    },
    modalOptions () {
      return mainModalOptions(
        {
          isMultiple: this.isMultiple,
          onShow: this.handleShow,
          onVisible: this.handleVisible
        }
      )
    }
  },
  watch: {
    isDarkMode: 'handleIsDarkModeChange'
  },
  methods: {
    handleIsDarkModeChange () {
      this.toggleInvertedClass()
    },
    handleShow () {
      this.$emit(
        'show'
      )
    },
    handleVisible () {
      this.$emit(
        'visible'
      )
    },
    toggleInvertedClass () {
      toggleClass(
        this.$refs.modal,
        'inverted',
        this.isDarkMode
      )
    },
    async show () {
      if (!this.isCalled) {
        this.isCalled = true

        await this.$nextTick()

        setModal(
          this.$refs.modal,
          this.modalOptions
        )

        this.toggleInvertedClass()
      }

      showModal(
        this.$refs.modal
      )
    },
    hide () {
      hideModal(
        this.$refs.modal
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
