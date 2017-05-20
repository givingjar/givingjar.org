<template>
  <nav :class="{ 'small-nav': shrinkNav }">
    <div class="action-row">
      <div class="">
        <button
          type="button"
          class="menu-toggle"
          :class="{ 'on': showMenu }"
          aria-label="Toggle navigation"
          :aria-expanded="showMenu"
          @click="toggleMenu"
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <router-link to="/" class="brand">Giving Jar</router-link>
      </div>

      <div
        class="menu-links"
        :class="{ 'small-nav': shrinkNav, 'invisible': !showMenu }"
      >
        <ul>
          <li><a href="//blog.givingjar.org">Our Blog</a></li>
          <li><a href="https://bit.ly/GivingJarShopper">Downloads</a></li>
          <li><a href="//blog.givingjar.org/about/">Mission</a></li>
          <li>
            <a class="social" href="https://www.facebook.com/givingjarorg">
              <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
            </a>
            <a class="social" href="https://www.twitter.com/givingjar">
              <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <transition name="logo-transition">
        <div
          v-if="!showMenu && showLogo"
          class="logo"
        >
          <a href="https://blog.givingjar.org">
            <img src="../assets/img/giving-jar-icon-square.svg" alt="Giving Jar Logo">
          </a>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.onWindowScroll)
  },
  data () {
    return {
      shrinkNav: false,
      showLogo: true,
      showMenu: false,
      compactNav: true
    }
  },
  computed: {
    showMenuLinks () {
      return this.showMenu
    }
  },
  methods: {
    onWindowScroll () {
      if (window.pageYOffset > 50) {
        this.shrinkNav = true
        this.showMenu = false
      } else {
        this.shrinkNav = false
      }
      this.resetShowLogo()
    },
    resetShowLogo () {
      this.showLogo = !this.showMenu && window.pageYOffset <= 50
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
      this.resetShowLogo()
    }
  }
}
</script>

<style lang="scss">
body {
  padding-top: 80px;
}
</style>

<style lang="scss" scoped>
@import '../design';

$transition-duration: 0.3s;

@mixin menu-defaults() {
  background-color: $brand-colors-calm;
  border-bottom: 1px solid $control-border-color;
  font-family: $heading-font-family;
  position: fixed;
  left: 0;
  right: 0;
}

a {
  color: $base-color;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 1px;
  padding: 10px 15px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: $brand-colors-action;
  }

  &.brand {
    font-size: 2rem;
    height: 50px;
    padding: 15px;
    line-height: 20px;
    text-transform: none;
  }

  &.social {
    padding: 10px;
  }
}

button.menu-toggle {
  display: inline-block;
  color: darken($control-border-color, 35%);
  float: right;
  padding: 0 10px;
  margin: auto 15px;
  background-color: transparent;
  background-image: none;
  border-radius: 4px;
  width: 40px;
  height: 40px;

  &.on {
    background-color: $control-border-color;
  }
}

div.logo {
  position: fixed;
  left: 50%;
  top: 35px;
  width: 50px;
  margin-left: -25px;
  opacity: 1;
  transition: opacity $transition-duration ease-in-out;
}

div.menu-links {
  @include menu-defaults();
  top: 61px;
  transition: all $transition-duration ease-in-out;

  &.invisible {
    transform: translateY(-20px);
  }

  &.small-nav {
    top: 61px;
  }
}

nav {
  @include menu-defaults();
  margin-bottom: 20px;
  padding: 10px 0;
  transition: padding $transition-duration ease-in-out;
  top: 0;
  height: 40px;

  &.small-nav {
    padding: 10px 0;
  }

  .action-row {
    line-height: 40px;
  }
}

ul {
  list-style: none;
  margin: 7.5px 0;
  padding-left: 0;
  text-align: right;
}

.invisible {
  visibility: hidden;
  opacity: 0;
}

@media (min-width: $screen-tablet-min) {
  div.logo {
    top: 25px;
    width: 100px;
    margin-left: -50px;
  }

  div.menu-links {
    top: 91px;
  }

  nav {
    padding: 25px 0;
  }
}

@media (min-width: $screen-desktop-min) {
  button.menu-toggle {
    // display: none;
  }

  div.menu-links {
    position: static;
  }

  ul {
    li {
      display: inline-block;
    }
  }
}

//
// TRANSITIONS
//

.logo-transition-enter-active,
.logo-transition-leave-active {
  img {
    transition: opacity $transition-duration;
  }
}

.logo-transition-enter,
.logo-transition-leave-to {
  img {
    opacity: 0;
  }
}
</style>
