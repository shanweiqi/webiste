import Vue from 'vue'
import router from './router'
import './assets/scss/base/global.scss'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})