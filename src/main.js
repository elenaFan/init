import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from '@/router/index'
import store from '@/store/index.js'



new Vue({
    el:'#app',
    router,
    store,
    render:function(createElement){
        return createElement(App)
    }
    // components:{login}
})