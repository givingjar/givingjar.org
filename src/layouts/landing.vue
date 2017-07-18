<template>
  <Layout>
    <Carousel1/>
    <slot></slot>
  </Layout>
</template>

<script>
import Carousel1 from '@/components/carousel1'
import Layout from '@/layouts/main'

export default {
  components: {
    Carousel1, Layout
  }
}
</script>
