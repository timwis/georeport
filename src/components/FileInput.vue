<template>
  <div>
    <label
      :for="id"
      class="button icon full-width">
      <div class="valign">
        <i class="fa valign-cell">
          <icon
            :name="icon"
            scale="2"/>
        </i>
        <div class="button-label valign-cell">
          <slot/>
        </div>
      </div>
    </label>
    <input
      :id="id"
      :name="id"
      :required="required"
      type="file"
      class="show-for-sr"
      @change="onChange"/>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'icon',
    'required'
  ],
  methods: {
    onChange (evt) {
      this.$emit('change', evt)
    }
  }
}
</script>

<style lang="sass" scoped>
.fa
  &:before
    content: ''
</style>
