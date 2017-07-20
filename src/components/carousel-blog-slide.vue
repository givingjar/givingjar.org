<template>
  <figure slot="0">
    <img :src="imageUrl" :alt="title">
    <figcaption>
      <div class="summary">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
      <input type="button" value="Read More"></input>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    linkUrl: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus">
@import '../_theme'

figure
  margin: 0
  position: relative

  img
    border-radius: $control-border-radius
    display: block
    margin: 0 auto

figcaption
  font-size: 1.4rem
  margin: 1rem 0
  padding: 5px
  width: 100%

  input[type="button"]
    margin: 0 auto
    width: 50%

  h1
  h2
  h3
  h4
  h5
  h6
    line-height: 1
    margin: 1rem 0
    text-align: center

  p
    font-style: italic
    line-height: 1
    text-align: center

  .summary
    padding: 0
</style>
