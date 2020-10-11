import Router from 'vue-router'
import login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
// import store from '../store'
import JwtService from "../services/JwtService";


const ifNotAuthenticated = (to, from, next) => {
    if (!JwtService.getToken()) {
        next()
        return
    }
    next('/')
}

const ifAuthenticated = (to, from, next) => {
    if (JwtService.getToken()) {
        next()
        return
    }
    next('/login')
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter: ifAuthenticated,

        },
        {
            path: '/login',
            name: 'login',
            component: login,
            beforeEnter: ifNotAuthenticated,

        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup,
            beforeEnter: ifNotAuthenticated,

        }
    ]
})