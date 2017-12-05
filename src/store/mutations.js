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
  state.draft.location.lat = location.lat
  state.draft.location.lng = location.lng
}
