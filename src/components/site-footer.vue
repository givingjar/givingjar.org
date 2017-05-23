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
        Our mission is to make it easy for nonprofits to raise awareness of their cause and collect donations online.
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

<style lang="scss" scoped>
@import '../design';

div {
  margin: 0 auto;

  &.copyright {
    font-size: 1.2rem;
    text-align: center;
  }

  &.quick-links {
    a {
      color: $base-color;
      font-weight: 800;
      letter-spacing: 1px;
      padding: 10px 15px;
      text-decoration: none;
      text-transform: uppercase;

      &:hover {
        color: $brand-colors-action;
      }

      &.social {
        padding: 10px;
      }
    }
  }
}

footer {
  background-color: $brand-colors-calm;
  border-top: 1px solid $control-border-color;
  display: flex;
  flex-flow: row wrap;
  font-size: 1.4rem;
  margin-top: 50px;
  padding: 15px 15px 0;
  width: 100%;

  p {
    margin: 0;
  }
}

ul {
  list-style: none;
  margin: 7.5px 0;
  padding-left: 0;
  text-align: center;
}
</style>
