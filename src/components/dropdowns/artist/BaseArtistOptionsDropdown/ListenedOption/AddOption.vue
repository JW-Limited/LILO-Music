<template>
  <BaseListenedOption
    action="add"
    :is-loading="isLoading"
    :is-error="isError"
    @click="handleClick"
  />
</template>

<script>
import BaseListenedOption
  from '@/components/dropdowns/options/listened/BaseListenedOption.vue'
import createListenedArtist from '@/helpers/actions/api/listened/artist/create'

export default {
  name: 'AddOption',
  components: {
    BaseListenedOption
  },
  inject: [
    'setListenedId'
  ],
  props: {
    artistData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      listenedId: null,
      isLoading: false,
      isError: false,
      isSuccess: false
    }
  },
  computed: {
    createArgs () {
      return {
        artistName: this.artistName
      }
    },
    artistName () {
      return this.artistData.name
    }
  },
  watch: {
    isSuccess: 'handleIsSuccessChange'
  },
  methods: {
    createListenedArtist,
    handleClick () {
      this.createListenedArtist(
        this.createArgs
      )
    },
    handleIsSuccessChange (
      value
    ) {
      if (value) {
        this.setListenedId(
          this.listenedId
        )
      }
    }
  }
}
</script>

<style lang="sass" scoped></style>
