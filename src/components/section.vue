<template>
  <section>
    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@import '../_theme'

section
  padding-bottom: 15px
  margin: 0

  &:not(:first-child)
    box-shadow: inset 0 4px 7px -7px
    padding-top: 15px

  &:nth-child(even)
    background-color: $brand-colors-calm

  blockquote
    border-left: 2px solid $brand-colors-action
    padding-left: 10px

  h1
  h2
  h3
  h4
  h5
  h6
    text-align: center

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
