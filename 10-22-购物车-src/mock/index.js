import Mock from 'mockjs'

Mock.mock('/list', {
    values: [
        {
            id: 0,
            title: "小米",
            price: 10,
            count: 0
        },
        {
            id: 1,
            title: "菠菜",
            price: 5,
            count: 0
        },
        {
            id: 3,
            title: "窝窝头",
            price: 0.25,
            count: 0
        },
        {
            id: 4,
            title: "烤山药",
            price: 2,
            count: 0
        },
    ]
})