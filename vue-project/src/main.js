import { createApp } from 'vue'

import App from './App.vue'
import FootItem from './components/FootItem.vue'

const app = createApp(App)
app.component('food-item', FootItem)
app.mount('#app')