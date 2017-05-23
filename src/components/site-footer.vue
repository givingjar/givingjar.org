<template>
  <footer>
    <div class="copyright">
      <p>&copy; {{ currentYear }} Giving Jar, Inc. All rights reserved.</p>
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
    text-align: center;
  }
}

footer {
  background-color: $brand-colors-calm;
  border-top: 1px solid $control-border-color;
  display: flex;
  font-size: 1.4rem;
  margin-top: 50px;
  padding: 30px 15px;
}
</style>
