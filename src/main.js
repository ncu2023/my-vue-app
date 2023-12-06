import { createApp } from 'vue'


// 引入element ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入Bootstrap
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import "bootstrap/scss/bootstrap.scss";

import './style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// demo import
// import testDemo from './demo'
axios.defaults.withCredentials = true;  // 為了將cookie傳給後端
axios.defaults.baseURL = 'http://localhost:8080'

const app = createApp(App);

// 5. vue-router:將vue-router設定到vue APP內
app.use(router.router);
app.use(ElementPlus);
app.use(bootstrap);

app.mount('#app');

// demo import
// console.log(testDemo.a1.show());