import patchRequest from '@/helpers/actions/api/request/patch'

export default function (
  {
    communityId,
    postId,
    text,
    byCommunity,
    images,
    artists,
    albums,
    tracks,
    videos,
    videoPlaylists,
    playlists,
    communities
  }
) {
  this.newPostData = null

  const url =
    `/communities/${communityId}/posts/${postId}`

  const params = {
    text,
    by_community: byCommunity,
    images,
    artists,
    albums,
    tracks,
    videos,
    video_playlists:
      videoPlaylists,
    playlists,
    communities
  }

  const handleSuccess = (
    response
  ) => {
    this.newPostData =
      response.data.post
  }

  const handleError = (
    error
  ) => {
    this.error = error
  }

  return patchRequest.bind(
    this
  )(
    {
      url,
      params,
      isWithSelfId: true,
      isWithSelfToken: true,
      onSuccess: handleSuccess,
      onError: handleError
    }
  )
}
