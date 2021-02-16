---
title: 如何搭建Hexo博客并发布到GitHub
date: 2021-01-21 22:01:48
categories: 
 - Course
tags: 
 - Hexo
---

>疫情期间我刚用hexo搭建完我的博客，而我这里最近封城了近1个月,在家想搭建一个个人网站写写东西做做笔记，秉着“不折腾的程序员不是好艺术家”的精神，我体验了下用Hexo搭建博客，这篇文章主要记录为什么要用Hexo，以及Hexo搭建博客的一些tips。
<!-- more -->
---

# 背景
&emsp; &emsp; 目前主流的博客很多，CSDN，博客园，简书等平台，注册即用，用户交互做的好，不用考虑SEO问题，百度直接能搜索到。缺点是比较不自由，无法高度自定义样式并且,会受到平台的各种限制。

&emsp; &emsp; 而自己搭建博客的成本实在是太高了，需要购买域名和服务器，对于我目前需要快速搭建起博客，还想要样式多无需服务器，最主要的还是可以白嫖的情况下，那么就有第三种选择。

&emsp; &emsp; 最终选择采用直接在github page平台上托管我的博客。这样就可以安心的来写作，并且纯静态安全性更高不需要考虑安全性问题，至于之前考虑Hugo由于只有生成速度优势其他方面完全比不过Hexo，而且hexo作为一个快速简洁的博客框架，横向对比对比其他博客框架，满足我的所有需求的情况下，而且用它来搭建博客真的非常简单。
# 技术部分

## 安装 Git 和 node环境
使用Hugo前需要安装Git 和 Node.js开发环境，点击下方对应官网下载安装即可。
### [Git下载](https://git-scm.com/download/win)
下载后会有一个Git Bash的命令行工具，以后就用这个工具来使用git。
安装步骤：双击下载好的exe文件，一路next就好。
查看版本：
`git --version`
![查看git版本](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-01/gitversion.png "查看git版本")
### [Node.js下载](https://nodejs.org/en/download/)
选择LTS版本就行了。
安装步骤：双击打开安装，也是一路next，不过在Custom Setup这一步记得选 `Add to PATH` ,这样就可以不用自己去配置电脑上环境变量是否配置。
查看版本：
`node -v`
`npm -v`
![查看node版本](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-01/node-v.png "查看node版本")

## 安装Hexo
前面git和nodejs安装好后，就可以安装hexo了。
1. 打开cmd输入命令全局安装hexo-cli：
`npm install -g hexo-cli`
2. 用命令查看一下版本(如图表示安装成功)：
`hexo -v`
![查看hexo版本](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-01/hexo-v.png "查看hexo版本")
3. 接下来初始化hexo(blog改用什么名字都可以)：
`hexo init blog`
4. 进入文件夹并安装依赖：
`cd blog`
`npm install`
5. 输入命令运行hexo的服务：
`hexo g`
`hexo s`
运行命令后，在浏览器输入`localhost:4000`就可以看到你生成的博客了。
- 安装依赖后，指定文件夹目录结构:
|文件名|功能|
|-|-|
|node_modules|依赖包|
|public|存放生成的页面|
|scaffolds|生成文章的一些模板|
|source|用来存放你的文章|
|themes|主题|
|_config.yml|博客的配置文件|
|db.json|source解析所得到的|
|package.json|项目所需模块项目的配置信息|

## GitHub代码托管
先要一个GitHub账户,没有可以先注册账户。

### 创建仓库
创建名称为`xxx.github.io`的仓库，其中xxx是你的github账号用户名，一定按照这个命名规则将部署到GitHub page的时候，才会被识别，如下图：
![创建仓库](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-01/create-repo.png "创建仓库")

### 配置GitHub
在gitbash中依次输入GitHub的用户名和GitHub的邮箱：
![username](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-01/username.png "配置GitHub用户名")
![email](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-01/email.png "配置GitHub邮箱")

### 创建SSH
1. 在gitbash中输入`ssh-keygen -t rsa -C "youremail"`生成ssh。一路回车,这个时候它会告诉你已经生成了.ssh的文件夹。在你的电脑中找到这个文件夹。
id_rsa.pub是公共秘钥
2. 将上面获取的ssh放到github中：
添加一个 [SSH key] ，title随便取，key就填id_rsa.pub里的内容。
![打开设置](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-01/settings.png "打开settings")
![SSH](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-01/ssh-key.png "添加SSH key")
3. 在gitbash中输入`ssh -T git@github.com`验证是否添加成功。

### 修改Hexo配置文件
打开blog项目文件夹，修改_config.yml文件(冒号后必须添加空格)：
```deploy:
  type: git
  repo: https://github.com/YourgithubName/YourgithubName.github.io.git(你的GitHub仓库地址)
  branch: main
  ```

### 将hexo部署到GitHub
1. 先安装hexo-deployer-git：
输入`npm install hexo-deployer-git --save`（这样才能用命令将hexo部署到GitHub）
2. 输入部署命令(最好每次都按照如下步骤部署)：
`hexo clean` *清除之前生成的静态文件*
`hexo g` *生成静态文件*
`hexo d` *部署文件*
推送的过程中可能要输入你的username及passward。如下：
![部署到GitHub](https://cdn.jsdelivr.net/gh/HubCui/CDN@main/blog/posts/2021-01/deploy.png "部署到GitHub")
3. 在浏览器中输入`http://yourgithubname.github.io`就可以看到你的个人博客啦(yourgithubname是仓库名),如果无法显示多等一会就行，会有一定延迟。

# 总结
&emsp; &emsp; 到这里Hexo就基本搭建完了。很多都是参考别的博客设置的，写这篇文章主要针对从来没用过Hexo搭建过的小伙伴，除此之外，本文只介绍了从安装hexo框架到部署至GitHub的步骤，需要设置主题和美化以及添加其他功能的小伙伴，可以参考我的其他文章。