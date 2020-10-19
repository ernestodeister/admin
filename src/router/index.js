import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/orders/ListOrders',
    name: 'ListOrders',
    component: () => import( '../pages/orders/ListOrders.vue')
  },
  {
    path: '/placeorder/PlaceOrder',
    name: 'PlaceOrder',
    component: () => import('../pages/placeorder/PlaceOrder.vue')
  },
  {
    path: '/orders/DetailOrder',
    name: 'DetailOrder',
    component: () => import('../pages/orders/DetailOrder.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
