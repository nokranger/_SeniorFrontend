<template>
<html>
  <body>
    <div id="wrapper">
  <div id="header">
      <app-header></app-header>
  </div>
  <div id="nav">
      <nav>
          <ul>

          </ul>
      </nav>
  </div>
  <div id="content">
    <p>{{ content }}</p>
  </div>
    <app-footer></app-footer>
  </div>
</body>
</html>

</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium eaque sequi animi minima! Consectetur unde consequuntur est, dolorum explicabo libero quibusdam minima tempora necessitatibus sit. Quae facilis nihil iure.'
    }
  }
}
</script>

<style scoped>
body, html {
  padding : 0px;
  margin : 0px;
  height : 100%;
}
#wrapper {
  width:900px;
  height:100%;
  margin: 0px;
  padding: 0px;
}
#header {
  height:10%;
  background-color:#930;
  width:900px;
}
#nav {
  background-color:#999;
  width:200px;
  height:90%;
  float:left;
}
#content {
  height:90%;
  background-color:#363;
  width:700px;
  float:left;
}
</style>
