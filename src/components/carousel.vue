<template>
  <section id="carousel">
    <div class="all-slides">
      <div
        v-for="(slots, slotName, index) in $slots"
        v-show="index === activeSlide"
        class="slide fadeInFromRight"
      >
        <slot :name="slotName"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeSlide: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
#carousel
  margin-bottom: 4rem
  width: 100%

.slide
  animation-duration: 1s
  animation-fill-mode: both
  display: inline-block
  width: 100%

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
