import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
// login
import Signin from '@/page/login/Signin'
import Signup from '@/page/login/Signup'
// shoppingcart
import ShoppingCart from '@/page/shoppingcart/ShoppingCart'
// product
import Category from '@/page/product/Category'
import Search from '@/page/product/Search'
import ProductInfo from '@/page/product/ProductInfo'
// user
import UserCenter from '@/page/user/UserCenter'
import UserAddress from '@/page/user/UserAddress'
import UserOrder from '@/page/user/UserOrder'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    // login
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },

    // shopping cart
    {
      path: "/shopping-cart",
      name: "ShoppingCart",
      component: ShoppingCart
    },

    // product
    {
      path: "/category/:id/products",
      name: "Category",
      component: Category
    },
    {
      path: "/search/:id/products",
      name: "Search",
      component: Search
    },
    {
      path: "/products/:pid",
      name: "ProductInfo",
      component: ProductInfo
    },

    // user
    {
      path: "/user-center",
      name: "UserCenter",
      component: UserCenter
    },
    {
      path: "/orders",
      name: "UserOrder",
      component: UserOrder
    },
    {
      path: "/Addresses",
      name: "UserAddress",
      component: UserAddress
    }

  ]
})
