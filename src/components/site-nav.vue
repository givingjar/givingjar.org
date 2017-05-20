<template>
  <nav>
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
        v-if="showMenu"
        class="menu-links"
      >
        <ul>
          <li><a href="https://givingjar.org">Newsletter</a></li>
          <li><a href="/tag/spotlight/">Spotlights</a></li>
          <li><a href="/about/">About</a></li>
        </ul>
      </div>

      <div
        v-if="!showMenu"
        class="logo"
        :class="{ 'hide': !showLogo }"
      >
        <a href="https://blog.givingjar.org">
          <img src="../assets/img/giving-jar-icon-square.svg" alt="Giving Jar Logo">
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.resetShowLogo)
  },
  data () {
    return {
      showLogo: true,
      showMenu: false,
      compactNav: true
    }
  },
  methods: {
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
  position: absolute;
  left: 50%;
  top: 35px;
  width: 50px;
  margin-left: -25px;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;

  &.hide {
    opacity: 0;
  }
}

div.menu-links {
  @include menu-defaults();

  top: 61px;
}

nav {
  @include menu-defaults();

  margin-bottom: 20px;
  padding: 10px 0;
  top: 0;
  height: 40px;

  .action-row {
    line-height: 4rem;
  }
}

ul {
  list-style: none;
  margin: 7.5px 0;
  padding-left: 0;
  text-align: right;
}
</style>
