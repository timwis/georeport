<template></template>

<script>
// Extends vue2-leaflet's TileLayer component. The only difference is
// the class used to instantiate `this.mapObject` in the `mounted` method.
// Once vue2-leaflet v0.0.59 is released, this component can be removed
// in favour of using the `tileLayerClass` prop of vue2-leaflet's TileLayer
// component, simply passing it a reference to esri.tiledMapLayer.
import { TileLayer } from 'vue2-leaflet'
import { tiledMapLayer } from 'esri-leaflet'
import eventsBinder from 'vue2-leaflet/src/utils/eventsBinder'
import propsBinder from 'vue2-leaflet/src/utils/propsBinder'

const events = [
  'loading',
  'tileunload',
  'tileloadstart',
  'tileerror',
  'tileload',
  'load',
  'add',
  'remove',
  'popupopen',
  'popupclose',
  'tooltipopen',
  'tooltipclose'
]

const props = {
  url: String,
  attribution: {
    type: String,
    custom: true
  },
  detectRetina: {
    type: Boolean,
    custom: false,
    default: false
  },
  token: {
    type: String,
    custom: true
  },
  opacity: {
    type: Number,
    custom: false,
    default: 1.0
  },
  zIndex: {
    type: Number,
    default: 1
  },
  options: {
    type: Object,
    default: function() {
      return {};
    }
  }
}

export default {
  extends: TileLayer,
  mounted () {
    const options = this.options
    const otherPropertytoInitialize = [ "attribution", "token", "detectRetina", "opacity", "zIndex" ]
    for (let i = 0; i < otherPropertytoInitialize.length; i++) {
      const propName = otherPropertytoInitialize[i]
      if(this[propName]) {
        options[propName] = this[propName]
      }
    }
    this.mapObject = tiledMapLayer(this.$props) // only change from default
    eventsBinder(this, this.mapObject, events)
    propsBinder(this, this.mapObject, props)
  }
}
</script>
