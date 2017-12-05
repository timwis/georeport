<template lang="pug">
div
  label.button.icon.full-width(:for='id')
    div.valign
      i.fa.valign-cell
        icon(:name='icon' scale=2)
      div.button-label.valign-cell
        slot
  input.show-for-sr(
    :id='id'
    :name='id'
    type='file'
    @change='onChange'
    :required='required'
  )
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
