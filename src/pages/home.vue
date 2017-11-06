<template>
  <Layout>
    <Section>
      <Carousel>
        <FeatureImageSlide
          slot="0"
          imageUrl="static/img/card/giving-jar-shopper-retail-logos.png"
          title="Donate when you shop online"
          subtitle="Our free browser add-on offers small reminders to donate when you shop online. You pick the charity and they get 100%."
          linkUrl="http://bit.ly/GivingJarShopper"
          linkText="Try it!"
        />
        <FeatureImageSlide
          slot="1"
          imageUrl="https://blog.givingjar.org/img/spotlight/men-making-a-difference/men-making-a-difference-cookout.jpg"
          title="Charity Spotlight: Men Making a Difference"
          subtitle="Demonstrating the importance of family and volunteerism in our community."
          linkUrl="https://blog.givingjar.org/charity-spotlight-men-making-a-difference/"
        />
        <FeatureImageSlide
          slot="2"
          imageUrl="https://blog.givingjar.org/img/spotlight/leonies-longing/leonies-longing-logo.jpg"
          title="Charity Spotlight: Leonie's Longing"
          subtitle="A community of support for women who have returned to lay life from one of religion."
          linkUrl="https://blog.givingjar.org/charity-spotlight-leonies-longing/"
        />
        <FeatureImageSlide
          slot="3"
          imageUrl="https://blog.givingjar.org/img/paypal-giving-fund/ppgf-do-more-good.jpg"
          title="How To: Enroll in PayPal Giving Fund"
          subtitle="Get 100% of every PayPal donation and open up new ways to raise funds online."
          linkUrl="https://blog.givingjar.org/how-to-enroll-in-paypal-giving-fund/"
        />
      </Carousel>
    </Section>
    <Section>
      <h1>Our Mission</h1>
      <p>
        Giving Jar is a 501(c)(3) nonprofit located in Lansing, Michigan.
      </p>
      <blockquote>
        Our mission is to make it easy to find nonprofits and donate to them online.
      </blockquote>
      <p>
        We help local nonprofits share their cause online, setup online fundraising
        software, and create new ways for donors to contribute to their charity of
        choice.
      </p>
    </Section>
    <Section>
      <h1>Our Services</h1>
      <div>
        <h3>Make donation technology accessible</h3>
        <p>
          Nonprofits deserve more than a donate button on their website. We offer
          free technical assistance to nonprofits that want to enroll in many online
          fundraising tools such as Facebook, PayPal Giving Fund, and CyberGrants.
        </p>
      </div>
    </Section>
  </Layout>
</template>

<script>
import Carousel from '@/components/carousel'
import FeatureImageSlide from '@/components/carousel-feature-image-slide'
import Hello from '@/components/hello'
import Layout from '@/layouts/main'
import Section from '@/components/section'

export default {
  components: {
    Carousel, FeatureImageSlide, Hello, Layout, Section
  }
}
</script>
