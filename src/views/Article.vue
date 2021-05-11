<template>
  <div class="article">
    <my-head></my-head>
    <mt-navbar v-model="navactive">
      <mt-tab-item id="1">商品</mt-tab-item>
      <mt-tab-item id="2">详情</mt-tab-item>
      <mt-tab-item id="3">评价</mt-tab-item>
    </mt-navbar>
    <!-- -------------------------------------- -->
    <mt-tab-container v-model="navactive">
      <mt-tab-container-item id="1">
        <my-conter :listxiabiao="listxiabiao"></my-conter>
      </mt-tab-container-item>
      <mt-tab-container-item>作者佳作</mt-tab-container-item>
      <mt-tab-container-item>作者佳作</mt-tab-container-item>
    </mt-tab-container>

    <!-- 主体 -->
    <!-- 底部 -->
    <div class="dibu">
      <van-row type="flex" justify="space-between" class="bottom">
        <van-col span="9">
          <div class="bottomone">
            <div class="bottomdiv1">
              <svg viewBox="0 0 1024 1024" class="bottomsvg">
                <path
                  d="M164.571429 493.714286v109.714285h36.571428v-109.714285h-36.571428zM146.285714 438.857143h73.142857c21.942857 0 36.571429 14.628571 36.571429 36.571428v146.285715c0 21.942857-14.628571 36.571429-36.571429 36.571428H146.285714c-21.942857 0-36.571429-14.628571-36.571428-36.571428v-146.285715c0-21.942857 14.628571-36.571429 36.571428-36.571428zM512 274.285714c-109.714286 0-201.142857 91.428571-201.142857 201.142857s91.428571 201.142857 201.142857 201.142858 201.142857-91.428571 201.142857-201.142858S621.714286 274.285714 512 274.285714zM512 219.428571c142.628571 0 256 113.371429 256 256s-113.371429 256-256 256-256-113.371429-256-256 113.371429-256 256-256zM574.171429 863.085714c-14.628571 3.657143-29.257143-7.314286-32.914286-21.942857-3.657143-14.628571 7.314286-29.257143 21.942857-32.914286 106.057143-18.285714 197.485714-84.114286 245.028571-179.2 7.314286-14.628571 21.942857-18.285714 36.571429-10.971428s18.285714 21.942857 10.971429 36.571428c-51.2 109.714286-157.257143 190.171429-281.6 208.457143z"
                  fill="#363433"
                ></path>
                <path
                  d="M866.742857 446.171429c0 14.628571-10.971429 29.257143-25.6 29.257142s-29.257143-10.971429-29.257143-25.6C800.914286 292.571429 669.257143 175.542857 512 175.542857c-157.257143 0-285.257143 120.685714-299.885714 274.285714-3.657143 14.628571-14.628571 25.6-29.257143 25.6s-25.6-14.628571-25.6-29.257142c14.628571-182.857143 168.228571-325.485714 354.742857-325.485715 186.514286-3.657143 340.114286 138.971429 354.742857 325.485715zM512 906.971429c-36.571429 0-65.828571-29.257143-65.828571-65.828572s29.257143-65.828571 65.828571-65.828571 65.828571 29.257143 65.828571 65.828571-29.257143 65.828571-65.828571 65.828572z m0-58.514286c3.657143 0 7.314286-3.657143 7.314286-7.314286s-3.657143-7.314286-7.314286-7.314286-7.314286 3.657143-7.314286 7.314286 3.657143 7.314286 7.314286 7.314286z"
                  fill="#363433"
                ></path>
                <path
                  d="M822.857143 493.714286v109.714285h36.571428v-109.714285h-36.571428zM804.571429 438.857143h73.142857c21.942857 0 36.571429 14.628571 36.571428 36.571428v146.285715c0 21.942857-14.628571 36.571429-36.571428 36.571428h-73.142857c-21.942857 0-36.571429-14.628571-36.571429-36.571428v-146.285715c0-21.942857 14.628571-36.571429 36.571429-36.571428z"
                  fill="#363433"
                ></path>
              </svg>
              <div class="kefu">联系客服</div>
            </div>
            <div class="bottomdiv2">
              <svg viewBox="0 0 1024 1024" class="bottomsvg">
                <path
                  d="M247.466667 247.466667V597.333333c0 4.266667 4.266667 8.533333 8.533333 8.533334h605.866667c4.266667 0 8.533333-4.266667 8.533333-8.533334L938.666667 256c0-4.266667-4.266667-8.533333-8.533334-8.533333h-682.666666z m682.666666-68.266667c42.666667 0 76.8 34.133333 76.8 76.8v12.8l-68.266666 341.333333c-8.533333 34.133333-38.4 59.733333-72.533334 59.733334H256c-42.666667 0-76.8-34.133333-76.8-76.8V179.2h750.933333zM341.333333 972.8c-64 0-119.466667-51.2-119.466666-119.466667s51.2-119.466667 119.466666-119.466666 119.466667 51.2 119.466667 119.466666-55.466667 119.466667-119.466667 119.466667z m0-68.266667c29.866667 0 51.2-25.6 51.2-51.2s-21.333333-51.2-51.2-51.2-51.2 21.333333-51.2 51.2 21.333333 51.2 51.2 51.2zM768 972.8c-64 0-119.466667-51.2-119.466667-119.466667s51.2-119.466667 119.466667-119.466666 119.466667 51.2 119.466667 119.466666-55.466667 119.466667-119.466667 119.466667z m0-68.266667c29.866667 0 51.2-25.6 51.2-51.2s-25.6-51.2-51.2-51.2-51.2 25.6-51.2 51.2 21.333333 51.2 51.2 51.2z"
                  fill="#363433"
                ></path>
                <path
                  d="M179.2 298.666667c0 17.066667 12.8 34.133333 34.133333 34.133333s34.133333-17.066667 34.133334-34.133333V85.333333C247.466667 42.666667 213.333333 8.533333 170.666667 8.533333H42.666667C25.6 8.533333 8.533333 25.6 8.533333 42.666667s17.066667 34.133333 34.133334 34.133333h128c4.266667 0 8.533333 4.266667 8.533333 8.533333v213.333334z"
                  fill="#363433"
                ></path>
              </svg>
              <div class="kefu">购物车</div>
            </div>
          </div>
        </van-col>
        <van-col span="14">
          <van-row type="flex" justify="space-between">
            <van-col span="12" class="span121">
              <span>加入购物车</span>
            </van-col>
            <van-col span="11.5" class="span122">立即购买</van-col>
          </van-row>
        </van-col>
        <!-- <van-col span="6">span: 6</van-col> -->
      </van-row>
    </div>
  </div>
