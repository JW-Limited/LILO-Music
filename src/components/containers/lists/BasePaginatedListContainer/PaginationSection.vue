<template>
  <BaseDivider />

  <div class="main-pagination-container">
    <BaseMenuContainer
      class="small main-pagination"
    >
      <PreviousPageItem
        :is-disabled="isPreviousPageDisabled"
        @click="handlePreviousPageClick"
      />

      <template
        v-if="!isPaginationSimple"
      >
        <PageItem
          v-for="page in totalPages"
          :key="page"
          :page="page"
          :total-pages="totalPages"
          :active-page="clientPage"
          :is-disabled="isDisabled"
          @click="handlePageClick"
        />
      </template>

      <NextPageItem
        :is-disabled="isNextPageDisabled"
        @click="handleNextPageClick"
      />
    </BaseMenuContainer>
  </div>
</template>

<script>
import BaseDivider from '@/components/BaseDivider.vue'
import BaseMenuContainer from '@/components/containers/BaseMenuContainer.vue'
import PreviousPageItem from './PaginationSection/PreviousPageItem.vue'
import PageItem from './PaginationSection/PageItem.vue'
import NextPageItem from './PaginationSection/NextPageItem.vue'

export default {
  name: 'PaginationSection',
  components: {
    BaseDivider,
    BaseMenuContainer,
    PreviousPageItem,
    PageItem,
    NextPageItem
  },
  props: {
    isLoading: Boolean,
    isError: Boolean,
    clientPage: Number,
    totalPages: Number,
    isPaginationSimple: Boolean,
    isFirstPage: Boolean,
    isLastPage: Boolean
  },
  emits: [
    'pageClick',
    'previousPageClick',
    'nextPageClick'
  ],
  computed: {
    isPreviousPageDisabled () {
      return (
        this.isDisabled ||
          this.isFirstPage
      )
    },
    isDisabled () {
      return (
        this.isLoading ||
          this.isError
      )
    },
    isNextPageDisabled () {
      return (
        this.isDisabled ||
          this.isLastPage
      )
    }
  },
  methods: {
    handlePageClick (
      value
    ) {
      this.$emit(
        'pageClick',
        value
      )
    },
    handlePreviousPageClick () {
      this.$emit(
        'previousPageClick'
      )
    },
    handleNextPageClick () {
      this.$emit(
        'nextPageClick'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
