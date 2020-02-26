# learn-vue-components  

学习 Vue 组件设计  

1. Vue 组件学习，使用 iview, element-ui...Vue开发框架，快速上手组件式开发  
2. 分析特定业务场景，对专业组件进行分析  
3. 组件发布 npm，学习一些组件  

## 搜索组件  

- 电商网站搜索组件设计  
  1. searchbar --- input + button  
  2. tags 功能 --- 活动，广告等上线  
  
<search />  

## 表单组件  

1. iview 的 Form 通过组件和配置的理念，比原生 html, css, js 写法更好用  
   html 标签是贫瘠的
2. Form FormItem i-input Button 组件形成表单的 UI  
3. :model :rules="" 表单的验证是配置出来的  
(Vue 中不用 id，用 ref)

## 注册组件  

1. 栅格系统  
   row + col  左右两列  
2. vue-router 结合 注册的三个过程  

## 商品详情

- vuex --- Vue 全家桶中的数据管理  
  vue --- MVVM 组件化 指令  
  vue-router --- 路由  
  vuex --- 状态管理  
  data() {
     goods: {
        // 数据从后台来 /api  
        ajax -> backend 通信
     }
  }  

- 数据设计  
  每件商品  
  ```
  goodsInfo {
     1. goodsImg: [] --- 商品详情图片  
     2. param: {} --- 商品参数  
     3. remarks: { --- 评论  
          detail: [], --- 评论列表  
          remarksNumDetail: [], --- 各种类型评论的数量  
          remarksTags: [], --- 评价标签  
          goodAnalyse --- 好评比例  
        } 
  }
  ```

- 要使用到的 iview 组件  
  Tabs(容器组件)>TabPane(每个)  
  Tag  
  Circle  
  Rate  
  Page  
  