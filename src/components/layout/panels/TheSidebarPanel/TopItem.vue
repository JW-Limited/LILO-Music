<template>
  <BaseSidebarItem
    icon="top"
    :text="topText"
    :link="topLink"
  />
</template>

<script>
import BaseSidebarItem from '@/components/BaseSidebarItem.vue'
import {
  main as formatTopMainLink
} from '@/helpers/formatters/links/top'

export default {
  name: 'TopItem',
  components: {
    BaseSidebarItem
  },
  computed: {
    topText () {
      return this.$t(
        'navigation.top'
      )
    },
    topLink () {
      return formatTopMainLink()
    }
  }
}
</script>

<style lang="sass" scoped></style>
