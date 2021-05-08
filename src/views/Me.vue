<template>
  <div class="me">
    <scroller
      class="sroll"
      :on-refresh="refresh"
      :on-infinite="infinite"
      refresh-layer-color="rgba(255,255,255,0)"
      loading-layer-color="#FBD391"
      refreshText=""
      noDataText=""
      ref="myScroller"
    >
      <div class="configuration">
        <router-link to="">
          <i class="iconfont icon-shezhi"></i>
        </router-link>
        <router-link to="">
          <i class="iconfont icon-xiaoxi"></i>
        </router-link>
      </div>
      <div class="container">
        <div class="meInfo">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1790045140,810974104&fm=26&gp=0.jpg"
            alt=""
            class="pic"
          />
          <span>嘻嘻嘻</span>
        </div>
        <div class="listCategory">
          <div class="orderList">
            <div clas="obligation">
              <i class="iconfont icon-qianbao"></i>
              代付款
            </div>
            <div class="awShipments">
              <i class="iconfont icon-huoche"></i>
              代发货
            </div>
            <div class="awReception">
              <i class="iconfont icon-xiangzi-xian"></i>
              代收货
            </div>
          </div>
          <div class="affterSaleList">
            <div class="awEvaluate">
              <i class="iconfont icon-hua"></i>
              带评价
            </div>
            <div class="affterSale">
              <i class="iconfont icon-shouhou"></i>
              售后
            </div>
            <div class="allOrders">
              全部订单
              <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
            </div>
          </div>
        </div>

        <div class="operationListWrap">
          <div class="coupon">
            <p class="quantity">0</p>
            <p>优惠卷</p>
          </div>
          <div class="giftCard">
            <p class="quantity">0</p>
            <p>礼品卡</p>
          </div>
          <div class="myFavorite">
            <p class="quantity">0</p>
            <p>我的收藏</p>
          </div>
          <div class="browsingHistory">
            <p class="quantity">0</p>
            <p>浏览记录</p>
          </div>
        </div>

        <div class="posts">
          <div class="myposts">
            <i class="iconfont icon-yumaobi"></i>
            <span>我的帖子</span>
          </div>
          <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
        </div>
      </div>
    </scroller>
    <!--底部选项卡-->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img
          v-if="selected == 'home'"
          src="../assets/首页2.png"
          alt=""
          slot="icon"
        />
        <img v-else src="../assets/首页1.png" alt="" slot="icon" />
        <span v-if="selected == 'home'" style="color: red">首页</span>
        <span v-else>首页</span>
      </mt-tab-item>
      <mt-tab-item id="feilei">
        <img
          v-if="selected == 'feilei'"
          src="../assets/分类2.png"
          alt=""
          slot="icon"
        />
        <img v-else src="../assets/分类1.png" alt="" slot="icon" />
        <span v-if="selected == 'feilei'" style="color: red">分类</span>
        <span v-else>分类</span>
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img
          v-if="selected == 'cart'"
          src="../assets/购物车2.png"
          alt=""
          slot="icon"
        />
        <img v-else src="../assets/购物车1.png" alt="" slot="icon" />
        <span v-if="selected == 'cart'" style="color: red">购物车</span>
        <span v-else>购物车</span>
      </mt-tab-item>
      <mt-tab-item id="me">
        <img
          v-if="selected == 'me'"
          src="../assets/我2.png"
          alt=""
          slot="icon"
        />
        <img v-else src="../assets/我1.png" alt="" slot="icon" />
        <span v-if="selected == 'me'" style="color: red">我</span>
        <span v-else>我</span>
      </mt-tab-item>
    </mt-tabbar>
    <!--底部选项卡结束-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "me",
    };
  },
  methods: {
    // 下拉刷新
    refresh() {
      //要刷新的数据请求

      //关闭loading
      this.timeout = setTimeout(() => {
        this.$refs.myScroller.finishPullToRefresh();
      }, 0);
    },
    infinite() {
      console.log("上拉加载");
      this.$refs.myScroller.finishInfinite(true);
    },
  },
  watch: {
    selected(newval, oldav1) {
      if (newval == "feilei") {
        this.$router.push("feilei");
      } else if (newval == "cart") {
        this.$router.push("cart");
      } else if (newval == "me") {
        this.$router.push("me");
      } else if (newval == "home") {
        this.$router.push("/");
      }
    },
  },
};
</script>
<style lang="scss">
@import "../assets/css/Me.scss";
</style>

