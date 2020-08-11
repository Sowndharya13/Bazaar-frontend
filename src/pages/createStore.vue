<template>
  <div>
    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h2 class="subtitle">
            Time to create your own store to reach out millions of customers
            </h2>
            <h1 class="title">
              Create Store
            </h1>
          </div>
          <section class="column is-half">
          <div class="field">
            <label class="label">Store Name</label>
            <div class="control">
              <input v-model="storeName" class="input" type="text" placeholder="Text input">
            </div>
          </div>
          <div class="field">
            <label class="label">Brand Logo</label>
            <div class="control">
              <div class="file">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                      Choose a file…
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Category</label>
            <div class="control">
              <div class="select">
                <select v-model="category">
                  <option>Groceries</option>
                  <option>Textiles</option>
                  <option>Sports Accessories</option>
                  <option>Electronics</option>
                </select>
              </div>
            </div>
          </div>
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
            <label class="label">Location</label>
            <div class="control">
               <input v-model="location" class="input" type="text" placeholder="Text input">

            </div>
          </div>
           <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea v-model="description" class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link is-light" @click="createStore()">Create Store</button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div>
          </div>
      </section>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import { FeedService } from '../services/FeedService'

const Service = new FeedService()
export default {
  name: 'PageIndex',
  data () {
    return {
      email: '',
      brandLogo: '',
      storeName: '',
      location: '',
      phone: '',
      description: '',
      category: ''
    }
  },
  methods: {
    createStore () {
      const storeData = {
        store_email: this.email,
        store_brandLogo: this.brandLogo,
        store_name: this.storeName,
        store_location: this.location,
        store_phone: this.phone,
        store_description: this.description,
        store_category: this.category
      }
      console.log('storeDatastoreDatastoreDatasd,', storeData)

      if ((storeData.store_name && storeData.store_category) !== null && (storeData.store_name && storeData.store_category) !== '') {
        Service.createStore(storeData).then(resp => {
          console.log('kel,', storeData)
        })
      }
    }
  }
}
</script>
