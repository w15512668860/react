import Mock from 'mockjs'

Mock.mock('/movielist', {
    values: [
        {
            title: "哪吒",
            address: "大陆",
            type: "动作"
        },
        {
            title: "中国惊奇先生",
            address: "大陆",
            type: "惊悚"
        },
        {
            title: "潘金莲大战西门庆",
            address: "香港",
            type: "爱情"
        },
        {
            title: "实习生",
            address: "美国",
            type: "励志"
        },
        {
            title: "新世界",
            address: "韩国",
            type: "警匪"
        },
        {
            title: "釜山行",
            address: "韩国",
            type: "惊悚"
        },
        {
            title: "咒怨",
            address: "日本",
            type: "惊悚"
        },
    ]
})