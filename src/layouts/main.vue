<template>
  <div>
    <SiteNav/>
    <main class="container">
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
