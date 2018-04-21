<template functional>
  <li class="photo-preview">
    <img
      :src="props.url"
      :alt="props.name"/>
    <button
      class="close-button"
      @click.prevent="listeners.remove">
      X
    </button>
  </li>
</template>

<style lang="sass">
.photo-preview
  display: inline-block
  margin: 5px
  border: 1px black solid
  position: relative

  img
    width: 75px
    height: 75px
    object-fit: cover

  .close-button
    position: absolute
    top: 0
    right: 0
</style>
