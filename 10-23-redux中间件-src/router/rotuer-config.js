import Home from '../views/Home'
import Citylist from '../views/Citylist'

const routes = [
    {
        path: '/citylist',
        component: Citylist
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/',
        redirect: '/home'
    }
]

export default routes