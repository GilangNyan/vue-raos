import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import en from '@/locale/en.json'
import id from '@/locale/id.json'

const i18n = createI18n({
  locale: 'id',
  messages: {
    en: en,
    id: id
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(i18n)

app.mount('#app')
