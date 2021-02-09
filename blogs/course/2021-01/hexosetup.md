---
title: Hexo高级设置
date: 2021-01-30 22:35:07
categories: 
 - Course
tags: 
 - Hexo
---
## 模板设置
当我们使用命令 `hexo new "title"` 创建文章时，Hexo 会根据 `/scaffolds/post.md` 对新文章进行初始化。

换言之，`/scaffolds/post.md` 就是新文章的 模板，所以我们可以修改它来适应自己的写作习惯。

一个简单的示例如下：

    title: Title
    date: YYYY-MM-DD HH:MM:SS
    tags: [tag1, tag2, ...]
    categories: category

作者: HappyCui
链接: https://happycui.com/posts/7aae65db.html
来源: 天码行空
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 头部设置
在每篇利用 Hexo 创建的文章的开头，都会有对文章进行说明的文字，叫做 `文章头部`。

文章的头部除了可以设置文章标题、发布日期等基础信息外，还可以为文章添加标签、分类等。

一个简单的示例如下：

    title: Title
    date: YYYY-MM-DD HH:MM:SS
    tags: [tag1, tag2, ...]
    categories: category
    
`注意`：属性和属性值之间必须有一个空格，否则会解析错误。

## 首页显示
在利用 Hexo 框架搭建的博客网站中，首页会显示文章的内容，且默认显示文章的全部内容。

如果当文章太长的时候就会显得十分冗余，所以我们有必要对其进行精简。

这时，我们只需在文章中使用 `<!--more-->` 标志即可，表示只会显示标志前面的内容。