<template>
  <BaseProfilePaginatedPageContainer
    model="profileCommunity"
    :profile-id="profileId"
    :scope="scope"
    :limit="limit"
    :order="order"
    is-with-top-segment
    is-with-order-change
  >
    <template #top>
      <BaseLinkContainer
        :link="communitiesLink"
      >
        <BaseButton
          class="basic circular"
          :text="communitiesLinkText"
        />
      </BaseLinkContainer>
    </template>

    <template
      #default="slotProps"
    >
      <BaseCommunitiesSimpleList
        :communities="slotProps[scope]"
        is-with-created
        is-with-join-option
        is-with-share-option
      />
    </template>
  </BaseProfilePaginatedPageContainer>
</template>

<script>
import BaseProfilePaginatedPageContainer
  from '@/components/containers/pages/profile/BaseProfilePaginatedPageContainer.vue'
import BaseLinkContainer
  from '@/components/containers/links/BaseLinkContainer.vue'
import BaseButton from '@/components/buttons/BaseButton.vue'
import BaseCommunitiesSimpleList
  from '@/components/lists/communities/BaseCommunitiesSimpleList.vue'
import {
  communities as formatCommunitiesLink
} from '@/helpers/formatters/links'
import orderChangeMixin from '@/mixins/orderChangeMixin'

export default {
  name: 'CommunitiesPage',
  components: {
    BaseProfilePaginatedPageContainer,
    BaseLinkContainer,
    BaseButton,
    BaseCommunitiesSimpleList
  },
  mixins: [
    orderChangeMixin
  ],
  props: {
    profileId: String
  },
  data () {
    return {
      limit: 50,
      scope: 'communities',
      order: 'joinedDesc'
    }
  },
  computed: {
    communitiesLink () {
      return formatCommunitiesLink()
    },
    communitiesLinkText () {
      return this.$t(
        'links.communities'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
