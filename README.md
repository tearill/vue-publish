# vue-publish

1. npm run serve 开发
2. npm run build 准备打包
3. 将 dist/index.html 中路径全部改为相对路径 ./  
   上线前的代码都在 dist 下  
   提交  
4. // 创建新分支 git branch test  
   // 切换分支 git checkout test  
   创建并切换新分支 git checkout -b gh-pages  -> github 开源项目的托管分支 MIT 协议  
   gh-pages 分支上把 dist 目录下的代码搞过去  
   把 dist 代码留下移出来到根目录，其他的删除  
5. 提交到 gh-pages 分支(git push origin gh-pages)  
   源码在 master 分支，上线的代码在 gh-pages 分支下  

# learn-vue-components  

学习 Vue 组件设计  

1. Vue 组件学习，使用 iview, element-ui...Vue开发框架，快速上手组件式开发  
2. 分析特定业务场景，对专业组件进行分析  
3. 组件发布 npm，学习一些组件  

- 电商网站搜索组件设计  
  1. searchbar --- input + button  
  2. tags 功能 --- 活动，广告等上线  
  
<search />  

## 表单  
1. iview 的 Form 通过组件和配置的理念，比原生 html, css, js 写法更好用  
   html 标签是贫瘠的
2. Form FormItem i-input Button 组件形成表单的 UI  
3. :model :rules="" 表单的验证是配置出来的  
(Vue 中不用 id，用 ref)
