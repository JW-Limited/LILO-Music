<template>
  <BaseSidebarItem
    icon="bookmark"
    :text="bookmarksText"
    :link="bookmarksLink"
  />
</template>

<script>
import BaseSidebarItem from '@/components/BaseSidebarItem.vue'
import {
  main as formatBookmarksMainLink
} from '@/helpers/formatters/links/bookmarks'

export default {
  name: 'BookmarksItem',
  components: {
    BaseSidebarItem
  },
  computed: {
    bookmarksText () {
      return this.$t(
        'navigation.bookmarks'
      )
    },
    bookmarksLink () {
      return formatBookmarksMainLink()
    }
  }
}
</script>

<style lang="sass" scoped></style>
