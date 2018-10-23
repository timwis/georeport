<template>
  <div class="row columns">
    <form @submit.prevent="onSubmit">
      <label for="location">Location</label>
      <router-link
        id="location"
        :to="`/new/${reportType}/location`">
        <MapThumbnail
          :location="location"
          required/>
      </router-link>

      <label for="photo">Photo</label>
      <FileInput
        id="photo"
        icon="camera"
        @change="onFileChange">
        Add photo
      </FileInput>

      <ul class="previews">
        <PhotoUploadPreview
          v-for="(photo, index) in photos"
          :key="photo.url"
          :url="photo.url"
          :name="photo.name"
          @remove="removePhoto(index)"/>
      </ul>

      <VueFormGenerator
        :model="customFields"
        :schema="schema"
        @model-updated="updateCustomField"/>

      <button
        type="submit"
        class="button full-width">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VueFormGenerator from 'vue-form-generator/dist/vfg-core'

import MapThumbnail from '../components/MapThumbnail'
import FileInput from '../components/FileInput'
import PhotoUploadPreview from '../components/PhotoUploadPreview'
import GraffitiSchema from '../schemas/graffiti'

const schemas = {
  graffiti: GraffitiSchema
}

export default {
  props: {
    reportType: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      customFields: Object.assign({}, this.$store.state.draft.customFields)
    }
  },
  computed: {
    ...mapState({
      photos: (state) => state.draft.photos,
      location: (state) => state.draft.location
    }),
    schema () {
      return schemas[this.reportType]
    }
  },
  components: {
    MapThumbnail,
    FileInput,
    PhotoUploadPreview,
    VueFormGenerator: VueFormGenerator.component
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
    onSubmit (evt) {
      console.log('submitted')
    },
    ...mapMutations({
      removePhoto: 'REMOVE_PHOTO',
      setCustomField: 'SET_CUSTOM_FIELD'
    }),
    updateCustomField (value, field) {
      this.setCustomField({ field, value })
    }
  }
}
</script>

<style lang="sass">
.previews
  list-style-type: none
  margin: 0

input[type=radio]
  appearance: none
  display: inline

  &:before
    display: inline-block
    padding-right: 10px
    content: ""
    font-family: FontAwesome

  &:checked:before
    content: ""

input[type=checkbox]
  appearance: none
  display: inline

  &:before
    display: inline-block
    padding-right: 10px
    content: ""
    font-family: FontAwesome

  &:checked:before
    content: ""
</style>
