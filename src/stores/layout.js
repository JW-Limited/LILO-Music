import {
  defineStore
} from 'pinia'

const data = {
  state () {
    return {
      loaderDimmer: null,
      playerPanel: null,
      queuePanel: null,
      searchModal: null,
      tabId: null,
      visibleContext: null,
      isDarkMode: false,
      isSwitchToNewTab: true,
      isQueuePanelVisible: false,
      isWithInfiniteScroll: false,
      navigationSections: [],
      backgroundImages: [],
      backgroundImageId: 0,
      backgroundImagePath: null,
      transparency: 0,
      isMaximizeOnStart: false,
      isExitOnClose: false,
      isCloseTabsOnExit: false,
      isWithSystemTheme: false,
      isWithArtistPopup: true,
      isCachePages: true,
      scale: 1
    }
  },
  actions: {
    setLoaderDimmer (
      value
    ) {
      this.loaderDimmer = value
    },
    setPlayerPanel (
      value
    ) {
      this.playerPanel = value
    },
    setQueuePanel (
      value
    ) {
      this.queuePanel = value
    },
    setNavigationSections (
      value
    ) {
      this.navigationSections = value
    },
    setIsQueuePanelVisible (
      value
    ) {
      this.isQueuePanelVisible = value
    },
    setVisibleContext (
      value
    ) {
      this.visibleContext = value
    },
    setIsDarkMode (
      value
    ) {
      this.isDarkMode = value
    },
    setTabId (
      value
    ) {
      this.tabId = value
    },
    setSearchModal (
      value
    ) {
      this.searchModal = value
    },
    setIsSwitchToNewTab (
      value
    ) {
      this.isSwitchToNewTab = value
    },
    setIsWithInfiniteScroll (
      value
    ) {
      this.isWithInfiniteScroll = value
    },
    setBackgroundImages (
      value
    ) {
      this.backgroundImages = value
    },
    setBackgroundImageId (
      value
    ) {
      this.backgroundImageId = value
    },
    setBackgroundImagePath (
      value
    ) {
      this.backgroundImagePath = value
    },
    setTransparency (
      value
    ) {
      this.transparency = value
    },
    setIsMaximizeOnStart (
      value
    ) {
      this.isMaximizeOnStart = value
    },
    setIsExitOnClose (
      value
    ) {
      this.isExitOnClose = value
    },
    setIsCloseTabsOnExit (
      value
    ) {
      this.isCloseTabsOnExit = value
    },
    setIsWithSystemTheme (
      value
    ) {
      this.isWithSystemTheme = value
    },
    setIsWithArtistPopup (
      value
    ) {
      this.isWithArtistPopup = value
    },
    setIsCachePages (
      value
    ) {
      this.isCachePages = value
    },
    setScale (
      value
    ) {
      this.scale = value
    }
  }
}

export default defineStore(
  'layout',
  data
)
