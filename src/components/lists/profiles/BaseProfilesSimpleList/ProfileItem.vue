<template>
  <BaseLinkContainer
    class="item main-simple-list-item"
    :link="profileMainLink"
    @click="handleLinkClick"
  >
    <div class="image-container">
      <BaseProfileOnlineLabel
        class="online-label"
        :profile-data="profileData"
      />

      <BaseImage
        class="circular bordered"
        model="profile"
        :image="imageData?.extrasmall"
      />
    </div>

    <div class="content">
      <div class="nickname-label-container">
        <BaseHeader
          tag="h4"
          class="link"
          :text="nickname"
        />

        <BasePrivateIcon
          v-if="isPrivate"
        />

        <BaseLabel
          v-if="isStaff"
          class="primary circular small role-label"
          :text="roleText"
          :is-invertable="false"
        />
      </div>

      <div class="description">
        <small class="extra-data-section">
          <BaseProfileGenderAge
            class="extra-data-item"
            :profile-data="profileData"
          />

          <BaseProfileCityCountry
            class="extra-data-item city-country-item"
            :profile-data="profileData"
          />
        </small>
      </div>

      <div class="description">
        <small>
          <BaseProfileFollowCounters
            class="follow-counters"
            :profile-data="profileData"
          />
        </small>
      </div>
    </div>

    <BaseProfileFollowingMessage
      v-if="otherProfileData"
      class="following-message"
      :other-profile-data="otherProfileData"
      is-small
    />

    <BaseCreatedSection
      v-if="isWithCreated"
      class="description right"
      :model-data="profileData"
    />

    <BaseProfileOptionsDropdown
      v-if="!isSelf"
      :profile-data="profileData"
      is-with-follow-option
      is-with-message-option
    />
  </BaseLinkContainer>
</template>

<script>
import BaseLinkContainer
  from '@/components/containers/links/BaseLinkContainer.vue'
import BaseImage from '@/components/images/BaseImage.vue'
import BaseHeader from '@/components/BaseHeader.vue'
import BasePrivateIcon from '@/components/icons/BasePrivateIcon.vue'
import BaseProfileOnlineLabel
  from '@/components/models/profile/BaseProfileOnlineLabel.vue'
import BaseLabel from '@/components/labels/BaseLabel.vue'
import BaseProfileGenderAge
  from '@/components/models/profile/BaseProfileGenderAge.vue'
import BaseProfileCityCountry
  from '@/components/models/profile/BaseProfileCityCountry.vue'
import BaseProfileFollowCounters
  from '@/components/models/profile/BaseProfileFollowCounters.vue'
import BaseProfileFollowingMessage
  from '@/components/models/profile/BaseProfileFollowingMessage.vue'
import BaseCreatedSection from '@/components/sections/BaseCreatedSection.vue'
import BaseProfileOptionsDropdown
  from '@/components/dropdowns/profile/BaseProfileOptionsDropdown.vue'
import {
  main as formatProfileMainLink
} from '@/helpers/formatters/links/profile'
import {
  isCurrentProfile
} from '@/helpers/utils'

export default {
  name: 'ProfileItem',
  components: {
    BaseLinkContainer,
    BaseImage,
    BaseHeader,
    BasePrivateIcon,
    BaseProfileOnlineLabel,
    BaseLabel,
    BaseProfileGenderAge,
    BaseProfileCityCountry,
    BaseProfileFollowCounters,
    BaseProfileFollowingMessage,
    BaseCreatedSection,
    BaseProfileOptionsDropdown
  },
  provide () {
    return {
      setIsFollowing: this.setIsFollowing,
      setFollowersCount: this.setFollowersCount
    }
  },
  inject: {
    findPaginationItem: {
      default: () => false
    }
  },
  props: {
    profileData: {
      type: Object,
      required: true
    },
    isWithCreated: Boolean
  },
  emits: [
    'linkClick'
  ],
  computed: {
    profileMainLink () {
      return formatProfileMainLink(
        {
          profileId: this.profileId
        }
      )
    },
    profileId () {
      return this.profileData.id.toString()
    },
    imageData () {
      return this.profileData.image
    },
    nickname () {
      return this.profileData.nickname
    },
    isStaff () {
      return this.role === 'creator'
    },
    role () {
      return this.profileData.role
    },
    roleText () {
      return this.$t(
        `roles.${this.role}`
      )
    },
    isSelf () {
      return isCurrentProfile(
        this.profileId
      )
    },
    otherProfileData () {
      return this.profileData.other_profile
    },
    paginationItem () {
      return this.findPaginationItem(
        {
          uuid: this.uuid
        }
      )
    },
    uuid () {
      return this.profileData.uuid
    },
    isPrivate () {
      return this.profileData.private
    }
  },
  methods: {
    handleLinkClick () {
      this.$emit(
        'linkClick'
      )
    },
    setIsFollowing (
      value
    ) {
      this.paginationItem
        .other_profile
        .follower_of_profile = value
    },
    setFollowersCount (
      value
    ) {
      this.paginationItem.followers_count = value
    }
  }
}
</script>

<style lang="sass" scoped>
.image-container
  @extend .relative

.online-label
  @extend .absolute
  right: 0
  z-index: 1

.nickname-label-container
  @extend .d-flex, .align-items-center

.role-label
  margin-left: 0.75em

.description
  margin-top: 0.15em

.follow-counters
  @extend .d-flex
  ::v-deep(.following)
    margin-left: 0.75em

.following-message
  @extend .align-self-center
  margin-left: 0.75em

.extra-data-section
  @extend .d-flex, .align-items-center

.extra-data-item
  &:not(:first-child)
    margin-left: 0.5em

.city-country-item
  @extend .d-flex, .align-items-center
</style>
