import List from '../views/list/List'
import Detail from '../views/detail/Detail'

const routes = [
    {
        path: '/list',
        component: List
    },
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '/',
        redirect: '/list'
    }
]

export default routes