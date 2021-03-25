import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import './style/common.css';

import Api from "./api";


Vue.config.productionTip = false;
Vue.prototype.$api = Api;
Vue.use(Antd);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
