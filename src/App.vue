<template>
  <div id="app">
    <!-- <app-header></app-header> -->
    <!-- <app-login></app-login> -->
    <router-view></router-view>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import Login from './components/Login.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  name: 'App'
}
</script>

<style>

</style>
