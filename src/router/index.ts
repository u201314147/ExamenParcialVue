import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PageNotFound from '@/modules/common/views/PageNotFound.vue'

Vue.use(VueRouter)

const parseProps = (r: { params: { id: string } }) => ({ id: parseInt(r.params.id, 10) })

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/customers',
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: () => import(/* webpackChunkName: "bundle.accounts" */ '@/modules/accounts/views/Accounts.vue'),
  },
  {
    path: '/customers',
    name: 'customers',
    component: () => import(/* webpackChunkName: "bundle.heroes" */ '@/modules/customers/views/Customers.vue'),
  },
  {
    path: '/customers/:id',
    name: 'customer-detail',
    props: parseProps,
    component: () => import(/* webpackChunkName: "bundle.heroes" */ '@/modules/customers/views/CustomerDetail.vue'),
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () =>
      import(/* webpackChunkName: "bundle.transactions" */ '@/modules/transactions/views/Transactions.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "bundle.about" */ '@/modules/common/views/About.vue'),
  },
  {
    path: '*',
    component: PageNotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
