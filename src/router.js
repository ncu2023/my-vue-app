// 2. vue-router:imprt VueRouter需要用到的方法
import { createRouter, createWebHistory } from 'vue-router'

import Login from './pages/Login.vue'
import MyButtonNo1 from './components/MyButtonNo1.vue'
import HelloWorld from './components/HelloWorld.vue'
import User from './pages/User.vue'
import Product from './pages/product.vue'

// 3. vue-router: 定義url要跳轉的元件畫面
const routes = [
    { 
        path: '/', 
        component: Login, 
    },
    { 
        path: '/btn', 
        component: MyButtonNo1, 
    },
    {
        path: '/helloworld',
        component: HelloWorld
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/product',
        component: Product
    }
  ]

// 4. vue-router:建立vue-router物件
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

// 將router物件export給main.js使用
export default {
    router
}