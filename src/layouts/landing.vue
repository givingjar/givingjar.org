<template>
  <Layout>
    <Carousel>
      <BlogSlide
        slot="0"
        imageUrl="https://blog.givingjar.org/img/spotlight/michigan-womens-historical-center/michigan-womens-historical-center.jpg"
        title="Charity Spotlight: Michigan Women's Historical Center and Hall of Fame"
        subtitle="Supporting the equality of women by sharing their achievements in Michigan's history."
        linkUrl="https://blog.givingjar.org"
      />
    </Carousel>
    <slot></slot>
  </Layout>
</template>

<script>
import BlogSlide from '@/components/carousel-blog-slide'
import Carousel from '@/components/carousel'
import Layout from '@/layouts/main'

export default {
  components: {
    BlogSlide, Carousel, Layout
  }
}
</script>
