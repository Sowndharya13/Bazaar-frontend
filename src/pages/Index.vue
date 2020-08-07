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
              <input class="input" type="text" placeholder="Text input">
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
                <select>
                  <option>Groceries</option>
                  <option>Textiles</option>
                  <option>Sports Accessories</option>
                  <option>Electronics</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
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
               <router-link to="/store" tag="button" class="button is-link">Create</router-link>
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
export default {
  name: 'PageIndex'
}
</script>
