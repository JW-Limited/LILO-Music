<template>
  <BaseSegmentContainer>
    <BaseMessage
      class="success code-sent-message"
      icon="success"
      :header="codeSentText"
    />

    <BaseProfilePasswordUpdateFormContainer
      :email="email"
    >
      <BaseProfilePasswordResetCodeField
        ref="code"
      />

      <BaseProfilePasswordField />

      <BaseProfilePasswordConfirmationField />

      <div class="submit-button-container">
        <BaseSubmitButton
          action-key="save"
        />
      </div>
    </BaseProfilePasswordUpdateFormContainer>
  </BaseSegmentContainer>
</template>

<script>
import BaseSegmentContainer
  from '@/components/containers/segments/BaseSegmentContainer.vue'
import BaseMessage from '@/components/messages/BaseMessage.vue'
import BaseProfilePasswordUpdateFormContainer
  from '@/components/containers/forms/profile/BaseProfilePasswordUpdateFormContainer.vue'
import BaseProfilePasswordResetCodeField
  from '@/components/fields/profile/BaseProfilePasswordResetCodeField.vue'
import BaseProfilePasswordField
  from '@/components/fields/profile/BaseProfilePasswordField.vue'
import BaseProfilePasswordConfirmationField
  from '@/components/fields/profile/BaseProfilePasswordConfirmationField.vue'
import BaseSubmitButton from '@/components/buttons/BaseSubmitButton.vue'

export default {
  name: 'UpdateFormSegment',
  components: {
    BaseSegmentContainer,
    BaseMessage,
    BaseProfilePasswordUpdateFormContainer,
    BaseProfilePasswordResetCodeField,
    BaseProfilePasswordField,
    BaseProfilePasswordConfirmationField,
    BaseSubmitButton
  },
  props: {
    email: String
  },
  computed: {
    codeSentText () {
      return this.$t(
        'passwordReset.code.sent'
      )
    }
  },
  mounted () {
    this.focusCode()
  },
  methods: {
    focusCode () {
      this.$refs
        .code
        .focus()
    }
  }
}
</script>

<style lang="sass" scoped>
.code-sent-message
  margin-bottom: 1em !important
</style>
