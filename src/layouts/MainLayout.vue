<template>
  <q-layout >
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title> Bazaar </q-toolbar-title>

        <router-link to="/" tag="button" class="button is-primary"
          >Logout</router-link
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
    }
  }
}
</script>
