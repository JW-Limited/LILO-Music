<template>
  <BaseSidebarItem
    icon="favorite"
    :text="favoritesText"
    :link="favoritesLink"
  />
</template>

<script>
import BaseSidebarItem from '@/components/BaseSidebarItem.vue'
import {
  main as formatProfileFavoritesMainLink
} from '@/helpers/formatters/links/profile/favorites'

export default {
  name: 'FavoritesItem',
  components: {
    BaseSidebarItem
  },
  props: {
    profileId: {
      type: String,
      required: true
    }
  },
  computed: {
    favoritesText () {
      return this.$t(
        'navigation.favorites'
      )
    },
    favoritesLink () {
      return formatProfileFavoritesMainLink(
        {
          profileId: this.profileId
        }
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
