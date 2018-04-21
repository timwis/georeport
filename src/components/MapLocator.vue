<template>
  <LMap
    :zoom="defaultZoom"
    :center="location || defaultLocation"
    ref="map"
    class="crosshairs"
    @locationfound="onLocationFound">
    <LTileLayer
      :url="basemap"
      :tile-layer-class="esriTileLayer"/>
    <LTileLayer
      :url="labels"
      :tile-layer-class="esriTileLayer"/>
    <LCircleMarker
      v-if="userLocation"
      :lat-lng="userLocation"/>
    <EasyButton
      contents="<span>Save Location</span>"
      position="topright"
      @click="onClickSave"/>
  </LMap>
</template>

<script>
import { LMap, LTileLayer, LCircleMarker } from 'vue2-leaflet'
import { tiledMapLayer as EsriTileLayer } from 'esri-leaflet'
import EasyButton from './EasyButton'

const TILES_BASEMAP = process.env.VUE_APP_TILES_BASEMAP
const TILES_LABELS = process.env.VUE_APP_TILES_LABELS

export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
    EasyButton
  },
  props: {
    location: Object
  },
  data () {
    return {
      defaultZoom: 13,
      defaultLocation: [39.9523893, -75.1636291],
      userLocation: null,
      basemap: TILES_BASEMAP,
      labels: TILES_LABELS,
      esriTileLayer: (url, options) => EsriTileLayer({ url, ...options })
    }
  },
  mounted () {
    const map = this.$refs.map.mapObject
    map.locate({
      enableHighAccuracy: true,
      maximumAge: 60000
    })
  },
  methods: {
    onClickSave () {
      const center = this.$refs.map.mapObject.getCenter()
      this.$emit('save', center)
    },
    onLocationFound (event) {
      this.userLocation = event.latlng
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
