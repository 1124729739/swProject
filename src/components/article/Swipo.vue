 <!-- 图片路径 -->
    
    <template>
  <div class="swipo">
    <mt-swipe :continuous="false">
      <mt-swipe-item v-for="(item, i) of image" :key="i">
        <!-- <img :src="item" width="100%" /> -->
        <div
          :style="`background: url(${item}) no-repeat center center ;`"
          class="a1"
        ></div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["image", "pid"],

  mounted() {
    //   // 初始化适配轮播图的高度
    //   let picwidth = 1242;
    //   let picheight = 698;
    //   // 屏幕宽50/10=x/200 =>50*200/10
    //   let screenwidth = window.screen.width;
    //   let height = Math.floor((picheight * screenwidth) / picwidth) + "px";
    //   // 把计算得到的height，赋值给data中的变量，动态更新轮播图
    //   this.h = height;
    // },
    console.log(this.pid);
  },
};
</script>
<style >
.swipo .mint-swipe-items-wrap {
  height: 12rem;
}
.swipo img {
  height: 12rem;
}
.swipo .a1 {
  width: 100%;
  height: 12rem;
  background-size: contain !important;
}
</style>