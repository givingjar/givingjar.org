<template>
  <Layout>
    <Hello/>
    <Hello/>
    <Hello/>
  </Layout>
</template>

<script>
import Layout from '@/layouts/landing'
import Hello from '@/components/hello'

export default {
  components: {
    Layout, Hello
  }
}
</script>
