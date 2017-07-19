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
