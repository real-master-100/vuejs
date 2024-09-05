import { createApp } from 'vue'
  
import App from './App.vue'
import TodoItem from './components/TodoItem.vue'
import SlotCamp from "./components/SlotCamp.vue"

const app = createApp(App)
app.component('todo-item', TodoItem)
app.component('slot-comp', SlotCamp)

app.mount('#app')