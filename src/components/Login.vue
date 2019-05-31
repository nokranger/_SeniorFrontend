<template>
<div>
  <app-header></app-header>
  <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 ml-auto mr-auto">
          <div class="card card-login">
            <form class="form">
              <div class="card-header card-header-primary text-center">
                <h4 class="card-title">{{ title }}</h4>
              </div>
              <br>
              <br>
              <div class="card-body">
                <span class="bmd-form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="material-icons">face</i>
                      </span>
                    </div>
                  <input type="text" class="form-control" placeholder="Username" /><br>
                  </div>
                </span>
                <span class="bmd-form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="material-icons">lock_outline</i>
                      </span>
                    </div>
                  <input type="password" class="form-control" placeholder="Password" />
                  </div>
                </span>
              </div>
              <div class="footer text-center">
                <button class="btn btn-primary btn-link btn-wd btn-lg">Login</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
</div>
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
      title: 'Login'
    }
  }
}
</script>

<style scoped>

</style>
