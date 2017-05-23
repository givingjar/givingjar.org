<template>
  <div>
    <SiteNav/>
    <main>
      <slot></slot>
    </main>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteFooter from '@/components/site-footer'
import SiteNav from '@/components/site-nav'

export default {
  components: {
    SiteFooter, SiteNav
  }
}
</script>

<style lang="scss">
@import '../design';

main {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
}

@media (min-width: $screen-tablet-min) {
  main {
    width: 750px;
  }
}

@media (min-width: $screen-desktop-min) {
  main {
    width: 970px;
  }
}
</style>
