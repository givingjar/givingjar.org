<template>
  <div :key="$route.fullPath">
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import '_theme'
@import '_main'
</style>
