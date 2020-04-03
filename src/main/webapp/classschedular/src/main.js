import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Classes from './components/Classes.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    //{ path: '/schedule', component: Schedule },
    { path: '/classes', component: Classes },
    //{ path: '/users', component: Users }

];

const router = new VueRouter({
    routes: routes, // short for `routes: routes`
});


new Vue({
router,
render: h => h(App)
}).$mount('#app')
