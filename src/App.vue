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
@import '~phila-standards/src/sass/phila-app'
</style>