</template>
<script>
import myHead from "../components/article/Myhead.vue";
import myConter from "../components/article/Myconter.vue";
export default {
  props: ["pid"],
  data() {
    return {
      navactive: "1",
      listxiabiao: {},
      container: null,
    };
  },
  components: {
    myHead,
    myConter,
  },
  mounted() {
    this.axios.get(`sw/details/${this.pid}`).then((res) => {
      let i = res.data.data[0];
      //console.log(i);
      let r = JSON.parse(i.image);
      r.forEach((e, k) => {
        console.log(e);
        r[k] = require(`../assets/image/${e}`);
      });

      console.log(r);
      i.image = r;
      this.listxiabiao = i;
      this.container = this.$refs.container;
      console.log(this.listxiabiao);
    });
  },
};
</script>
<style>
.article .myhead {
  position: fixed;
  top: 0;
  /* right: 0;
  left: 0;
  bottom: 0; */
  z-index: 100;
}
.article .mint-navbar {
  width: 50%;
  z-index: 100;
  position: fixed;
  height: 2rem;
  top: 0;
  left: 25%;
  box-sizing: border-box;
  background: rgb(247, 247, 247);
}
.article .mint-tab-item-label {
  font-size: 0.8rem;
}

.article .mint-navbar .mint-tab-item {
  box-sizing: border-box;
  padding: 0.5rem 0;
  color: #000;
}
.article .mint-navbar .mint-tab-item.is-selected {
  box-sizing: border-box;
  border-bottom: 0.1rem solid rgb(198, 47, 46);
  margin-bottom: 0;
}
.article .myconter {
  margin-top: 2rem;
  margin-bottom: 2.55rem;
  /* width: 100%; */
}
.article .dibu {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.article .bottom {
  box-sizing: border-box;
  width: 100%;
  height: 2.5rem;
  padding: 0 0.5rem;
  position: fixed;
  bottom: 0;
  background: rgb(244, 244, 240);
  line-height: 2.5rem;
}
.article .bottomone {
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
}
.article .bottomdiv1 {
  width: 50%;
  position: relative;
  /* left: 0.1rem; */
  box-sizing: border-box;
  text-align: center;
}
.article .bottomdiv2 {
  width: 50%;
  /* position: relative; */
  /* left: 0.1rem; */
  box-sizing: border-box;
  text-align: center;
}
.article .bottomsvg {
  width: 1.3rem;
  height: 1.3rem;
}
.article .col12 {
  box-sizing: border-box;
  height: 100%;
}

.article .kefu {
  position: relative;
  top: -1.85rem;
  color: rgb(54, 52, 51);
  font-size: 0.5rem;
  height: 0;
  /* margin-top: 0.15rem; */
}
.article .span121 {
  height: 2.1rem;
  color: #fff;
  background-color: #feb13b;
  font-size: 0.8rem;
  border-radius: 0.1rem;

  text-align: center;
  margin-top: 0.2rem;
  margin-right: 0.1rem;
}
.article .span122 {
  height: 2.1rem;
  color: #fff;
  background-color: #c62f2e;
  font-size: 0.8rem;
  border-radius: 0.1rem;
  width: 5rem;
  text-align: center;
  margin-top: 0.2rem;
}
/* 项目jingy  vant ui 官方文档*/
</style>      
