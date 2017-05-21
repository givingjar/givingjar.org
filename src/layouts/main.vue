<template>
  <div>
    <SiteNav/>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import SiteNav from '@/components/site-nav'

export default {
  components: {
    SiteNav
  }
}
</script>

<style lang="scss">
@import '../design';

main {
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
