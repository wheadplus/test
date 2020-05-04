module.exports = {
    //   base:'/Drip/',
    title: 'Drip-UI',
    description: 'vue UI',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/button' },
            { text: 'Github', link: 'https://github.com/wheadplus/Drip' },
        ],
        sidebar: [
            {
                title: '介绍',
                children: [
                    ['/', '介绍']
                ]
            },
            {
                title: '组件',
                collapsable: true,
                children: [
                    ['/guide/button', '基础组件'],
                    ['/guide/xx', 'xx'],
                    // ['/guide/tabs', 'tabs标签'],
                    // ['/guide/toast', 'toast对话框'],
                    // ['/guide/popover', 'popover弹出框'],
                    // ['/guide/slides', 'slides轮播'],
                    // ['/guide/collapse', 'collapse手风琴'],
                ]
            }

        ]
    }
}

