<template>
  <div class="option">
    <BaseHeader
      class="option-header"
      tag="h4"
      :text="headerText"
    />

    <BaseToggle
      store-key="player.isWithDiscordRichPresence"
      :is-checked="isPlayerWithDiscordRichPresence"
    />
  </div>

  <BaseMessage
    class="client-message"
    icon="infoCircle"
    :content="messageText"
  />
</template>

<script>
import {
  mapState
} from 'pinia'
import playerStore from '@/stores/player'
import BaseHeader from '@/components/BaseHeader.vue'
import BaseToggle from '@/components/toggles/BaseToggle.vue'
import BaseMessage from '@/components/messages/BaseMessage.vue'

export default {
  name: 'RichPresenceOption',
  components: {
    BaseHeader,
    BaseToggle,
    BaseMessage
  },
  computed: {
    ...mapState(
      playerStore,
      {
        isPlayerWithDiscordRichPresence:
          'isWithDiscordRichPresence'
      }
    ),
    headerText () {
      return this.$t(
        'settings.options.services.discord.richPresence.header'
      )
    },
    messageText () {
      return this.$t(
        'settings.options.services.discord.richPresence.client'
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.client-message
  margin-top: 1.5em !important
</style>
