<template>
  <div id="app">
    <div class="container">
      <div class="item-intro-detail" ref="itemIntroDetail">
        <div class="item-intro-nav item-tabs">
          <Tabs>
            <TabPane label="商品介绍">
              <div class="remarks-title">
                <span>商品介绍</span>
              </div>
              <div class="item-intro-img" ref="itemIntroGoods">
                <img :src="item" alt v-for="(item,index) in goodsInfo.goodsImg" :key="index" />
              </div>
            </TabPane>
            <TabPane label="商品评价">
              <TabPane label="商品评价">
                <div class="remarks-container">
                  <div class="remarks-title">
                    <span>商品评价</span>
                  </div>
                  <div class="remarks-box" v-for="(item,index) in goodsInfo.remarks.detail" :key="index">
                    <div class="remarks-user">
                      <Avatar icon="person" />
                      <span class="remarks-user-name">{{item.username}}</span>
                    </div>
                    <div class="remarks-content-box">
                      <p>
                        <Rate disabled :value="item.values" allow-half class="remarks-star"></Rate>
                      </p>
                      <p class="remarks-content">{{item.content}}</p>
                      <p class="remarks-sub">
                        <span class="remarks-item">{{item.goods}}</span>
                        <span class="remarks-time">{{item.time}}</span>
                      </p>
                    </div>
                  </div>
                  <div class="remarks-page">
                    <Page :total="40" size="small" show-elevator show-sizer></Page>
                  </div>
                </div>
              </TabPane>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api"; // 前后端分离的点
export default {
  data() {
    return {
      goodsInfo: {
        goodsImg: [],
        param: {}, // 商品参数
        remarks: {
          detail: [], // 评论列表
          remarksNumDetail: [], // 各种类型评论的数量
          remarksTags: [], // 评价标签
          goodAnalyse: 0
        } // 评论
      }
    };
  },
  mounted() {
    // 组件挂载到页面上后 --- 请求数据
    // 把没有数据的部分，比如布局，先挂载上去 让用户快速的看到结构，同时立即启动数据通信把数据 MVVM 显示到已挂载的组件上
    api.getGoodsInfo().then(data => {
      console.log(data);
      this.goodsInfo = data;
    });
  }
};
</script>

<style>
.remarks-title {
  padding-left: 15px;
  height: 36px;
  font-size: 16px;
  font-weight: bolder;
  line-height: 36px;
  color: #666666;
  background-color: #f7f7f7;
}
.item-intro-detail {
  margin-left: 30px;
  width: calc(80vw - 300px);
}
.item-intro-nav {
  width: 100%;
  height: 38px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #e4393c;
}
.item-intro-img {
  width: 100%;
}
.ivu-tabs-ink-bar {
  background-color: #e4393c !important;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab {
  border-radius: 0px;
  color: #999;
  height: 38px;
  background: #f7f7f7;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active {
  color: #fff;
  background-color: #e4393c;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active:before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  color: #fff;
  background: #f7f7f7;
  position: absolute;
  top: 0;
  left: 0;
}
</style>