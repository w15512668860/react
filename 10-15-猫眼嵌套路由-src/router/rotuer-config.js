import Home from '../views/home/Home'
import Movie from '../views/home/movie/Movie'
import Hot from '../views/home/movie/hot/Hot'
import Will from '../views/home/movie/will/Will'

import Cinema from '../views/home/cinema/Cinema'
import My from '../views/home/my/My'
import Login from '../views/login/Login'

const routes = [
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/movie',
                component: Movie,
                children: [
                    {
                        path: '/home/movie/hot',
                        component: Hot
                    },
                    {
                        path: '/home/movie/will',
                        component: Will
                    },
                    {
                        path: '/home/movie',
                        redirect: '/home/movie/hot',
                    }
                ]
            },
            {
                path: '/home/cinema',
                component: Cinema
            },
            {
                path: '/home/my',
                component: My
            },
            {
                path: '/home',
                redirect: '/home/cinema',
            },
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        redirect: '/home',
    },
]

export default routes