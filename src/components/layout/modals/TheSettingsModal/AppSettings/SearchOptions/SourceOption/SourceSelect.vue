<template>
  <BaseDropdownContainer
    class="main-source-select source-select"
    :selected="searchSource"
    @select="handleSelect"
  >
    <BaseSourcesList />
  </BaseDropdownContainer>
</template>

<script>
import {
  mapState
} from 'pinia'
import searchStore from '@/stores/search'
import BaseDropdownContainer
  from '@/components/containers/dropdowns/BaseDropdownContainer.vue'
import BaseSourcesList from '@/components/lists/sources/BaseSourcesList.vue'
import {
  updateGlobal as updateGlobalStore
} from '@/helpers/actions/store'

export default {
  name: 'SourceSelect',
  components: {
    BaseDropdownContainer,
    BaseSourcesList
  },
  computed: {
    ...mapState(
      searchStore,
      {
        searchSource: 'source'
      }
    )
  },
  methods: {
    handleSelect (
      value
    ) {
      updateGlobalStore(
        {
          'search.source': value
        }
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.source-select
  width: 200px !important

::v-deep(.menu)
  max-height: 200px !important
</style>
