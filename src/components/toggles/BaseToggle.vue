<template>
  <div
    ref="checkbox"
    class="ui toggle checkbox main-toggle-checkbox"
    :class="{
      inverted: isDarkMode
    }"
  >
    <input type="checkbox">
  </div>
</template>

<script>
import {
  mapState
} from 'pinia'
import layoutStore from '@/stores/layout'
import {
  mainCheckboxOptions
} from '@/helpers/formatters/semantic'
import {
  setCheckbox,
  checkCheckbox
} from '@/helpers/actions/plugins/semantic'
import {
  updateGlobal as updateGlobalStore
} from '@/helpers/actions/store'

export default {
  name: 'BaseToggle',
  props: {
    isUpdateGlobalStore: {
      type: Boolean,
      default: true
    },
    storeKey: String,
    isChecked: Boolean
  },
  emits: [
    'isCheckedChange'
  ],
  computed: {
    ...mapState(
      layoutStore,
      [
        'isDarkMode'
      ]
    ),
    checkboxOptions () {
      return mainCheckboxOptions(
        {
          onChecked: this.handleOn,
          onUnchecked: this.handleOff
        }
      )
    }
  },
  watch: {
    isChecked: {
      immediate: true,
      handler: 'handleIsChecked'
    }
  },
  mounted () {
    setCheckbox(
      this.$refs.checkbox,
      this.checkboxOptions
    )
  },
  methods: {
    async handleIsChecked (
      value
    ) {
      await this.$nextTick()

      checkCheckbox(
        this.$refs.checkbox,
        value
      )
    },
    handleOn () {
      this.handleChange(
        true
      )
    },
    handleOff () {
      this.handleChange(
        false
      )
    },
    handleChange (
      value
    ) {
      if (this.isUpdateGlobalStore) {
        updateGlobalStore(
          {
            [this.storeKey]: value
          }
        )
      } else {
        this.$emit(
          'isCheckedChange',
          value
        )
      }
    }
  }
}
</script>

<style lang="sass" scoped></style>
