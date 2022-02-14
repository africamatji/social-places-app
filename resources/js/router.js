import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
//import store from './store/';
import Login from './components/auth/Login';
import Welcome from './components/Welcome';
import Contact from './components/Contact';

const routes = [
    {
        path: '/',
        component: Welcome,
        name: 'welcome',
    },    
    {
        path: '/login',
        component: Login,
        name: 'login',
    },
    {
        path: '/contact',
        component: Contact,
        name: 'contact',
    },
];

const router = new Router({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth) {
        next({
            name: "login"
        });
    } else{
        next();
    }
});

export default router;
