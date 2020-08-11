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
      <div class="tabs is-centered is-toggled">
        <ul>
          <li   v-bind:class="{ 'is-active': showLogin }" @click="selectlogin()"><a>Login</a></li>
          <li class=" " v-bind:class="{ 'is-active': !showLogin }" @click="selectSign_up()"><a>Sign Up</a></li>
        </ul>
      </div>
          <div id="login-form" v-if="showLogin" class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form action="" class="box">
                <div class="field">
                  <label for="" class="label">Email</label>
                  <div class="control has-icons-left">
                    <input
                      v-model="email"
                      type="email"
                      placeholder="e.g.bobsmith@gmail.com"
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
                  <button class="button is-link is-success" @click="login()">
                    Login
                  </button>
                  <!-- <router-link @click="addChannel()" tag="button" class="button is-success">Login</router-link>   to="/store" -->
                </div>
              </form>
              <!-- Sign in with Social Media -->
              <br />
              <a class="button is-medium is-google" @click="getAllUsers()">
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
          <div id="signup-form" v-if="!showLogin" class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form action="" class="box">
                <div class="field">
                  <label for="" class="label">Email</label>
                  <div class="control has-icons-left">
                    <input
                      v-model="email"
                      type="email"
                      placeholder="e.g.bobsmith@gmail.com"
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
                  <label class="label">location</label>
                  <div class="control has-icons-left">
                    <input
                      v-model="location"
                      type="text"
                      placeholder="eg. Chennai"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-map-marker"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Zip Code</label>
                  <div class="control has-icons-left">
                    <input
                      v-model="zip"
                      type="text"
                      placeholder="eg. 638 001"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-map-pin"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Phone</label>
                  <div class="control has-icons-left">
                    <input
                      v-model="phone"
                      type="text"
                      placeholder="eg. 98745 32144"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-phone"></i>
                    </span>
                  </div>
                </div>
                <div class="field " >
                  <button class="button is-link is-success" @click="signUp()">
                    Sign Up
                  </button>
                  <!-- <router-link @click="addChannel()" tag="button" class="button is-success">Login</router-link>   to="/store" -->
                </div>
              </form>
              <!-- Sign in with Social Media -->
            <br />
              <a class="button is-medium is-google" @click="getAllUsers()">
                <span class="icon">
                  <i class="fab fa-google"></i>
                </span>
                <span>Signup with Google</span>
              </a>
              <br />
            <!--    <a class="button is-medium is-facebook">
                <span class="icon">
                  <i class="fab fa-facebook"></i>
                </span>
                <span>SignUp with facebook</span>
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { FeedService } from '../services/FeedService'
import * as bulmaToast from 'bulma-toast'

const Service = new FeedService()

export default {
  name: 'PageLogin',
  data () {
    return {
      email: '',
      userName: '',
      password: '',
      location: '',
      phone: '',
      zip: '',
      showLogin: true
    }
  },
  methods: {
    selectlogin () {
      this.showLogin = true
    },
    login () {
      const loginData = {
        email: this.email,
        password: this.password
      }
      if ((loginData.email && loginData.password) !== null && (loginData.email && loginData.password) !== '') {
        Service.signIn(loginData).then(resp => {
          bulmaToast.toast({ message: 'LoggedIn Successfully', type: 'is-success', position: 'top-center' })
          this.$router.push({ path: `/store/${resp.user_id}` })
        })
      }
    },
    signUp () {
      const signUpData = {
        email: this.email,
        userName: this.userName,
        password: this.password,
        location: this.location,
        zip: this.zip,
        phone: this.phone
      }
      Service.signUp(signUpData).then(resp => {
        console.log(signUpData)
      })
    },
    selectSign_up () {
      this.showLogin = false
    },
    getAllUsers () {
      Service.getAllUsers().then(resp => {
        console.log('resp:', resp)
      })
    }
  }
}
</script>
