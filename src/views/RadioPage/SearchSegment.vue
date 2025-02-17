<template>
  <BaseSegmentContainer>
    <div class="scope-select-container">
      <ScopeSelect
        :scope="scope"
        @select="handleScopeSelect"
      />

      <template
        v-if="scope"
      >
        <Component
          :is="searchComponent"
          v-if="!isTopScope"
          ref="input"
          class="search-container"
          @select="handleSearchSelect"
        />

        <BaseClearButton
          v-if="modelName"
          @click="handleClearButtonClick"
        />

        <Component
          :is="modelScopeSelectComponent"
          class="model-scope-select-container"
          @select="handleModelScopeSelect"
        />
      </template>
    </div>
  </BaseSegmentContainer>
</template>

<script>
import BaseSegmentContainer
  from '@/components/containers/segments/BaseSegmentContainer.vue'
import ScopeSelect from './SearchSegment/selects/ScopeSelect.vue'
import TopScopeSelect from './SearchSegment/selects/TopScopeSelect.vue'
import TagScopeSelect from './SearchSegment/selects/TagScopeSelect.vue'
import ArtistScopeSelect from './SearchSegment/selects/ArtistScopeSelect.vue'
import TagsSearchInput from './SearchSegment/inputs/TagsSearchInput.vue'
import ArtistsSearchInput from './SearchSegment/inputs/ArtistsSearchInput.vue'
import BaseClearButton from '@/components/buttons/BaseClearButton.vue'

export default {
  name: 'SearchSegment',
  components: {
    BaseSegmentContainer,
    ScopeSelect,
    TopScopeSelect,
    TagScopeSelect,
    ArtistScopeSelect,
    TagsSearchInput,
    ArtistsSearchInput,
    BaseClearButton
  },
  props: {
    scope: String,
    modelName: String
  },
  emits: [
    'scopeChange',
    'modelNameChange',
    'modelScopeChange'
  ],
  data () {
    return {
      searchComponents: {
        tag: 'TagsSearchInput',
        artist: 'ArtistsSearchInput'
      },
      modelScopeSelectComponents: {
        top: 'TopScopeSelect',
        tag: 'TagScopeSelect',
        artist: 'ArtistScopeSelect'
      }
    }
  },
  computed: {
    searchComponent () {
      return this.searchComponents[
        this.scope
      ]
    },
    modelScopeSelectComponent () {
      return this.modelScopeSelectComponents[
        this.scope
      ]
    },
    isTopScope () {
      return this.scope === 'top'
    }
  },
  methods: {
    async handleScopeSelect (
      value
    ) {
      this.$emit(
        'scopeChange',
        value
      )

      this.$emit(
        'modelNameChange',
        null
      )

      await this.$nextTick()

      this.focusInput()
    },
    handleSearchSelect (
      value
    ) {
      this.$emit(
        'modelNameChange',
        value
      )
    },
    handleClearButtonClick () {
      this.$emit(
        'modelNameChange',
        null
      )

      this.clearInput()

      this.focusInput()
    },
    handleModelScopeSelect (
      value
    ) {
      this.$emit(
        'modelScopeChange',
        value
      )
    },
    clearInput () {
      this.$refs
        .input
        .clear()
    },
    focusInput () {
      this.$refs
        .input
        ?.focus()
    }
  }
}
</script>

<style lang="sass" scoped>
.scope-select-container
  @extend .d-flex, .align-items-center

.search-container
  margin-left: 1em

.model-scope-select-container
  margin-left: 1em
</style>
