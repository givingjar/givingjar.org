<template>
  <section id="carousel">
    <div class="all-slides">
      <div
        v-for="(slots, slotName, index) in $slots"
        v-show="index === activeSlide"
        class="slide"
        :class="{
          fadeInFromLeft: index === activeSlide && activeSlide < previousSlide,
          fadeInFromRight: index === activeSlide && activeSlide > previousSlide,
          fadeOutToLeft: index === previousSlide && activeSlide > previousSlide,
          fadeOutToRight: index === previousSlide && activeSlide < previousSlide
        }"
      >
        <slot :name="slotName"/>
      </div>
    </div>
    <nav>
      <input type="button" name="nav-left" value="Prev" @click="onPreviousSlide">
      <input type="button" name="nav-right" value="Next" @click="onNextSlide">
    </nav>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeSlide: 0,
      previousSlide: null,
      totalSlides: Object.keys(this.$slots).length
    }
  },
  methods: {
    onNextSlide (event) {
      if (this.activeSlide < this.totalSlides - 1) {
        this.previousSlide = this.activeSlide
        this.activeSlide += 1
      }
    },
    onPreviousSlide (event) {
      if (this.activeSlide > 0) {
        this.previousSlide = this.activeSlide
        this.activeSlide -= 1
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#carousel
  margin-bottom: 4rem

.all-slides
  align-items: center
  display: flex
  overflow: hidden

.slide
  animation-duration: 1s
  animation-fill-mode: both
  display: inline-block

nav
  display: block
  text-align: center
  width: 100%

  input[type="button"]
    cursor: pointer
    display: inline-block

//
// CAROUSEL ANIMATIONS
//

@keyframes fadeInFromLeft
  from
    opacity: 0
    transform: translate(-100%, 0)

  to
    opacity: 1
    transform: none

.fadeInFromLeft
  animation-name: fadeInFromLeft

@keyframes fadeInFromRight
  from
    opacity: 0
    transform: translate(100%, 0)

  to
    opacity: 1
    transform: none

.fadeInFromRight
  animation-name: fadeInFromRight

@keyframes fadeOutToLeft
  from
    opacity: 1

  to
    opacity: 0
    transform: translate(-100%, 0)

.fadeOutToLeft
  animation-name: fadeOutToLeft

@keyframes fadeOutToRight
  from
    opacity: 1

  to
    opacity: 0
    transform: translate(100%, 0)

.fadeOutToRight
  animation-name: fadeOutToRight
</style>
