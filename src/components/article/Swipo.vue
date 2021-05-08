 <!-- 图片路径 -->
    
    <template>
  <div class="swipo">
    <mt-swipe :style="{ height: h }" :continuous="false">
      <mt-swipe-item>
        <img src="../../assets/1.jpg" width="100%" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/2.jpg" width="100%" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/3.jpg" width="100%" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      h: "200px",
    };
  },
  mounted() {
    // 初始化适配轮播图的高度
    let picwidth = 1242;
    let picheight = 698;
    // 屏幕宽50/10=x/200 =>50*200/10
    let screenwidth = window.screen.width;
    let height = Math.floor((picheight * screenwidth) / picwidth) + "px";
    // 把计算得到的height，赋值给data中的变量，动态更新轮播图
    this.h = height;
  },
};
</script>