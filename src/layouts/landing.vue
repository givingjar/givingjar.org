<template>
  <Layout>
    <Carousel/>
    <slot></slot>
  </Layout>
</template>

<script>
import Carousel from '@/components/carousel'
import Layout from '@/layouts/main'

export default {
  components: {
    Carousel, Layout
  }
}
</script>
