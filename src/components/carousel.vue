<template>
  <div id="carousel" v-resize="updateHeight">
    <div id="all-slides" :style="{ height: tallestSlideHeight }">
      <div
        v-for="(slots, slotName, index) in $slots"
        :id="'slide-' + index"
        class="slide"
        :class="{
          activeSlide: index === activeSlide,
          startSlide: index === activeSlide && !previousSlide,
          fadeInFromLeft: index === activeSlide && isDirectionPrevious(),
          fadeInFromRight: index === activeSlide && isDirectionNext(),
          fadeOutToLeft: index === previousSlide && isDirectionNext(),
          fadeOutToRight: index === previousSlide && isDirectionPrevious()
        }"
        :style="{ height: tallestSlideHeight }"
      >
        <slot :name="slotName"/>
      </div>
    </div>
    <nav>
      <div>
        <a
          id="show-previous-slide"
          @click="showPreviousSlide"
          aria-label="Click, tap, or press left to show the previous slide"
          title="Click, tap, or press left to show the previous slide"
        >
          <span class="fa fa-arrow-left fa-lg" aria-hidden="true"></span>
        </a>
        <a
          v-for="(slots, slotName, index) in $slots"
          :id="'show-slide-' + index"
          @click="showSpecificSlide(index)"
          :aria-label="'View slide ' + (index + 1)"
          :title="'View slide ' + (index + 1)"
          class="picker"
          :class="{
            startPicker: index === activeSlide && !previousSlide,
            fadeInPicker: index === activeSlide && previousSlide !== null,
            fadeOutPicker: index === previousSlide
          }"
        >
        </a>
        <a
          id="show-next-slide"
          @click="showNextSlide"
          aria-label="Click, tap, or press right to show the next slide"
          title="Click, tap, or press right to show the next slide"
        >
          <span class="fa fa-arrow-right fa-lg" aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  </div>
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
  mounted () {
    this.resumeAutoSlideTimer()
    window.addEventListener('keyup', this.handleKeyUpEvents)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.handleKeyUpEvents)
  },
  data () {
    return {
      activeSlide: 0,
      autoSlideTimer: null,
      direction: null,
      previousSlide: null,
      tallestSlideHeight: '0',
      totalSlides: Object.keys(this.$slots).length
    }
  },
  methods: {
    handleKeyUpEvents (event) {
      if (event.keyCode === 37) {
        this.showPreviousSlide()
      } else if (event.keyCode === 39) {
        this.showNextSlide()
      }
    },
    isDirectionNext () {
      return this.direction === 'next'
    },
    isDirectionPrevious () {
      return this.direction === 'prev'
    },
    pauseAutoSlideTimer () {
      if (this.autoSlideTimer) {
        clearInterval(this.autoSlideTimer)
        this.autoSlideTimer = null
      }
    },
    resumeAutoSlideTimer () {
      this.pauseAutoSlideTimer()
      this.autoSlideTimer = setInterval(this.showNextSlide, 8000)
    },
    setDirectionNext () {
      this.direction = 'next'
    },
    setDirectionPrevious () {
      this.direction = 'prev'
    },
    showNextSlide () {
      const nextSlide = this.activeSlide < this.totalSlides - 1
        ? this.activeSlide + 1
        : 0

      this.showSpecificSlide(nextSlide)
      this.setDirectionNext()
    },
    showPreviousSlide () {
      const previousSlide = this.activeSlide > 0
        ? this.activeSlide - 1
        : this.totalSlides - 1

      this.showSpecificSlide(previousSlide)
      this.setDirectionPrevious()
    },
    showSpecificSlide (selectedSlide) {
      if (this.activeSlide !== selectedSlide) {
        this.previousSlide = this.activeSlide
        this.activeSlide = selectedSlide

        if (this.activeSlide > this.previousSlide) {
          this.setDirectionNext()
        } else {
          this.setDirectionPrevious()
        }

        this.resumeAutoSlideTimer()
      }
    },
    updateHeight () {
      const heights = Object.keys(this.$slots)
        .map(slotKey => this.$slots[slotKey][0].elm.clientHeight)
      this.tallestSlideHeight = Math.max(...heights) + 'px'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../_theme'

$animation-duration = 2s

#all-slides
  display: flex
  justify-content: center
  overflow: visible
  position: relative
  white-space: nowrap

.activeSlide
  z-index: 100000

.picker
  animation-duration: $animation-duration
  animation-fill-mode: both
  border: 2px solid $brand-colors-action
  border-radius: 50%
  display: inline-block
  height: 1.5rem
  margin: 0 .5rem
  vertical-align: middle
  width: 1.5rem

  &:hover
    border: 2px solid $brand-colors-action-dark

.slide
  animation-duration: $animation-duration
  animation-fill-mode: both
  align-items: center
  display: flex
  opacity: 0
  padding: 0 5px
  position: absolute
  white-space: normal

.startPicker
  background-color: $brand-colors-action

.startSlide
  opacity: 1

nav
  padding: 1px 0 0
  background-color: $control-border-color
  background-image: linear-gradient(to right, $base-background-color, $control-border-color 20%, $control-border-color 80%, $base-background-color)
  text-align: center
  white-space: nowrap
  width: 100%

  a
    cursor: pointer

  div
    background-color: $base-background-color

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

@keyframes fadeInPicker
  from
    background-color: #fff

  to
    background: $brand-colors-action

.fadeInPicker
  animation-name: fadeInPicker

@keyframes fadeOutPicker
  from
    background-color: $brand-colors-action

  to
    background: #fff

.fadeOutPicker
  animation-name: fadeOutPicker

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
