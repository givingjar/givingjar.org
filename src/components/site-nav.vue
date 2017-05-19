<template>
  <nav>
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-navbar" aria-label="Toggle navigation">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <router-link to="/" class="navbar-brand">Giving Jar</router-link>
      </div>

      <div class="collapse navbar-collapse" id="main-navbar">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://givingjar.org">Newsletter</a></li>
          <li><a href="/tag/spotlight/">Spotlights</a></li>
          <li><a href="/about/">About</a></li>
        </ul>
      </div>

      <div class="avatar-container">
        <div class="avatar-img-border">
          <a href="https://blog.givingjar.org ">
            <img class="avatar-img" src="../assets/img/giving-jar-icon-square.svg" alt="Giving Jar Logo">
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
main {
  padding-top: 80px;
}
</style>

<style lang="scss" scoped>
@import '../design';

nav {
  background-color: $brand-colors-calm;
  border-bottom: 1px solid $control-border-color;
  font-family: $base-font-family;
  margin-bottom: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
