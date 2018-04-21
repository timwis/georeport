<template lang="pug">
  div#application
    SiteHeader
    router-view
</template>

<script>
import SiteHeader from './components/SiteHeader'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    SiteHeader
  }
}
</script>

<style lang="sass">
@import '~phila-standards/src/sass/phila-app'
</style>
