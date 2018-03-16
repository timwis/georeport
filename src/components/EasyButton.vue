<template>
</template>

<script>
import omit from 'lodash/omit'
import L from 'leaflet'
import 'leaflet-easybutton'
import propsBinder from 'vue2-leaflet/src/utils/propsBinder'

export default {
  props: {
    contents: String,
    position: {
      type: String,
      default: 'topleft'
    }
  },
  mounted () {
    const callback = this.$emit.bind(this, 'click')
    const opts = omit(this.$props, 'contents')
    this.mapObject = L.easyButton(this.contents, callback, opts)
    if (this.$parent._isMounted) {
      this.deferredMountedTo(this.$parent.mapObject)
    }
  },
  methods: {
    deferredMountedTo (parent) {
      this.mapObject.addTo(parent)
    }
  }
}
</script>
