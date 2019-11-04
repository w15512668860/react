import Mock from 'mockjs'

Mock.mock('/list', {
    values: [
        {
            type: 'A',
            list: ['鞍山', '安阳']
        },
        {
            type: 'B',
            list: ['北京', '保定', '包头']
        },
        {
            type: 'C',
            list: ['重庆', '长沙', '长春']
        },
        {
            type: 'D',
            list: ['大连', '大庆', '大同', '东莞']
        },
        {
            type: 'E',
            list: ['鄂尔多斯']
        },
        {
            type: 'F',
            list: ['福州', '佛山']
        }
    ]
})