<template>
  <section id="carousel" v-resize="updateHeight">
    <div id="all-slides">
      <div
        v-for="(slots, slotName, index) in $slots"
        class="slide"
        :class="{
          startSlide: index === activeSlide && !previousSlide,
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
import resize from 'vue-resize-directive'

export default {
  directives: {
    resize
  },
  created () {
    window.addEventListener('load', this.updateHeight)
  },
  data () {
    return {
      activeSlide: 0,
      previousSlide: null,
      totalSlides: Object.keys(this.$slots).length
    }
  },
  computed: {
    slideHeight () {
      return this.$slots
    }
  },
  methods: {
    onNextSlide () {
      if (this.activeSlide < this.totalSlides - 1) {
        this.previousSlide = this.activeSlide
        this.activeSlide += 1
      }
    },
    onPreviousSlide () {
      if (this.activeSlide > 0) {
        this.previousSlide = this.activeSlide
        this.activeSlide -= 1
      }
    },
    updateHeight () {
      let maxHeight = 0
      Object.keys(this.$slots).forEach(slotKey => {
        const slot = this.$slots[slotKey][0]
        if (slot.elm.clientHeight > maxHeight) {
          maxHeight = slot.elm.clientHeight
        }
      })
      document.getElementById('all-slides').style.height = maxHeight + 'px'
      const slides = document.getElementsByClassName('slide')
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.height = maxHeight + 'px'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#carousel
  margin-bottom: 2rem

#all-slides
  overflow: hidden
  position: relative
  white-space: nowrap

.slide
  animation-duration: 2s
  animation-fill-mode: both
  align-items: center
  display: flex
  opacity: 0
  position: absolute
  white-space: normal

.startSlide
  opacity: 1

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
