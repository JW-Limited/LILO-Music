<template>
  <BaseProfileDeleteFormContainer>
    <BaseHeader
      class="confirm-header"
      tag="h5"
      :text="confirmText"
    />

    <BaseProfilePasswordField
      ref="password"
    />

    <div class="submit-button-container">
      <BaseSubmitButton
        action-key="confirm"
      />
    </div>
  </BaseProfileDeleteFormContainer>
</template>

<script>
import BaseProfileDeleteFormContainer
  from '@/components/containers/forms/profile/BaseProfileDeleteFormContainer.vue'
import BaseHeader from '@/components/BaseHeader.vue'
import BaseProfilePasswordField
  from '@/components/fields/profile/BaseProfilePasswordField.vue'
import BaseSubmitButton from '@/components/buttons/BaseSubmitButton.vue'

export default {
  name: 'BaseProfileDeleteForm',
  components: {
    BaseProfileDeleteFormContainer,
    BaseHeader,
    BaseProfilePasswordField,
    BaseSubmitButton
  },
  computed: {
    confirmText () {
      return this.$t(
        'forms.confirm.password'
      )
    }
  },
  methods: {
    focus () {
      this.$refs
        .password
        .focus()
    }
  }
}
</script>

<style lang="sass" scoped>
.confirm-header
  margin-bottom: 0.75em !important
</style>
