import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import Classes from './components/Classes.vue'
import Schedule from './components/Schedule.vue'
import Account from './components/Account.vue'
import Users from './components/Users.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

// Install BootstrapVue
Vue.use(BootstrapVue)
import DropdownPlugin from 'bootstrap-vue';
import TablePlugin from 'bootstrap-vue';
import { TooltipPlugin } from 'bootstrap-vue'

Vue.use(TooltipPlugin)
Vue.use(DropdownPlugin);
Vue.use(TablePlugin);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import { FormPlugin } from 'bootstrap-vue'
Vue.use(FormPlugin);
import { ToastPlugin } from 'bootstrap-vue'
Vue.use(ToastPlugin)
const routes = [
    { path: '/schedule', component: Schedule },
    { path: '/classes', component: Classes },
    { path: '/users', component: Users },
    { path: '/account', component: Account }

];

const router = new VueRouter({
    routes: routes, // short for `routes: routes`
});

Vue.prototype.$currentUser = {id:1, name:'Pauline', organization:'Pauline BV', roles:['admin','Gevorderd'], credit:3}

new Vue({
router,
render: h => h(App)
}).$mount('#app')
