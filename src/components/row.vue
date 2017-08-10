<template>
  <div class="row">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@import '../_theme'

div.row
  padding-bottom: 15px
  margin: 0

  &:not(:first-child)
    box-shadow: inset 0 4px 7px -7px
    padding-top: 15px

  &:nth-child(even)
    background-color: $brand-colors-calm

div.content
  margin-left: auto
  margin-right: auto
  padding: 0 15px

@media (min-width: $screen-tablet-min)
  div.content
    width: 750px

@media (min-width: $screen-desktop-min)
  div.content
    width: 970px
</style>
