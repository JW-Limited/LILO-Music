<template>
  <BaseMenuContainer
    class="top fixed borderless the-navbar-panel"
  >
    <div class="ui container main-container">
      <NavbarSearchButton />

      <NavbarHistoryButton
        direction="back"
      />

      <NavbarNavigation />

      <NavbarHistoryButton
        direction="forward"
      />

      <NavbarRefreshButton />

      <NavbarQueueButton />
    </div>
  </BaseMenuContainer>
</template>

<script>
import BaseMenuContainer from '@/components/containers/BaseMenuContainer.vue'
import NavbarHistoryButton from './TheNavbarPanel/NavbarHistoryButton.vue'
import NavbarSearchButton from './TheNavbarPanel/NavbarSearchButton.vue'
import NavbarNavigation from './TheNavbarPanel/NavbarNavigation.vue'
import NavbarRefreshButton from './TheNavbarPanel/NavbarRefreshButton.vue'
import NavbarQueueButton from './TheNavbarPanel/NavbarQueueButton.vue'

export default {
  name: 'TheNavbarPanel',
  components: {
    BaseMenuContainer,
    NavbarHistoryButton,
    NavbarSearchButton,
    NavbarNavigation,
    NavbarRefreshButton,
    NavbarQueueButton
  }
}
</script>

<style lang="sass" scoped>
.the-navbar-panel
  @extend .no-border
  height: $navbarHeight
  z-index: 200 !important
  &.inverted
    border-bottom: $borderInverted !important
</style>
