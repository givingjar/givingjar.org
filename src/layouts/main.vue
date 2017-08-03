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

<style lang="stylus">
@import '../_theme'

main
  margin-left: auto
  margin-right: auto
  padding: 0
  position: relative
  width: 100%
</style>
