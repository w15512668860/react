import List from '../views/List'
import Cart from '../views/Cart'

const routes = [
    {
        path: '/list',
        component: List
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/',
        redirect: '/list'
    }
]

export default routes