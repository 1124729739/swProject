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
        <my-conter></my-conter>
      </mt-tab-container-item>
      <mt-tab-container-item>作者佳作</mt-tab-container-item>
      <mt-tab-container-item>作者佳作</mt-tab-container-item>
    </mt-tab-container>

    <!-- 主体 -->
  </div>
</template>
<script>
import myHead from "../components/article/Myhead.vue";
import myConter from "../components/article/Myconter.vue";
export default {
  data() {
    return {
      navactive: "1",
    };
  },
  components: {
    myHead,
    myConter,
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
  /* width: 100%; */
}
/* 项目jingy  vant ui 官方文档*/
</style>
