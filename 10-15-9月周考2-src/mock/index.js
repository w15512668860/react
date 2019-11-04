import Mock from 'mockjs'
import list from './data.json'

Mock.mock('/list', {
    values: list
})