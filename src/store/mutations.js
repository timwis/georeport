import Vue from 'vue'

export function SET_COMMENTS (state, value) {
  state.draft.comments = value
}

export function ADD_PHOTO (state, photo) {
  state.draft.photos.push(photo)
}

export function REMOVE_PHOTO (state, index) {
  Vue.delete(state.draft.photos, index)
}

export function SET_LOCATION (state, location) {
  state.draft.location = location
}

export function SET_CUSTOM_FIELD (state, { field, value }) {
  state.draft.customFields[field] = value
}
