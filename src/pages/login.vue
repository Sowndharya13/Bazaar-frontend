<template>
  <div>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma-social@1/bin/bulma-social.min.css"
      />
    </head>
    <section class="hero is-fullheight">
      <div class="hero-body card">
        <div class="container  ">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form action="" class="box">
                <div class="field">
                  <label for="" class="label">Email</label>
                  <div class="control has-icons-left">
                    <input
                      v-model="email"
                      type="email"
                      placeholder="e.g. bobsmith@gmail.com"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">User Name</label>
                  <div class="control has-icons-left">
                    <input
                      v-model="userName"
                      type="text"
                      placeholder="eg. Bob Smith"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">Password</label>
                  <div class="control has-icons-left">
                    <input
                      v-model="password"
                      type="password"
                      placeholder="*******"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                    <button class="button is-link is-success" @click="login()">Login</button>
                          <!-- <router-link @click="addChannel()" tag="button" class="button is-success">Login</router-link>   to="/store" -->
                </div>
              </form>
              <!-- Sign in with Social Media -->
              <br />
              <a class="button is-medium is-google">
                <span class="icon">
                  <i class="fab fa-google"></i>
                </span>
                <span>Login with Google</span>
              </a>
              <br />
              <a class="button is-medium is-facebook">
                <span class="icon">
                  <i class="fab fa-facebook"></i>
                </span>
                <span>Login with facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { FeedService } from '../services/FeedService'

const Service = new FeedService()

export default {
  name: 'PageLogin',
  data () {
    return {
      email: '',
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      const loginData = {
        email: this.email,
        userName: this.userName,
        password: this.password
      }
      Service.signIn(loginData)
        .then((resp) => {
          console.log(loginData)
        })
    }
  }
}
</script>
