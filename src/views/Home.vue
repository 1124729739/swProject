<template>
  <div class="home-home">
    <div class="home">
      <!--首页-->
      <div id="top_div" style="background-color: #cf0333">
        <img class="top_div_mgg" src="../assets/书店.png" alt="" /><img
          class="top_div_mg"
          src="../assets/信息.png"
          alt=""
        />
      </div>
      <!-- <mt-header   id="top_div" style="background-color: #cf0333;"></mt-header> -->
      <div
        :class="{ 'fix-nav': navBarFixed }"
        style="background-color: #cf0333; height: 2rem"
      >
        <input class="home_ss" type="text" placeholder="扶贫故事" />
      </div>
      <!--首页结束-->
    </div>
    <!--轮播-->
    <kkk></kkk>
    <!--轮播结束-->
    <!--功能区-->
    <div style="margin-bottom: 1.5rem">
      <!--熬哥展示区-->
      <div class="home_zs">
        然啊啊啊
        <carouse></carouse>
      </div>
      <!--展示结束-->

      <!--杨通癸展示-->
      <div>
        <exhibition></exhibition>
      </div>

      <!--伟哥展示-->
      <div>
        <faxianfeilei></faxianfeilei>
      </div>
      <!--z展示结束-->
    </div>
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
import Carouse from "../components/home/Carouse.vue";
import faxianfeilei from "../components/home/faxianfeilei.vue";
import Exhibition from "../components/home/Exhibition.vue";
import kkk from "../components/home/kkk.vue";

export default {
  components: { Carouse, faxianfeilei, Exhibition, kkk },

  data() {
    return {
      selected: "home",
      navBarFixed: false,
    };
  },
  methods: {
    watchScroll() {
      // 滚动的距离 相当于拿到滚动条 滚动位置
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //console.log(scrollTop)

      // 容器的高度
      var offsetTop = document.querySelector("#top_div").offsetHeight;
      // console.log(offsetTop)

      //console.log("scrollTop=>", scrollTop, "  offsetTop=>", offsetTop);

      //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
      if (scrollTop > offsetTop) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
  },
  mounted() {
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  },
  destroyed() {
    // 移除事件监听
    window.removeEventListener("scroll", this.watchScroll);
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
<style scoped>
.home_ss {
  width: 90%;
  margin-left: 3.5%;
  height: 1rem;
  margin-top: 2%;
  font-size: 0.7rem;
  padding-left: 0.4rem;
  border-radius: 0.2rem;
}
/* 固定导航 */
.fix-nav {
  width: 18.75rem;
  position: fixed;
  top: 0;
  z-index: 999; /*指定一个元素的堆叠顺序*/
}
#top_div {
  display: flex;
  width: 100%;
  height: 1.7rem;
}
.top_div_mgg {
  width: 50%;
  height: 2.1rem;
  margin-left: 4.5rem;
}
.top_div_mg {
  width: 1rem;
  height: 1rem;
  margin-top: 2%;
  margin-left: 3rem;
}
</style>