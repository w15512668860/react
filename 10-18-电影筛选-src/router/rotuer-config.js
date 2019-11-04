import Home from '../views/home/Home'
import Movie from '../views/home/movie/Movie'
import Star from '../views/home/star/Star'
import Detail from '../views/detail/Detail'

const routes = [
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/movie',
                component: Movie
            },
            {
                path: '/home/star',
                component: Star
            },
            {
                path: '/home',
                redirect: '/home/movie'
            }
        ]
    },
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '/',
        redirect: '/home'
    }
]

export default routes