<template>
  <Layout>
    <Carousel>
      <FeatureImageSlide
        slot="0"
        imageUrl="https://blog.givingjar.org/img/spotlight/men-making-a-difference/men-making-a-difference-cookout.jpg"
        title="Charity Spotlight: Men Making a Difference"
        subtitle="Demonstrating the importance of family and volunteerism in our community."
        linkUrl="https://blog.givingjar.org/charity-spotlight-men-making-a-difference/"
      />
      <FeatureImageSlide
        slot="1"
        imageUrl="https://blog.givingjar.org/img/spotlight/leonies-longing/leonies-longing-logo.jpg"
        title="Charity Spotlight: Leonie's Longing"
        subtitle="A community of support for women who have returned to lay life from one of religion."
        linkUrl="https://blog.givingjar.org/charity-spotlight-leonies-longing/"
      />
      <FeatureImageSlide
        slot="2"
        imageUrl="https://blog.givingjar.org/img/paypal-giving-fund/ppgf-do-more-good.jpg"
        title="How To: Enroll in PayPal Giving Fund"
        subtitle="Get 100% of every PayPal donation and open up new ways to raise funds online."
        linkUrl="https://blog.givingjar.org/how-to-enroll-in-paypal-giving-fund/"
      />
    </Carousel>
    <slot></slot>
  </Layout>
</template>

<script>
import FeatureImageSlide from '@/components/carousel-feature-image-slide'
import Carousel from '@/components/carousel'
import Layout from '@/layouts/main'

export default {
  components: {
    FeatureImageSlide, Carousel, Layout
  }
}
</script>
