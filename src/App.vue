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

<style src="../node_modules/phila-standards/dist/css/phila-app.min.css"></style>
<style lang="sass">
</style>
