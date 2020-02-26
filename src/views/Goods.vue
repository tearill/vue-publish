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
            <TabPane label="规格参数">
              <div class="remarks-title">
                <span>规格参数</span>
              </div>
              <div class="item-param-container">
                <span class="item-param-box" v-for="(item,index) in goodsInfo.param" :key="index">
                  <span class="item-param-title">{{item.title}}:</span>
                  <span class="item-param-content">{{item.content}}</span>
                </span>
              </div>
            </TabPane>
            <TabPane label="售后保障">
              <!-- <ShowProductWarranty></ShowProductWarranty> -->
            </TabPane>
            <TabPane label="商品评价">
              <div class="remarks-container">
                <div class="remarks-title">
                  <span>商品评价</span>
                </div>
                <div class="remarks-analyse-box">
                  <div class="remarks-analyse-goods">
                    <i-circle :percent="goodsInfo.remarks.goodAnalyse" stroke-color="#e4393c">
                      <span class="remarks-analyse-num">{{goodsInfo.remarks.goodAnalyse}}%</span>
                      <p class="remarks-analyse-title">好评率</p>
                    </i-circle>
                  </div>
                  <div class="remarks-analyse-tags">
                    <Tag
                      checkable
                      :color="tagsColor[index % 4]"
                      v-for="(item,index) in goodsInfo.remarks.remarksTags"
                      :key="index"
                    >{{item}}</Tag>
                  </div>
                </div>
                <div class="remarks-bar">
                  <span>追评({{goodsInfo.remarks.remarksNumDetail[0]}})</span>
                  <span>好评({{goodsInfo.remarks.remarksNumDetail[1]}})</span>
                  <span>中评({{goodsInfo.remarks.remarksNumDetail[2]}})</span>
                  <span>差评({{goodsInfo.remarks.remarksNumDetail[3]}})</span>
                </div>
                <div
                  class="remarks-box"
                  v-for="(item,index) in goodsInfo.remarks.detail"
                  :key="index"
                >
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
      },
      tagsColor: [ 'blue', 'green', 'red', 'yellow' ]
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
.item-param-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.item-param-box {
  padding: 5px;
  padding-left: 30px;
  width: 240px;
  height: 36px;
  font-size: 14px;
  /* text-align: center; */
  /* background-color: #ccc; */
}
.item-param-title {
  color: #232323;
}
.item-param-content {
  color: #999;
}
.remarks-title {
  padding-left: 15px;
  height: 36px;
  font-size: 16px;
  font-weight: bolder;
  line-height: 36px;
  color: #666666;
  background-color: #F7F7F7;
}
.remarks-analyse-box {
  padding: 15px;
  display: flex;
  align-items: center;
}
.remarks-analyse-goods {
  margin-left: 15px;
  margin-right: 15px;
}
.remarks-analyse-num {
  font-size: 26px;
}
.remarks-analyse-title {
  font-size: 12px;
  line-height: 20px;
}
.remarks-bar {
  padding-left: 15px;
  height: 36px;
  line-height: 36px;
  color: #666666;
  background-color: #F7F7F7;
}
.remarks-bar span {
  margin-right: 15px;
}
.remarks-box {
  padding: 15px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px #ccc dotted;
}
.remarks-user {
  width: 180px;
}
.remarks-user-name {
  padding-left: 15px;
}
.remarks-content-box {
  width: calc(100% - 180px);
}
.remarks-star {
  background-color: #fff;
}
.remarks-content {
  font-size: 14px;
  color: #232323;
  line-height: 28px;
}
.remarks-sub {
  margin-top: 15px;
  color: #ccc;
}
.remarks-time {
  margin-left: 15px;
}
.remarks-page {
  margin: 15px;
  display: flex;
  justify-content:flex-end;
}
/***************商品详情介绍和推荐侧边栏结束***************/
</style>

<style>
/* 改变便签页样式 */
.ivu-tabs-ink-bar {
  background-color: #E4393C !important;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab{
  border-radius: 0px;
  color: #999;
  height: 38px;
  background: #F7F7F7;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active{
  color: #fff;
  background-color: #E4393C;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active:before{
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  color: #fff;
  background: #F7F7F7;
  position: absolute;
  top: 0;
  left: 0;
}
.ivu-rate-star-full:before, .ivu-rate-star-half .ivu-rate-star-content:before {
  color: #E4393C;
}
</style>