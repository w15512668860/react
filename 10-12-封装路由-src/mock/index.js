import Mock from 'mockjs'

Mock.mock('/swiperList', {
    values: [
        'http://img1.imgtn.bdimg.com/it/u=1563980539,1672265910&fm=26&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1714535268,2805275439&fm=26&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=2048116090,3629196295&fm=26&gp=0.jpg'
    ]
})

const list = [
    {
        id: 0,
        title: '旧日普吉',
        desc: '普吉岛',
        time: '2019-10-11'
    },
    {
        id: 1,
        title: '旧日普吉1',
        desc: '普吉岛1',
        time: '2019-10-12'
    },
    {
        id: 2,
        title: '旧日普吉2',
        desc: '普吉岛2',
        time: '2019-10-13'
    }
]

Mock.mock('/list', {
    values: list
})

Mock.mock('/detail', {
    values: [
        {
            id: 0,
            title: '旧日普吉',
            desc: '普吉岛',
            time: '2019-10-11'
        },
        {
            id: 1,
            title: '旧日普吉1',
            desc: '普吉岛1',
            time: '2019-10-12'
        },
        {
            id: 2,
            title: '旧日普吉2',
            desc: '普吉岛2',
            time: '2019-10-13'
        }
    ]
})