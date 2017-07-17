<template>
  <section id="carousel">
    <figure>
      <img src="https://blog.givingjar.org/img/spotlight/lansing-symphony-orchestra/lansing-symphony-orchestra-conducting.jpg" alt="Charity Spotlight: Lansing Symphony Orchestra">
      <figcaption>
        <h2>Charity Spotlight: Lansing Sympony Orchestra</h2>
        <p>Dazzling audiences with great classical music and music education.</p>
        <input type="button" value="Read More"></input>
      </figcaption>
    </figure>
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
  width: 100%
  height: 67vw

figure
  margin: 0
  position: relative

  img
    border-radius: $control-border-radius
    display: block
    margin: 0 auto

figcaption
  background-color: rgba(0, 0, 0, 0.5)
  border-radius: $control-border-radius
  bottom: 0
  color: $brand-colors-bright
  font-size: 1.4rem
  margin: 0
  padding: 5px
  position: absolute
  width: 100%

  h1
  h2
  h3
  h4
  h5
  h6
    line-height: 1
    margin-bottom: 5px

  p
    line-height: 1
    margin-bottom: 8px
    margin-top: 0
</style>
