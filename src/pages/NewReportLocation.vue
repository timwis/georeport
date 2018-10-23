<template>
  <MapLocator
    :location="location"
    id="map"
    @save="onSave"/>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import MapLocator from '../components/MapLocator'

export default {
  props: {
    reportType: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      location: (state) => state.draft.location
    })
  },
  components: {
    MapLocator
  },
  methods: {
    onSave (location) {
      this.setLocation(location)
      this.$router.push(`/new/${this.reportType}`)
    },
    ...mapMutations({
      setLocation: 'SET_LOCATION'
    })
  }
}
</script>

<style lang="sass">
#map
  height: calc(100vh - 73px)
</style>
