import layoutStore from '@/stores/layout'
import icons from '@/helpers/data/icons'

// Dimmer

export function setDimmer (
  element,
  options
) {
  $(
    element
  ).dimmer(
    options
  )
}

export function toggleDimmer (
  element,
  boolean
) {
  const value = boolean
    ? 'show'
    : 'hide'

  $(
    element
  ).dimmer(
    value
  )
}

// Modal

export function setModal (
  element,
  options
) {
  $(
    element
  ).modal(
    options
  )
}

export function showModal (
  element
) {
  $(
    element
  ).modal(
    'show'
  )
}

export function hideModal (
  element
) {
  $(
    element
  ).modal(
    'hide'
  )
}

// Search

export function setSearch (
  element,
  options
) {
  $(
    element
  ).search(
    options
  )
}

export function setSearchSource (
  element,
  source
) {
  $(
    element
  ).search(
    'setting',
    'source',
    source
  )
}

// Visibility

export function setVisibility (
  element,
  options
) {
  $(
    element
  ).visibility(
    options
  )
}

// Sidebar

export function setSidebar (
  element,
  options
) {
  $(
    element
  ).sidebar(
    options
  )
}

export function showSidebar (
  element
) {
  $(
    element
  ).sidebar(
    'show'
  )
}

export function hideSidebar (
  element
) {
  $(
    element
  ).sidebar(
    'hide'
  )
}

export function toggleSidebar (
  element
) {
  $(
    element
  ).sidebar(
    'toggle'
  )
}

// Seeker

export function setSeeker (
  element,
  options
) {
  $(
    element
  ).slider(
    options
  )
}

export function setSeekerValue (
  element,
  value
) {
  $(
    element
  ).slider(
    'set value',
    value
  )
}

// Popup

export function setPopup (
  element,
  options
) {
  $(
    element
  ).popup(
    options
  )
}

export function repositionPopup (
  element
) {
  try {
    $(
      element
    ).popup(
      'reposition'
    )
  } catch {
    return false
  }
}

export function hidePopup (
  element
) {
  $(
    element
  ).popup(
    'hide'
  )
}

export function destroyPopup (
  element
) {
  $(
    element
  ).popup(
    'destroy'
  )
}

// Dropdown

export function setDropdown (
  element,
  options
) {
  $(
    element
  ).dropdown(
    options
  )
}

export function setDropdownValue (
  element,
  value
) {
  $(
    element
  ).dropdown(
    'set selected',
    value,
    null,
    true
  )
}

export function resetDropdown (
  element
) {
  $(
    element
  ).dropdown(
    'restore defaults'
  )
}

// Checkbox

export function setCheckbox (
  element,
  options
) {
  $(
    element
  ).checkbox(
    options
  )
}

export function checkCheckbox (
  element,
  boolean
) {
  const value = boolean
    ? 'check'
    : 'uncheck'

  $(
    element
  ).checkbox(
    value
  )
}

// Video

export function setVideo (
  element,
  options
) {
  $(
    element
  ).embed(
    options
  )
}

// Form

export function setForm (
  element,
  options
) {
  $(
    element
  ).form(
    options
  )
}

export function addFormFieldError (
  element,
  field,
  error
) {
  $(
    element
  ).form(
    'add prompt',
    field,
    error
  )
}

// Calendar

export function setCalendar (
  element,
  options
) {
  $(
    element
  ).calendar(
    options
  )
}

export function resetCalendar (
  element
) {
  $(
    element
  ).calendar(
    'clear'
  )
}

// Accordion

export function setAccordion (
  element,
  options
) {
  $(
    element
  ).accordion(
    options
  )
}

// Progress

export function setProgress (
  element,
  options
) {
  $(
    element
  ).progress(
    options
  )
}

export function resetProgress (
  element
) {
  $(
    element
  ).progress(
    'reset'
  )
  $(
    element
  ).progress(
    'remove success'
  )
  $(
    element
  ).progress(
    'remove error'
  )
}

export function setProgressTotalCount (
  element,
  value
) {
  $(
    element
  ).progress(
    'set total',
    value
  )
}

export function incrementProgress (
  element
) {
  $(
    element
  ).progress(
    'increment'
  )
}

export function setProgressValue (
  element,
  value
) {
  $(
    element
  ).progress(
    'set progress',
    value
  )
}

// Toast

export function setToast (
  {
    message,
    status
  }
) {
  const {
    visibleContext,
    isDarkMode
  } = layoutStore()

  const className = isDarkMode
    ? 'inverted'
    : ''

  const successIcon =
    `green ${icons.success}`

  const statusIcons = {
    success: successIcon
  }

  const icon =
    statusIcons[
      status
    ]

  $(
    'body'
  ).toast(
    {
      showIcon: icon,
      context: visibleContext,
      class: className,
      message
    }
  )
}

// Utils

export function numberToColumnWidth (
  value
) {
  const data = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen'
  }

  return data[value]
}
