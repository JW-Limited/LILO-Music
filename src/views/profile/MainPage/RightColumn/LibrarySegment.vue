<template>
  <BaseProfileSegmentContainer
    scope="library"
    :header-link="headerLink"
    :is-get-data="false"
  >
    <CompatibilitySegment
      v-if="isRenderCompatibility"
      :profile-id="profileId"
      :profile-nickname="profileNickname"
    />

    <StatisticsSegment
      :profile-id="profileId"
    />

    <LibraryTabsSegment
      :profile-id="profileId"
    />
  </BaseProfileSegmentContainer>
</template>

<script>
import {
  mapState
} from 'pinia'
import profileStore from '@/stores/profile'
import BaseProfileSegmentContainer
  from '@/components/containers/segments/profile/BaseProfileSegmentContainer.vue'
import CompatibilitySegment from './LibrarySegment/CompatibilitySegment.vue'
import StatisticsSegment from './LibrarySegment/StatisticsSegment.vue'
import LibraryTabsSegment from './LibrarySegment/LibraryTabsSegment.vue'
import {
  isCurrentProfile
} from '@/helpers/utils'
import {
  main as formatProfileLibraryMainLink
} from '@/helpers/formatters/links/profile/library'

export default {
  name: 'LibrarySegment',
  components: {
    BaseProfileSegmentContainer,
    CompatibilitySegment,
    StatisticsSegment,
    LibraryTabsSegment
  },
  props: {
    profileId: {
      type: String,
      required: true
    },
    profileNickname: String
  },
  computed: {
    ...mapState(
      profileStore,
      {
        currentProfileId: 'id'
      }
    ),
    isSelf () {
      return isCurrentProfile(
        this.profileId
      )
    },
    headerLink () {
      return formatProfileLibraryMainLink(
        {
          profileId: this.profileId
        }
      )
    },
    isRenderCompatibility () {
      return (
        this.currentProfileId &&
          !this.isSelf
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
