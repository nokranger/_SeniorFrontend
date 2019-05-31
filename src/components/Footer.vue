<template>
  <Footer>
    <h5>{{ copyright }}{{ title }}</h5>
  </Footer>
</template>

<script>
export default {
  data () {
    return {
      copyright: 'Copyrihgt@ 2019',
      title: 'This is Footer'
    }
  }
}
</script>

<style scoped>
</style>
