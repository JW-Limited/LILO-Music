<template>
  <BaseProfileFavoritesPageContainer
    ref="page"
    :profile-id="profileId"
    :scope="scope"
    :limit="limit"
    :order="order"
  >
    <template
      #default="pageSlotProps"
    >
      <BasePaginatedPageContainer
        :response-data="pageSlotProps.favoritesData"
        :is-loading="pageSlotProps.isLoading"
        :error="pageSlotProps.error"
        :scope="scope"
        :limit="limit"
        :order="order"
        :model="model"
        :is-with-top-segment="isWithTopSegment"
        :is-with-order-change="isWithOrderChange"
      >
        <template
          #default="slotProps"
        >
          <slot
            :[scope]="slotProps[scope]"
          />
        </template>
      </BasePaginatedPageContainer>
    </template>
  </BaseProfileFavoritesPageContainer>
</template>

<script>
import BaseProfileFavoritesPageContainer from './BaseProfileFavoritesPageContainer.vue'
import BasePaginatedPageContainer
  from '@/components/containers/pages/BasePaginatedPageContainer.vue'
import paginatedPageMixin from '@/mixins/paginatedPageMixin'

export default {
  name: 'BaseProfileFavoritesPaginatedPageContainer',
  components: {
    BaseProfileFavoritesPageContainer,
    BasePaginatedPageContainer
  },
  mixins: [
    paginatedPageMixin
  ],
  props: {
    profileId: String,
    scope: String,
    limit: Number,
    order: String,
    model: String,
    isWithTopSegment: Boolean,
    isWithOrderChange: Boolean
  }
}
</script>

<style lang="sass" scoped></style>
