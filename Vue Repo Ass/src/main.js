import { createApp } from 'vue'
// import Vue from 'vue'
import router from './router'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faUserSecret)

// export const bus = new Vue(createApp);
// export const bus = createApp(App);

// new Vue({
//     el: '#app',
//     render:h=> h(App)
// })

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
