import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      name:'home',
      component: () => import('../views/BodyAdView.vue')
    },
    {
      path: '/g/:pId',
      component: () => import('../views/ProductView.vue'),
      props: true,
      name:'product',   
    },
    {
      path: '/c/:category',
      component: () => import('../views/CategoryView.vue'),
      props: true,
      name:'category',   
    },
    {
      path: '/checkout/:price',
      component: () => import('../components/payment/Checkout.vue'),
      props: true,
      name:'checkout',   
    },
    {
      path: '/thx',
      component: () => import('../components/payment/ThankUPage.vue'),
      props: true,
      name:'thx',   
    },
    { path: '/g', redirect: { name: 'home' } },
  ]
})

export default router
