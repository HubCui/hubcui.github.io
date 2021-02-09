---
title: 使用vuepress-reco主题快速构建博客
date: 2021-02-07 20:59:53
categories: 
 - Course
tags: 
 - Vuepress
---

## vuepress
>Vue 驱动的静态网站生成器。[Vuepress官方文档](https://vuepress.vuejs.org/zh/)

&emsp; &emsp; VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

&emsp; &emsp; 一个 VuePress 网站是一个由 Vue、Vue Router和 webpack 驱动的单页应用。如果以前使用过 Vue 的话，在开发一个自定义主题的时候，会感受到非常熟悉的开发体验，甚至可以使用 Vue DevTools 去调试你的自定义主题。

## reco主题
>一款简洁而优雅的 vuepress 博客 & 文档 主题。[reco主题文档](https://vuepress-theme-reco.recoluan.com/)

reco主题提供了脚手架可以实现一键创建vuepress项目，并且这个主题是为博客量身打造，节省掉我们配置项目的时间，用来专心书写内容。

## 快速开始
站在巨人的肩膀上使用命令直接安装。
**npx**
```
npx @vuepress-reco/theme-cli init my-blog
```
**npm**
```
# 初始化
npm install @vuepress-reco/theme-cli -g
theme-cli init my-blog

# 安装
cd my-blog
npm install

# 运行
npm run dev

# 编译
npm run build
```
**yarn**

```
# 初始化
yarn global add @vuepress-reco/theme-cli
theme-cli init my-blog

# 安装
cd my-blog
yarn install
```

进入 `blog` 文件夹使用 `npm i` 命令下载一下依赖

然后打开 `blog\docs\.vuepress\config.js`,配置一些自定义信息，具体的可配置信息[立即前往](https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html)。

我们在views目录下新建一个 `first.md` 文件，这个前面的内容相当于是文章的信息描述，具体的可描述信息[立即前往](https://vuepress-theme-reco.recoluan.com/views/1.x/frontMatter.html)。

    ---
    title: 这是我的第一个文章
    date: 2020-05-15
    sidebar: 'auto'
    categories:
    - 博文
    tags:
    - 日常
    ---
    ## 这是我的第一篇文章


然后使用 `npm run dev`将项目运行起来

也可以给文章添加摘要<br/>
**效果：**

![第一篇文章](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-02/oneposts.png "第一篇文章")

## 使用插件
reco文档里面还有个插件市场，提供非常多的[插件](https://vuepress-theme-reco.recoluan.com/views/other/recommend.html)，我们举一个看板娘的例子

安装依赖`npm i @vuepress-reco/vuepress-plugin-kan-ban-niang -D`,然后打开`config.js`配置文件

增加一个plugins配置文件。
```
module.exports = {
"title": "recodemo",
"description": "recodemo",
"dest": "public",
 ... ...
"plugins": [
  [
    "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: ["blackCat"],
      clean: false,
      messages: {
        welcome: '我是lookroot欢迎你的关注 ',
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '再见哦'
      }
    }
  ],
]
}
```
重启项目可以看到效果：

![插件](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-02/pluginscat.png "插件")

## 部署到GitHub

本次主要讲的是部署到GitHub提供的GitPage,首先创建一个 `仓库`，如果你的仓库名为 `用户名.github.io`你就不用再vuepress中做任何修改，如果不为这个名称，你就需要在`config.js`中配置 `base` 属性为你的仓库名。

![创建仓库](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-02/huangjiancangku.png "创建仓库")

创建完成后，将项目克隆到本地，将刚刚写的代码复制过来，这里有个问题，如果你想部署博客的同时也将博客代码同步到git的话，可以通过新建一个分支或者专门存放代码的仓库。

编写`.gitignore`文件：

```
node_modules/
docs/.vuepress/theme
package-lock.json
public/
```

新建两个脚本，一个用来push博客html页面，一个用来push博客源码:

`deploy.sh`用来打包博客，并将打包完成的页面文件推送到我们的仓库。

```
# 生成静态文件
yarn run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'myblog'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:HubCui/hubcui.github.io.git main

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd ../ 
# 删除需要删除的文件
rm -rf public
# rm -rf .temp
```

现在我们打开https://hubcui.github.io页面便可看到效果。

**可选：**<br/>
`push.sh`用来推送源码备份：

```
git add .
git commit -m 'push'
git push origin blogcode
```

如遇到不能直接推送源码的情况：
在根目录右键打开`GITbash`手动按顺序执行以下命令,以后可知直接双击`push.sh`文件推送源码。

```
git init
git add -A
git commit -m 'push'
git push -f git@github.com:HubCui/hubcui.github.io.git blogcode
```