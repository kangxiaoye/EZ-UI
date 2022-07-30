module.exports = {
    title: 'EZ UI',
    description: '一个便捷易用的 UI 框架',
    themeConfig: {
        nav: [
            { text: '主题', link: '/' },
            { text: '文档', link: '/get-started/' },
            { text: '交流', link: 'https://google.com' },
        ],
        sidebar: [
            {
              title: '欢迎使用EZ UI',
                collapsable: false
            },
            {
                title: '入门',
                path:"/",
                collapsable: false,
                children: [
                    '/get-started/',
                   '/install/'
                ]
            },

            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/layout',
                    '/components/grid',
                    '/components/input',
                    '/components/toast',
                    '/components/tabs',
                    '/components/collapse',
                ]
            },

        ]
    }

}
