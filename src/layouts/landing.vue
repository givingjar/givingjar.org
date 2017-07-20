<template>
  <Layout>
    <Carousel>
      <figure slot="0">
        <img src="https://blog.givingjar.org/img/spotlight/michigan-womens-historical-center/michigan-womens-historical-center.jpg" alt="Charity Spotlight: Michigan Women's Historical Center and Hall of Fame">
        <figcaption>
          <div class="summary">
            <h2>Charity Spotlight: Michigan Women's Historical Center and Hall of Fame</h2>
            <p>Supporting the equality of women by sharing their achievements in Michigan's history.</p>
          </div>
          <input type="button" value="Read More"></input>
        </figcaption>
      </figure>
    </Carousel>
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
