<template>
  <div :key="$route.fullPath">
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import './design'

*
  font-family: $design.base.font.family
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: $design.base.background.color
  color: $design.base.color

h1, h2, h3, h4, h5, h6
  font-family: $design.heading.font.family

a
  color: $design.brand.colors.action
  text-decoration: none
  &:hover
    color: darken($design.brand.colors.action, 15%)
    text-decoration: underline
</style>
