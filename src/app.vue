<template>
  <div id="app">
    <img src="static/img/giving-jar-icon-square.svg">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

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

#app
  text-align: center
  margin-top: 60px
</style>
