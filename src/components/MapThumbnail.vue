<template lang="pug">
  div.map-thumbnail-container
    div.map-thumbnail(ref='mapThumbnail')
    input(
      name='location'
      :required='required'
      :value='location'
    )
</template>

<script>
import L from 'leaflet'
import * as esri from 'esri-leaflet'

export default {
  props: {
    required: { type: Boolean },
    location: { type: Object, default: {} }
  },
  mounted () {
    if (this.location) {
      const map = this.initMap(this.location)
      this.addBasemap(map)
    }
  },
  methods: {
    initMap (location) {
      const el = this.$refs.mapThumbnail
      return L.map(el, {
        trackResize: false,
        attributionControl: false,
        zoomControl: false,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        dragging: false,
        tap: false,
        keyboard: false
      }).setView(location, 20)
    },
    addBasemap (map) {
      esri.tiledMapLayer({
        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',
        maxZoom: 20
      }).addTo(map)

      esri.tiledMapLayer({
        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer',
        maxZoom: 20
      }).addTo(map)
    }
  }
}
</script>

<style lang="sass" scoped>
.map-thumbnail-container
  position: relative

  .map-thumbnail
    height: 125px
    background-color: #f0f0f0
    position: relative
    color: black
    font-weight: 100
    z-index: 999

    &:after
      content: '+'
      font-size: 550%
      font-weight: 300
      position: absolute
      text-align: center
      top: 0
      bottom: 0
      left: 0
      right: 0
      z-index: 999

input
  position: absolute
  top: 0
  left: 0

  &:focus
    outline: none
</style>
