<template>
  <div :key="$route.fullPath">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'design';
@import 'default';
</style>
