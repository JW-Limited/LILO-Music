<template>
  <div class="option">
    <div class="option-header">
      <BaseButton
        class="red circular option-button"
        icon="delete"
        :text="deleteAccountText"
        :is-invertable="false"
        @click="handleDeleteButtonClick"
      />
    </div>

    <DeleteModal
      ref="modal"
    />
  </div>
</template>

<script>
import BaseButton from '@/components/buttons/BaseButton.vue'
import DeleteModal from './DeleteAccountOption/DeleteModal.vue'

export default {
  name: 'DeleteAccountOption',
  components: {
    BaseButton,
    DeleteModal
  },
  computed: {
    deleteAccountText () {
      return this.$t(
        'settings.options.profile.data.account.delete'
      )
    }
  },
  methods: {
    handleDeleteButtonClick () {
      this.showModal()
    },
    showModal () {
      this.$refs
        .modal
        .show()
    }
  }
}
</script>

<style lang="sass" scoped></style>
