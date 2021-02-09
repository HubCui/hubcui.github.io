---
title: 给Hexo博客绑定个人域名
date: 2021-01-22 12:25:51
categories: 
 - Course
tags: 
 - Hexo
---
>现在我的个人网站的地址是 xxx.github.io，觉得这个网址太够逼格，这时就需要为博客绑定一个个人域名了。
---
### 购买域名
首先随便在哪个网站买就好，我买的是 eveaide.com，各个后缀的价格不太一样，比如最广泛的.com就比较贵，看个人喜好。
### 添加CNAME
直接修改hexo目录下 `source` 文件夹内的`CNAME`文件的内容,用编辑器打开,添加购买的域名，只能添加一个。
### DNS解析
- 先获取你的github网址的ip地址为，通过在cmd中ping你的网址`xxxx.github.io`获取：
![github的地址](https://cdn.jsdelivr.net/gh/c164660339/CDN@main/blog/posts/2021-01/github-ip.png  "github的地址")
- 在DNS中添加解析：添加记录类型：`A`，主机记录：`@`,记录值：`ip 地址`。
- （可选）添加第二个解析：添加记录类型：`CNAME`，主机记录：`www`,记录值：`xxxx.github.io`，这样不管网址是否输入www都可以直达我们的网站。
![DNS解析](https://cdn.jsdelivr.net/gh/c164660339/CDN@main/blog/posts/2021-01/dns.png "DNS解析")

### 重新部署
- 最后在cmd中输入命令：
```
$ hexo clean
$ hexo g
$ hexo d
```
- 稍微过一会在浏览器中输入新域名，就可以看到搭建的博客啦！