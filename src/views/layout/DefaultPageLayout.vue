<template>
  <TheElectronStoreObserver />

  <TheStoreObserver />

  <TheMediaKeysObserver />

  <ThePlayerObserver />

  <TheBackground />

  <TheNavbarPanel />

  <TheSidebarPanel />

  <TheQueuePanel />

  <ThePlayerVariantsPanel />

  <TheVisibleArea />

  <TheSearchModal />

  <TheScrollToTopButton
    :key="key"
  />

  <TheDonateModal />

  <div class="pusher">
    <TheLoaderDimmer />

    <TheView
      ref="view"
    />
  </div>
</template>

<script>
import TheElectronStoreObserver
  from '@/components/layout/observers/TheElectronStoreObserver.vue'
import TheStoreObserver
  from '@/components/layout/observers/TheStoreObserver.vue'
import TheMediaKeysObserver
  from '@/components/layout/observers/TheMediaKeysObserver.vue'
import ThePlayerObserver
  from '@/components/layout/observers/ThePlayerObserver.vue'
import TheBackground from '@/components/layout/TheBackground.vue'
import TheNavbarPanel from '@/components/layout/panels/TheNavbarPanel.vue'
import TheSidebarPanel from '@/components/layout/panels/TheSidebarPanel.vue'
import TheQueuePanel from '@/components/layout/panels/TheQueuePanel.vue'
import ThePlayerVariantsPanel
  from '@/components/layout/panels/ThePlayerVariantsPanel.vue'
import TheVisibleArea from '@/components/layout/TheVisibleArea.vue'
import TheSearchModal from '@/components/layout/modals/TheSearchModal.vue'
import TheScrollToTopButton from '@/components/layout/TheScrollToTopButton.vue'
import TheDonateModal from '@/components/layout/modals/TheDonateModal.vue'
import TheLoaderDimmer from '@/components/layout/TheLoaderDimmer.vue'
import TheView from '@/components/layout/TheView.vue'
import {
  generateKey
} from '#/helpers/utils'

export default {
  name: 'DefaultPageLayout',
  components: {
    TheElectronStoreObserver,
    TheStoreObserver,
    TheMediaKeysObserver,
    ThePlayerObserver,
    TheBackground,
    TheNavbarPanel,
    TheSidebarPanel,
    TheQueuePanel,
    ThePlayerVariantsPanel,
    TheVisibleArea,
    TheSearchModal,
    TheScrollToTopButton,
    TheDonateModal,
    TheLoaderDimmer,
    TheView
  },
  provide () {
    return {
      refreshPage: this.refreshPage
    }
  },
  data () {
    return {
      key: null
    }
  },
  watch: {
    $route: 'handleRouteChange'
  },
  methods: {
    handleRouteChange (
      value
    ) {
      this.key = generateKey()
    },
    refreshPage () {
      this.$refs
        .view
        .refresh()

      this.key = generateKey()
    }
  }
}
</script>

<style lang="sass" scoped></style>
