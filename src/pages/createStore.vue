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
                    <input
          id="up"
          ref="file"
          type="file"
          class="q-pa-sm"
          style="
            font-size: 0.8rem;
            outline: none;
            padding: 0px;
            padding: 1rem;
            margin: auto;
            display: block;
            border: 1px dashed;
            width: 100%;
          "
          accept="image/*"
          @change="uploadFile()"
        />
              <div v-if="previewImage"> <img src:previewImage class="uploading-image" />
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
              <button class="button is-link is-light" @click="$router.go(-1)">Cancel</button>
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
      previewImage: null,
      storeName: '',
      location: '',
      phone: '',
      description: '',
      category: ''
    }
  },
  methods: {

    uploadFile (e) {
      console.log('e file shows:', e)
      this.previewImage = this.$refs.file.files[0]
      console.log('this.preview:', this.previewImage)
    },
    createStore () {
      const storeData = {
        store_email: this.email,
        store_brandLogo: this.previewImage,
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
