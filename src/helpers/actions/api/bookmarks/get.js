import profileStore from '@/stores/profile'
import getRequest from '@/helpers/actions/api/request/get'

export default function (
  {
    scope = '',
    page,
    limit,
    order
  }
) {
  const profileId = profileStore().id

  const url =
    `/profiles/${profileId}/bookmarks/${scope}`

  const handleSuccess = (
    response
  ) => {
    this.bookmarksData =
      response.data.profile.bookmarks
  }

  return getRequest.bind(
    this
  )(
    {
      url,
      page,
      limit,
      order,
      isWithSelfToken: true,
      onSuccess: handleSuccess
    }
  )
}
