<template>
  <footer>
    <div class="quick-links">
      <ul>
        <li>
          <a class="social" href="https://www.facebook.com/givingjarorg" aria-label="Facebook">
            <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
          </a>
          <a class="social" href="https://www.twitter.com/givingjar" aria-label="Twitter">
            <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="mission">
      <blockquote>
        Our mission is to make it easy to find nonprofits and donate to them online.
      </blockquote>
    </div>
    <div class="copyright">
      <p>&copy; 2015-{{ currentYear }} Giving Jar, Inc. All rights reserved.</p>
      <p>We are a 501(c)(3) nonprofit in the beautiful state of Michigan.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../_theme'

div
  flex: 1 100%
  margin: 0 auto
  text-align: center

  &.copyright
    font-size: 1.2rem

  &.mission
    blockquote
      margin: 15px 45px
      text-align: left

  &.quick-links
    a
      color: $base-color
      font-weight: 800
      letter-spacing: 1px
      padding: 10px 15px
      text-decoration: none
      text-transform: uppercase

      &:hover
        color: $brand-colors-action

      &.social
        padding: 10px

footer
  background-color: $brand-colors-calm
  border-top: 1px solid $control-border-color
  box-sizing: border-box
  display: flex
  flex-wrap: wrap
  font-size: 1.4rem
  margin-top: 50px
  padding: 15px 15px 0
  width: 100%

  p
    margin: 0

ul
  list-style: none
  margin: 7.5px 0
  padding-left: 0

@media (min-width: $screen-tablet-min)
  div
    &.copyright
      flex: 0 0 100%
      order: 3

    &.mission
      flex: 1 80%
      order: 1

      blockquote
        margin-left: 0

    &.quick-links
      flex: 1 20%
      order: 2
      text-align: right

      a.social
        padding-right: 0
</style>
