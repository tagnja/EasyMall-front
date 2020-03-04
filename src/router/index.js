import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
// login
import Signin from '@/pages/login/Signin'
import Signup from '@/pages/login/Signup'
// shoppingcart
import ShoppingCart from '@/pages/shoppingcart/ShoppingCart'
// product
import Category from '@/pages/product/Category'
import Search from '@/pages/product/Search'
import ProductInfo from '@/pages/product/ProductInfo'
// user
import UserCenter from '@/pages/user/UserCenter'
import UserAddress from '@/pages/user/UserAddress'
import UserOrder from '@/pages/user/UserOrder'
// test
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    // test
    {
      path: "/home",
      name: "Home",
      component: Home
    },
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
