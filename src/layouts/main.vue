<template>
  <div class="main">
    <SiteNav/>
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <slot></slot>
        </div>
      </div>
    </div>
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
