<template>
  <div
    v-if="wasOnline"
    class="main-profile-page-info was-online-section"
  >
    <small
      v-text="wasOnlineText"
    />

    <strong
      class="main-small-container"
    >
      <small
        v-text="wasOnlineDateFormatted"
      />
    </strong>

    <strong
      class="main-small-container"
    >
      <small
        v-text="wasOnlineTimeFormatted"
      />
    </strong>
  </div>
</template>

<script>
import {
  date as formatDate,
  time as formatTime
} from '@/helpers/formatters'

export default {
  name: 'WasOnlineSection',
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  computed: {
    wasOnline () {
      return this.profileData.was_online
    },
    wasOnlineText () {
      return this.$t(
        'profile.wasOnline'
      )
    },
    wasOnlineDateFormatted () {
      return formatDate(
        this.wasOnline
      )
    },
    wasOnlineTimeFormatted () {
      return formatTime(
        this.wasOnline
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.was-online-section
  margin-top: 0.25em
</style>
