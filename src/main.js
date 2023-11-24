import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import router from './router'

// demo import
// import testDemo from './demo'

const app = createApp(App);

// 5. vue-router:將vue-router設定到vue APP內
app.use(router.router);

app.mount('#app');

// demo import
// console.log(testDemo.a1.show());