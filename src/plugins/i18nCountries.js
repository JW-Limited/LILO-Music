import countries from 'i18n-iso-countries'
import {
  locales
} from '#/plugins/i18n/locales'

function addLocale (
  {
    id
  }
) {
  const locale =
    require(
      `i18n-iso-countries/langs/${id}.json`
    )

  countries.registerLocale(
    locale
  )
}

export default function () {
  locales.forEach(
    addLocale
  )
}
