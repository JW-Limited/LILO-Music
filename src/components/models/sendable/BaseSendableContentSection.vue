<template>
  <div class="main-content-container">
    <div
      v-if="text"
      class="text main-text-container main-content-section"
      v-text="text"
    />

    <BaseImagesSimpleList
      v-if="images?.length"
      class="main-content-section"
      :images="images"
    />

    <BaseArtistsSimpleList
      v-if="artists?.length"
      class="main-content-section"
      :artists="artists"
      :is-with-self-icons="false"
      :is-paginated="false"
      is-with-listeners-count
      is-with-share-option
    />

    <BaseAlbumsSimpleList
      v-if="albums?.length"
      class="main-content-section"
      :albums="albums"
      :is-with-self-icons="false"
      is-with-artist-name
      is-with-listeners-count
      is-with-source
      is-with-share-option
    />

    <BaseTracksSimpleList
      v-if="tracks?.length"
      class="main-content-section"
      :tracks="tracks"
      :is-with-self-icons="false"
      is-with-image
      is-with-artist-name
      is-with-album-title
      is-with-source
      is-with-source-option
      is-with-playlist-option
      is-with-share-option
      is-with-queue-option
    />

    <BaseVideosEmbeddedList
      v-if="videos?.length"
      class="main-content-section"
      :videos="videos"
    />

    <BaseVideoPlaylistsSimpleList
      v-if="videoPlaylists?.length"
      class="main-content-section"
      :playlists="videoPlaylists"
      is-with-channel-title
      is-with-share-option
    />

    <BasePlaylistsSimpleList
      v-if="playlists?.length"
      class="main-content-section"
      :playlists="playlists"
      is-with-profile-nickname
      is-with-share-option
    />

    <BaseCommunitiesSimpleList
      v-if="communities?.length"
      class="main-content-section"
      :communities="communities"
      is-with-share-option
    />
  </div>
</template>

<script>
import BaseImagesSimpleList from '@/components/lists/images/BaseImagesSimpleList.vue'
import BaseArtistsSimpleList
  from '@/components/lists/artists/BaseArtistsSimpleList.vue'
import BaseAlbumsSimpleList
  from '@/components/lists/albums/BaseAlbumsSimpleList.vue'
import BaseTracksSimpleList
  from '@/components/lists/tracks/BaseTracksSimpleList.vue'
import BaseVideosEmbeddedList
  from '@/components/lists/videos/BaseVideosEmbeddedList.vue'
import BaseVideoPlaylistsSimpleList
  from '@/components/lists/videoPlaylists/BaseVideoPlaylistsSimpleList.vue'
import BasePlaylistsSimpleList
  from '@/components/lists/playlists/BasePlaylistsSimpleList.vue'
import BaseCommunitiesSimpleList
  from '@/components/lists/communities/BaseCommunitiesSimpleList.vue'

export default {
  name: 'BaseSendableContentSection',
  components: {
    BaseImagesSimpleList,
    BaseArtistsSimpleList,
    BaseAlbumsSimpleList,
    BaseTracksSimpleList,
    BaseVideosEmbeddedList,
    BaseVideoPlaylistsSimpleList,
    BasePlaylistsSimpleList,
    BaseCommunitiesSimpleList
  },
  props: {
    modelData: {
      type: Object,
      required: true
    }
  },
  computed: {
    text () {
      return this.modelData.text
    },
    images () {
      return this.modelData.attachments?.images
    },
    artists () {
      return this.modelData.attachments?.artists
    },
    albums () {
      return this.modelData.attachments?.albums
    },
    tracks () {
      return this.modelData.attachments?.tracks
    },
    videos () {
      return this.modelData.attachments?.videos
    },
    videoPlaylists () {
      return this.modelData.attachments?.video_playlists
    },
    playlists () {
      return this.modelData.attachments?.playlists
    },
    communities () {
      return this.modelData.attachments?.communities
    }
  }
}
</script>

<style lang="sass" scoped></style>
