module.exports = {
  lang: 'zh-CN',
  title: 'GhenChow Wiki',
  port: "8080",
  description: '最真实的 MC 魅力江南古城',
  themeConfig: {
    smoothScroll: true
  },
  themeConfig: {
    search: false,
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '规划',
        items: [{
            text: '总体规划',
            link: '/design/global/'
          },
          {
            text: '详细规划',
            link: '/design/detail/'
          }
        ]
      },
      {
        text: '介绍',
        items: [{
            text: '社区介绍',
            link: '/guide/about/'
          },
          {
            text: '城市介绍',
            link: '/guide/ghenchow/'
          }
        ]
      },
    ]
  }
}