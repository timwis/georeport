<template>
  <div id="application">
    <SiteHeader title="GeoReport"/>
    <router-view/>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader'

export default {
  components: {
    SiteHeader
  }
}
</script>

<style lang="sass">
$fa-font-path: '~font-awesome/fonts'
@import '~font-awesome/scss/font-awesome'
@import '~phila-standards/src/sass/phila-app'
</style>
