<template>
  <div>

    <div v-if="haveStore">
       <ListStore :user-id="user_id"  />
    </div>
    <div class="section container" >
      <nav class="panel">
        <p class="panel-heading">
          Store Name
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search" />
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <p class="panel-tabs">
          <a class="is-active">All Items</a>
          <a>WishList</a>
          <a>Orders</a>
        </p>
        <ul class="section" style="display: inline-flex;
    flex-wrap: wrap;">
          <li v-for="index in 4" :key="index">
            <div class="columns is-multiline q-pa-md">
              <div class="img2 xpro2 is-quarter">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Component
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
                    <div class="content">
                      Item Description
                      <a href="#">@bulmaio</a>. <a href="#">#css</a>
                      <a href="#">#responsive</a>
                      <br />
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="active card-footer-item">In Stock</a>
                    <a href="#" class="card-footer-item">Out Of Stock</a>
                    <a href="#" class="card-footer-item">Remove Item</a>
                  </footer>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="panel-block">
          <button class="button is-link is-outlined is-fullwidth">
            Reset all filters
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import ListStore from '../components/ListStore.vue'

export default {
  name: 'MainLayout',
  components: {
    ListStore
  },

  data () {
    return {
      haveStore: true,
      user_id: this.$route.params.id
    }
  },
  methods: {
  }
}
</script>
