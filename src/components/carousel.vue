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
#carousel
  margin-bottom: 4rem
  width: 100%
</style>
