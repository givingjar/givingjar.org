<template>
  <section id="carousel">
    <div class="all-slides">
      <div class="slide" v-for="(slots, slotName) in $slots">
        <slot :name="slotName"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      slidesMax: 3
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../_theme'

#carousel
  margin-bottom: 4rem
  width: 100%

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

  button
  input
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
