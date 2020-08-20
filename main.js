import Vue from 'vue'
import App from './App'
import store from "./store";

import * as filters from "./filters";

// 注册常用全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
