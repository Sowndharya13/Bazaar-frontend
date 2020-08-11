<template>
  <div>
    <section class="section">
      <div class="container">
        <router-link to="/" tag="button" class="button is-link"
          >Create Store</router-link
        >
        <div id="carousel-demo" class="carousel">
          <ul style="    display: flex;    flex-wrap: wrap;">
            <li v-for="(store, index) in storesOwned" :key="index" style="max-width: fit-content;">
              <div class="item-1 q-pa-md">
                <div class="box column">
                  <article class="media">
                    <div class="media-left">
                      <figure class="image is-64x64">
                        <img
                          src="https://bulma.io/images/placeholders/128x128.png"
                          alt="Image"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong> {{ store.store_name }} </strong>
                          <small>, {{ store.store_location }}</small>
                          <br />
                          {{ store.store_category }}
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-right">
                          <a class="level-item" aria-label="reply">
                            <span class="icon is-small">
                              <i class="fas fa-share-alt" aria-hidden="true"></i>
                            </span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- End Carousel -->
      </div>
    </section>
  </div>
</template>
<script>
import { FeedService } from '../services/FeedService'

const Service = new FeedService()

export default {
  props: ['userId'],
  name: 'ListStore',
  data () {
    return {
      storesOwned: []
    }
  },
  created () {
    this.getStoresOwnedByUser()
  },
  methods: {
    getStoresOwnedByUser () {
      if ((this.userId) !== null && (this.userId) !== '') {
        Service.getStoresOwnedByUser(this.userId).then(resp => {
          this.storesOwned = resp
          console.log('storesOwned,from list store compo:', this.storesOwned)
        })
      }
    }
  }
}
</script>
