<template>
  <div>

    <div v-if="haveStore">
      <section class="section">
        <div class="container">
          <router-link to="/" tag="button" class="button is-link">Create Store</router-link>

          <div id="carousel-demo" class="carousel">
                 <ul style="    display: flex;    flex-wrap: wrap;">
          <li v-for="index in 3" :key="index" style="max-width: fit-content;">
            <div class="item-1 q-pa-md">
<div class="box column">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Store {{ index}} </strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>            </div>
          </li></ul>
          </div>
          <!-- End Carousel -->
        </div>
      </section>
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

export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      haveStore: true
    }
  }
}
</script>
