
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'store/create', component: () => import('pages/createStore.vue') },
      { path: '', component: () => import('pages/Authorization.vue') },
      { path: 'store/:id', component: () => import('pages/store.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
