<template>
  <BaseButton
    v-if="isRender"
    class="basic circular compact add-button"
    icon="add"
    :text="addText"
    @click="handleClick"
  />
</template>

<script>
import {
  mapState
} from 'pinia'
import playerStore from '@/stores/player'
import BaseButton from '@/components/buttons/BaseButton.vue'
import {
  streamable as getStreamableSources
} from '@/helpers/formatters/sources'
import {
  updateGlobal as updateGlobalStore
} from '@/helpers/actions/store'

export default {
  name: 'AddButton',
  components: {
    BaseButton
  },
  data () {
    return {
      defaultAudioSource: 'vk'
    }
  },
  computed: {
    ...mapState(
      playerStore,
      {
        playerAudioSources: 'audioSources'
      }
    ),
    isRender () {
      return (
        this.playerAudioSourcesCount <
          this.streamableSourcesCount
      )
    },
    playerAudioSourcesCount () {
      return this.playerAudioSources.length
    },
    streamableSourcesCount () {
      return getStreamableSources().length
    },
    addText () {
      return this.$t(
        'actions.add'
      )
    }
  },
  methods: {
    handleClick () {
      const sources = [
        ...this.playerAudioSources,
        this.defaultAudioSource
      ]

      updateGlobalStore(
        {
          'player.audioSources': sources
        }
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.add-button
  align-self: flex-end
</style>
