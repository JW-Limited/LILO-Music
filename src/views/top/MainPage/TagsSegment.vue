<template>
  <BaseTopPaginatedSegmentContainer
    :scope="scope"
    :limit="limit"
    :country="country"
    :header-link="headerLink"
  >
    <template
      #default="slotProps"
    >
      <BaseTagsSimpleList
        :tags="slotProps[scope]"
      />
    </template>
  </BaseTopPaginatedSegmentContainer>
</template>

<script>
import BaseTopPaginatedSegmentContainer
  from '@/components/containers/segments/top/BaseTopPaginatedSegmentContainer.vue'
import BaseTagsSimpleList from '@/components/lists/tags/BaseTagsSimpleList.vue'
import {
  tags as formatTopTagsLink
} from '@/helpers/formatters/links/top'

export default {
  name: 'TagsSegment',
  components: {
    BaseTopPaginatedSegmentContainer,
    BaseTagsSimpleList
  },
  props: {
    country: String
  },
  data () {
    return {
      limit: 20,
      scope: 'tags'
    }
  },
  computed: {
    headerLink () {
      return formatTopTagsLink(
        {
          country: this.country
        }
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
