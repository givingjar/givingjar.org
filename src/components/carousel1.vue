<template>
  <section id="carousel">
    <figure>
      <img src="https://blog.givingjar.org/img/spotlight/michigan-womens-historical-center/michigan-womens-historical-center.jpg" alt="Charity Spotlight: Michigan Women's Historical Center and Hall of Fame">
      <figcaption>
        <div class="summary">
          <h2>Charity Spotlight: Michigan Women's Historical Center and Hall of Fame</h2>
          <p>Supporting the equality of women by sharing their achievements in Michigan's history.</p>
        </div>
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
  background-color: rgba(0, 0, 0, .7)
  border-radius: $control-border-radius
  bottom: 0
  color: $brand-colors-bright
  font-size: 1.4rem
  margin: 0
  padding: 0
  position: absolute
  width: 100%

  button
  input
    border-top-left-radius: 0
    border-top-right-radius: 0
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
    margin: 0

  .summary
    padding: 5px
</style>
