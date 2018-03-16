<template lang="pug">
  Map.crosshairs(
    :zoom='defaultZoom'
    :center='location || defaultLocation'
    ref='map'
  )
    EsriTileLayer(:url='basemap')
    EsriTileLayer(:url='labels')
    EasyButton(
      contents='<span>Save Location</span>'
      position='topright'
      @click='onClickSave'
    )
</template>

<script>
import { Map } from 'vue2-leaflet'
import EsriTileLayer from './EsriTileLayer'
import EasyButton from './EasyButton'

export default {
  components: {
    Map,
    EsriTileLayer,
    EasyButton
  },
  props: {
    location: Object
  },
  data () {
    return {
      defaultZoom: 13,
      defaultLocation: [39.9523893, -75.1636291],
      basemap: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',
      labels: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer'
    }
  },
  methods: {
    onClickSave () {
      const center = this.$refs.map.mapObject.getCenter()
      this.$emit('save', center)
    }
  }
}
</script>

<style lang="sass">
@import "~leaflet/dist/leaflet.css"

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
