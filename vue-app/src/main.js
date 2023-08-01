import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Enable this mount 2 pictures, Is required delete (<Body />; import Body; components:{Body} from App.vue
//createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
