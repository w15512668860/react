import Mock from 'mockjs'
import list from './movielist.json'

Mock.mock('/movieList', {
    values: list
})