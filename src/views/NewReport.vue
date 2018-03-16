<template lang="pug">
  div.row.columns
    form(@submit.prevent='onSubmit')
      label(for='location') Location
      router-link#location(to='/new/location')
        MapThumbnail(required :location='location')

      label(for='photo') Photo
      FileInput#photo(
        icon='camera'
        @change='onFileChange'
      ) Add photo

      ul.previews
        PhotoUploadPreview(
          v-for='photo, index in photos'
          :url='photo.url'
          :name='photo.name'
          @remove='removePhoto(index)'
        )

      label(for='comments') Comments
      input#comments(
        name='comments'
        type='text'
        v-model='comments'
        required
      )

      button.button.full-width(type='submit') Submit
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import MapThumbnail from '../components/MapThumbnail'
import FileInput from '../components/FileInput'
import PhotoUploadPreview from '../components/PhotoUploadPreview'

export default {
  computed: {
    ...mapState({
      photos: (state) => state.draft.photos,
      location: (state) => state.draft.location
    }),
    comments: {
      get () {
        return this.$store.state.draft.comments
      },
      set (value) {
        this.$store.commit('SET_COMMENTS', value)
      }
    }
  },
  components: {
    MapThumbnail,
    FileInput,
    PhotoUploadPreview
  },
  methods: {
    onFileChange (evt) {
      const fileInput = evt.target
      if (!fileInput.files || fileInput.files.length < 1) return

      const file = fileInput.files[0]
      const reader = new FileReader()
      reader.onload = (readerEvt) => {
        const photo = {
          name: file.name,
          url: readerEvt.target.result
        }
        this.$store.commit('ADD_PHOTO', photo)
      }
      reader.readAsDataURL(file)
    },
    onRemovePhoto (evt) {
      console.log('remove photo', evt)
    },
    onSubmit (evt) {
      console.log('submitted')
    },
    ...mapMutations({
      removePhoto: 'REMOVE_PHOTO'
    })
  }
}
</script>

<style lang="sass" scoped>
.previews
  list-style-type: none
  margin: 0
</style>
