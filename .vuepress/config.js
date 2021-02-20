module.exports = {
  title: "HubCui's Blog",
  description: 'HubCui的技术博客，专注于分享各种干货知识，同时分享个人项目、技术文章等...',
  dest: './public',//默认在vuepress目录下
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  markdown: {
    lineNumbers: true,//代码块行号
    externalLinks: 
    { target: '_blank', rel: 'nofollow noopener noreferrer' }//外部链接加上nofollow
  },
  theme: 'reco',
  // permalink: "/:regular",//永久链接
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '项目', 
        icon: 'reco-api',
        items: [
          { text: 'EVE市场', link: '/item/article/' },
        ]
      },
      { text: '文档', 
        icon: 'reco-document',
        items: [
          { text: 'vuepress手册', link: '/docs/vuepress/' },
          { text: '正则表达式手册', link: 'https://tool.oschina.net/uploads/apidocs/jquery/regexp.html', icon: 'reco-coding' }
        ]
      },
      { text: '留言板', link: '/blogs/other/messageboard.md', icon: 'reco-suggestion' },
      { text: '关于', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/HubCui', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {//侧边栏手动设置
      '/docs/vuepress/': [
        '',
        'theme',
        'plugin',
        'api'
      ],
      '/item/article/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    subSidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'HubCui',
    // 作者头像
    authorAvatar: 'https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/img/avatar.jpg',
    // 备案号
    // record: 'ICP 备案文案',
    // recordLink: 'ICP 备案指向链接',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间
    startYear: '2020',
    // 关闭404 腾讯公益页面
    // noFoundPageByTencent: false
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'otJJhc55ebLXYnS0mbwCMNWc-gzGzoHsz',// your appId
      appKey: 'u7N63cPLce0li79HJPpYO45T', // your appKey
      avatar:'wavatar',//头像风格
      placeholder:'# 在昵称栏输入QQ号后自动获取QQ头像和邮箱。',//评论框占位提示符。
      enableQQ: true,//是否自动获取QQ头像和邮箱
      requiredFields: ['nick','mail'],//必填项
      pageSize: '20',//每页显示评论数
      showComment: false//是否默认显示评论栏
    }
  },
  markdown: {
    lineNumbers: true
  }
}  
