import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview' // UI 组件
import 'iview/dist/styles/iview.css'

Vue.use(iView) // iview 组件都可访问
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
