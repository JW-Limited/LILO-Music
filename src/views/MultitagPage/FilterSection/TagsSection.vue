<template>
  <div class="tags-section">
    <div class="ui labels">
      <BaseFilterItemLabel
        v-for="tagData in tags"
        :key="tagData.uuid"
        :filter-item-data="tagData"
        @delete-icon-click="handleDeleteIconClick"
      />
    </div>
  </div>
</template>

<script>
import BaseFilterItemLabel from '@/components/labels/BaseFilterItemLabel.vue'

export default {
  name: 'TagsSection',
  components: {
    BaseFilterItemLabel
  },
  inject: [
    'deleteCollectionItem'
  ],
  props: {
    tags: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleDeleteIconClick (
      {
        uuid
      }
    ) {
      this.deleteCollectionItem(
        {
          collection: 'tags',
          uuid
        }
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.tags-section
  margin-top: 1em
</style>
