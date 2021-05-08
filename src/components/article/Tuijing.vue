 <template>
  <div class="tuijing">
    <!-- 新华推进 -->
    <div class="tuijin">
      <div @click="hua = 0" :class="{ tianjia: hua === 0 }">
        <div>新华推荐</div>
      </div>
      <div @click="hua = 1" :class="{ tianjia: hua === 1 }">
        <div>作者佳作</div>
      </div>
    </div>
    <div v-show="hua === 0" class="xuanzhong">
      <!--轮播图  -->
      <mt-swipe :show-indicators="false">
        <mt-swipe-item v-for="i of juy" :key="i"> <lobo></lobo></mt-swipe-item>
      </mt-swipe>
    </div>
    <div v-show="hua === 1" class="xuanzhong">
      <mt-swipe :show-indicators="false">
        <mt-swipe-item v-for="i of juy" :key="i">
          <zuozhe></zuozhe
        ></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>
import Lobo from "./Lobo";
import Zuozhe from "./zuozhe.vue";
export default {
  components: {
    Lobo,
    Zuozhe,
  },
  data() {
    return {
      hua: 0,
      juy: 4,
    };
  },
};
</script>
 <style lang="scss">
.tuijing {
  .tuijin {
    display: flex;
    justify-content: space-around;
    font-size: 0.8rem;
    border-bottom: 0.0293rem solid rgb(210, 210, 210);
    height: 2rem;
    > div {
      line-height: 2rem;
    }
    .tianjia {
      border-bottom: 0.1rem solid rgb(198, 47, 46);
    }
  }
  .xuanzhong {
    height: 26rem;
    position: relative;
    // top: 0.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    .mint-swipe {
      height: 100%;
    }
  }
}
</style>
