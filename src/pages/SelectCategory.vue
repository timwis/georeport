<template>
  <div class="row columns">
    <h1>What are you reporting?</h1>
    <ul>
      <li v-for="category in categories" :key="category.slug">
        <router-link :to="`/new/${category.slug}`" class="card card--overview equal">
          <div class="content-block">
            <h3>{{ category.title }}</h3>
            <p v-if="category.subtitle">{{ category.subtitle }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        { title: 'Graffiti', slug: 'graffiti' },
        // { title: 'Abandoned Vehicle', slug: 'abandoned-vehicle', subtitle: 'Including RVs' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
ul
  list-style: none
  margin: 0

  li
    width: 250px
    display: inline-block
    margin: 10px

    a
      margin: 0

      .content-block
        display: inline-block
</style>
