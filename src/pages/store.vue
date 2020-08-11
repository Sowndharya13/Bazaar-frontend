<template>
  <div>

    <div v-if="haveStore">
       <!-- <ListStore :user-id="user_id" @ActiveStoreBlock="activeStore"
  /> --> <section class="section">
      <div class="container">
        <router-link to="/store/create" tag="button" class="button is-link"
          >Create Store</router-link
        >
        <div id="carousel-demo" class="carousel">
          <ul style="display: flex;    flex-wrap: wrap;">
            <li v-for="(store, index) in storesOwned" :key="index" style="max-width: fit-content;">
              <div class="item-1 q-pa-md" @click="selectStore(store)" >
                <div class="box column"  v-bind:class="{ 'active_box' : store == activeStore }">
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
    <div v-if="storesOwned.length !=0 " class="section container" >
      <nav class="panel" >
        <p class="panel-heading">
          {{activeStore.store_name}}
        </p>
        <div  v-if="productList.length != 0" class="panel-block">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search" />
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <!-- <p class="panel-tabs">
          <a class="is-active">All Items</a>
          <a>WishList</a>
          <a>Orders</a>
        </p> -->
        <ul  v-if="productList.length != 0" class="section" style="display: inline-flex;flex-wrap: wrap;">
          <li v-for="(product, index) in productList" :key="index">
            <div class="columns is-multiline q-pa-md">
              <div class="img2 xpro2 is-quarter">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      {{  product.p_name}}
                    </p>
                    <a
                      href="#"
                      class="card-header-icon"
                      aria-label="more options"
                    >
                      <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-content">
                    <div class="content" style="    max-width: fit-content;">
                      {{  product.p_description}}
                    <br />
                    </div>
                  </div>
                  <footer class="card-footer">
                    <label v-if="product.p_available_count > 0" href="#" class="active card-footer-item">In Stock : {{ product.p_available_count}}</label>
                    <label v-if="product.p_available_count < 1" href="#" class="active card-footer-item">Out Of Stock</label>
                    <a href="#" class="card-footer-item">Remove Item</a>
                  </footer>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="section" v-if="productList.length === 0">
          <label>Please Add Products to sell in your store </label>
        </div>
      </nav>
    </div>
      <div class="container section" v-if="storesOwned.length === 0">
          <h4>Please Create New Store. </h4>
       </div>
  </div>
</template>
<script>
// import ListStore from '../components/ListStore.vue'
import { FeedService } from '../services/FeedService'

const Service = new FeedService()

export default {
  name: 'MainLayout',
  components: {
    // ListStore
  },

  data () {
    return {
      haveStore: true,
      user_id: this.$route.params.id,
      storesOwned: [],
      activeStore: {},
      productList: []
    }
  },
  created () {
    this.getStoresOwnedByUser()
  },

  methods: {

    getStoresOwnedByUser () {
      if ((this.user_id) !== null && (this.user_id) !== '') {
        Service.getStoresOwnedByUser(this.user_id).then(resp => {
          this.storesOwned = resp
          // console.log('storesOwned,from list store compo:', this.storesOwned + 'this.activeStore =', this.storesOwned[1].store_id)
          this.activeStore = this.storesOwned[0]
          this.getAllProductsByStore(this.activeStore.store_id)
        })
      }
    },

    selectStore (store) {
      this.activeStore = store
      this.getAllProductsByStore(store.store_id)
    },

    getAllProductsByStore (storeId) {
      Service.getAllProductsByStore(storeId).then(resp => {
        this.productList = resp
        // console.log('storesOwned,from list store compo:', this.storesOwned + 'this.activeStore =', this.storesOwned[1].store_id)
      })
    }
  }
}
</script>

<style scoped>
  .active_box {
    border: groove;
    border-color: deepskyblue;
  }
</style>
