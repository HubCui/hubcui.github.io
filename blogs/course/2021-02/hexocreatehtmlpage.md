---
title: 为Hexo创建独立的html页面
date: 2021-02-01 17:21:46
categories: 
 - Course
tags: 
 - Hexo
---
>Hexo主题满足不了我们需要的样式的时候，候我们可以新建一个独立的页面，这个页面不使用主题的渲染，具有自己独立的样式，可以放一些自己的作品，相册之类的个性化页面，以下就介绍这种独立页面的实现方法。

## 方法一：
&emsp; &emsp; 使用 Hexo 提供的跳过渲染配置，在博客根目录的配置文件 `_config.yml` 里找到 `skip_render` 关键字，在后面添加想要跳过渲染的页面，比如我们创建 `\source\about\index.html`， 配置文件填写：`skip_render: about\**`，那么就表示 `\source\about` 里所有的文件将跳过渲染，里面的文件将会被直接复制到 `public` 文件夹，此时就会得到一个独立的 about 页面；官方文档：https://hexo.io/docs/configuration

## 方法二：
&emsp; &emsp; 在文章头部的 `Front-matter` 里添加配置 `layout: false` 来跳过渲染配置，比如我们要使 about 页面跳过渲染，创建 `\source\about\index.md`，将这个页面的相关 HTML 代码写进`.md`文件并保存，然后在 `index.md` 的头部写入：

```
---
layout: false
---
{% raw %}
xxxxxxxxxxxxx
xx HTML代码 xx
xxxxxxxxxxxxx
{% endraw %}
```

PS：`Front-matter` 是 `.md` 文件最上方以 — 分隔的区域，用于指定个别文件的变量，官方文档：https://hexo.io/docs/front-matter。