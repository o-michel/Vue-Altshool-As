import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'

// export const bus = new Vue(createApp);
// export const bus = createApp(App);

// new Vue({
//     el: '#app',
//     render:h=> h(App)
// })

createApp(App).use(router).mount('#app')
