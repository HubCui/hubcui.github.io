---
title: Hexo常用命令
date: 2021-01-21 23:02:38
categories: 
 - Course
tags: 
 - Hexo
---
>本文是个人总结经常用到的命令，全部命令可以移步: [手册](https://hexo.io/zh-cn/docs/commands) 查看。
<!-- more -->
---
## 常用命令

### 创建网站
```
$ hexo init [folder]
```
- 新建一个网站。`folder`为可选参数，用来指定初始化目录的路径，一般不填，则Hexo 默认在目前的文件夹建立网站。

### 创建文章
```
$ hexo new "My New Post"
```
- `My New Post`用来指定文章标题，如果参数值中含有空格，则需要使用双引号包围。

### 草稿
```
$ hexo new draft "new draft"
```
- `new draft`用来指定文章标题，相当于很多博客都有的“私密文章”功能。如果参数值中含有空格，则需要使用双引号包围。

### 运行服务
```
$ hexo server
# 或
$ hexo s
```
- `hexo server`命令用于启动本地服务器，一般可以简写为`hexo s`。

### 生成静态文件
```
$ hexo generate
# 或
$ hexo g
```
- `hexo generate`命令用于生成本地html文件，一般可以简写为`hexo g`。

### 网站部署
```
$ hexo deploy
# 或
$ hexo d
```
- `hexo deploy`命令用于推送到远程服务器，一般可以简写为`hexo d`。

### 清理缓存
```
$ hexo clean
```
- 此命令用于清理缓存文件，是一个比较常用的命令。

## 组合命令

### 生成并部署
```
$ hexo deploy -g
```
- 生成静态文件后远程部署

### 生成并运行
```
$ hexo server -g
```
- 生成静态文件后本地运行

## 功能命令
网站显示异常时可尝试此命令

### 安全模式
```
$ hexo --safe
```
- 使用安全模式，用于禁用加载插件和脚本，安装新插件时遇到问题可尝试此操作。

### 调试模式
```
$ hexo --debug
```
- 使用调试模式，用于将消息详细记录到终端和`debug.log`文件。

### 静默模式
```
$ hexo --silent
```
- 使用静默模式，用于静默输出到终端。