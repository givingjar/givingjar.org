<template>
  <section class="row">
    <slot></slot>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@import '../_theme'

section.row
  margin-left: auto
  margin-right: auto
  padding: 0 15px

  &:nth-child(even)
    background-color: $brand-colors-calm

@media (min-width: $screen-tablet-min)
  section.row
    width: 750px

@media (min-width: $screen-desktop-min)
  section.row
    width: 970px
</style>
