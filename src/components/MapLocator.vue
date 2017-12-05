<template lang="pug">
div.crosshairs
</template>

<script>
import L from 'leaflet'
import esri from 'esri-leaflet'
import 'leaflet-easybutton'

export default {
  props: [
    'location'
  ],
  data () {
    return {
      defaultLocation: [39.9523893, -75.1636291]
    }
  },
  mounted () {
    const map = this.initMap()
    this.addBasemap(map)
    this.addSaveButton(map)
    this.zoomToUserLocation(map)
    this.bindEvents(map)
  },
  methods: {
    initMap () {
      const center = this.location || this.defaultLocation
      return L.map(this.$el).setView(center, 20)
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
    },
    addSaveButton (map) {
      const contents = `<span>Save Location</span>`
      const callback = () => this.$emit('save', map.getCenter())
      const opts = { position: 'topright', id: 'save-button' }
      L.easyButton(contents, callback, opts).addTo(map)
    },
    zoomToUserLocation (map) {
      map.locate({
        enableHighAccuracy: true,
        maximumAge: 60000
      })
      map.on('locationfound', (evt) => {
        map.setView(evt.latlng, 20)
        // const radius = evt.accuracy / 2
        L.circle(evt.latlng, 1).addTo(map)
      })
    },
    bindEvents (map) {
      map.on('moveend', (evt) => this.$emit('moveend', evt))
    }
  }
}
</script>

<style lang="sass">
@import '~leaflet/dist/leaflet.css'

.crosshairs
  &:before, &:after
    content: ""
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    pointerEvents: none
    z-index: 999
  &:before
    bottom: 50%
    border-bottom: 1px #777 solid
  &:after
    right: 50%
    border-right: 1px #777 solid
</style>
