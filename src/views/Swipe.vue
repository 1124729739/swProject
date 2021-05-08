<template>
  <div>
    <h1>轮播图</h1>
    <!-- testing/Swipe.vue -->
    <mt-swipe :style="{ height: h }">
      <mt-swipe-item>
        <div class="a1">
          <div>
            <div><img src="../assets/1.jpg" alt="" width="100%" /></div>
            <div>
              <p>【文白对照，精注全译全本】史记（共4册）</p>
            </div>
            <div><span>kjhilhiiu</span></div>
            <div>￥4546</div>
          </div>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/2.jpg" alt="" width="100%" />
        klllllllllllllllllllllllllllll
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/3.jpg" alt="" width="100%" />
        klllllllllllllllllllllllllllll
      </mt-swipe-item>
    </mt-swipe>
    <!-- <div class="a1">
      <div>
        <div><img src="../assets/1.jpg" alt="" /></div>
        <div>
          <p>【文白对照，精注全译全本】史记（共4册）</p>
        </div>
        <div><span>kjhilhiiu</span></div>
        <div>￥4546</div>
      </div>
    </div> -->
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