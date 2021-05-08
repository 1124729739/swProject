<template>
  <div class="myconter">
    <swipo></swipo>
    <jiageyhu></jiageyhu>
    <tuijing></tuijing>
    <!-- 出版信息+售后政策 -->
    <div class="chubang">
      <div @click="chu = 0" :class="{ chuban: chu === 0 }">基础信息</div>
      <div @click="chu = 1" :class="{ chuban: chu === 1 }">售后政策</div>
    </div>
    <div v-show="chu === 0">
      <div class="jichu">
        <div class="jichuxx">
          <div>基础信息</div>
        </div>
        <div class="biaoge">
          <div>
            <div class="left1"><div>作者</div></div>
            <div class="right1"><div>宋春楠</div></div>
          </div>
          <div>
            <div class="left1"><div>作者</div></div>
            <div class="right1"><div>宋春楠</div></div>
          </div>
          <div>
            <div class="left1"><div>作者</div></div>
            <div class="right1"><div>宋春楠</div></div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="chu === 1" class="shouhou">
      <p class="pp1">正品行货</p>
      <p class="pp2 margint">
        新华书店网上商城向您保证所售商品均为正品行货，所有商品开具电子发票。
      </p>
      <p class="pp1">售后服务承诺</p>
      <p class="pp2">
        1)
        新华书店网上商城支持商品7天内无理由退换货（不影响二次销售），15天内可以换货，以客户收到商品第二日起计算。（食品、酒类等非图书商品非质量问题不予退换）
      </p>
      <p class="pp2">2) 平台售后审核人员在客户提交申请后72小时之内完成审核。</p>
      <p class="pp2">
        3)
        退换货业务均会在自接收到问题商品之日起7日之内处理完成，国家法定节假日不计算在内。
      </p>
    </div>
    <!-- 联系客服+购物车 -->
  </div>
</template>
<script>
import Swipo from "./Swipo.vue";
import Jiageyhu from "./Jiageyhu.vue";
import Tuijing from "./Tuijing.vue";

export default {
  components: {
    Swipo,
    Jiageyhu,
    Tuijing,
  },
  data() {
    return {
      chu: 0,
    };
  },
};
</script>
<style>
.myconter .chubang {
  margin: 0.35156rem;
  margin-top: 0;
  color: rgb(198, 47, 46);
  /* background-color: rgb(198, 47, 46); */
  background: white;
  border: 1px solid rgb(198, 47, 46);
  display: flex;
  border-radius: 0.1rem;
}
.myconter .chubang > div {
  box-sizing: border-box;
  width: 50%;
  padding: 0.5rem 1.8rem;
}
.myconter .chuban {
  color: rgb(255, 255, 255);
  background-color: rgb(198, 47, 46);
  border-color: rgb(198, 47, 46);
}
.myconter .jichu {
  margin: 1rem 1rem 0 1rem;
  border: 0.05rem solid #eee;
}
.myconter .jichuxx {
  width: 100%;
  background: rgb(247, 247, 247);
  height: 1.17188rem;
  display: flex;
  align-items: center;
  /* flex-direction: column-reverse; */
  justify-content: center;
}
.myconter .biaoge > div {
  display: flex;
}
.myconter .biaoge > div + div {
  border-top: 0.05rem solid #eee;
}
.myconter .left1 {
  box-sizing: border-box;
  width: 40%;
  padding: 1rem 0 1rem 1rem;
  border-right: 0.05rem solid #eee;
  font-size: 0.75rem;
  color: #999;
}
.myconter .right1 {
  box-sizing: border-box;
  padding-top: 1rem;
  padding-left: 1rem;
  font-size: 0.8rem;
  color: #363433;
}
.myconter .shouhou {
  margin: 1rem 2rem 0 2rem;
}

.myconter .pp1 {
  margin: 0.7rem 0;
  font-weight: bolder;
  font-size: 0.7rem;
}
.myconter .pp2 {
  margin: 0.7rem 0;
  font-size: 0.7rem;
}
.myconter .margint {
  margin-bottom: 1.4rem;
}
</style>
