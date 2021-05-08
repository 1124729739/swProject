<template>
  <div class="hots">
    <mt-search class="aa"></mt-search>
    <div class="hots-wb">
      <div class="hots-zh" @click="xial">综合</div>
      <div class="host-xl">销量</div>
      <div class="host-jg">价格</div>
      <div class="host-sx">筛选</div>
    </div>
    <!--隐藏div-->
    <div class="hots-yc" v-show="isshow == false">
      <div>综合排列</div>
      <div>新品优先</div>
    </div>
    <div class="hots-wb1">
      <div class="hots-khh">仅看好货</div>
      <div class="hots-khh">商品类别</div>
      <div class="hots-khh">语种</div>
      <div class="hots-khh">出版时间</div>
    </div>
    <!--循环-->
    <div class="hots-x">
      <div class="hots-xu">
        <div><img src="../assets/猫.jpg" alt="" /></div>
        <div>王安忆短篇小说编年(卷4黑弄堂2001-2007)</div>
        <div><p>王安石</p></div>
        <div><span>¥15.2</span></div>
      </div>
      <div class="hots-xu">
        <div><img src="../assets/猫.jpg" alt="" /></div>
        <div>王安忆短篇小说编年(卷4黑弄堂2001-2007)</div>
        <div><p>王安石</p></div>
        <div><span>¥15.2</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["className"],
  data() {
    return {
      isshow: true,
      productsList: [],
      offset: 0,
    };
  },

  created() {
    this.axios
      .get("/sw/producList/", {
        params: {
          cname: this.className,
          offset: this.offset,
        },
      })
      .then((re) => {
        console.log(re);
      });
  },
  methods: {
    xial() {
      if (this.isshow == true) {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
    },
  },
};
</script>

<style scoped>
/* .hots{
    padding: 0.5rem 0.6rem 0.5rem 0.6rem;
} */
.aa {
  height: 100%;
}
.hots-wb {
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  height: 1rem;
  justify-content: space-around;
  margin-top: 0.3rem;
}
.hots-wb > div {
  margin-top: 0.1rem;
  font-size: 0.7rem;
  color: rgb(153, 153, 153);
}
.hots-wb1 {
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  height: 1rem;
  justify-content: space-around;
  margin-top: 0.2rem;
}
.hots-wb1 > div {
  margin-top: 0.1rem;
  font-size: 0.5rem;
  color: rgb(153, 153, 153);
}
.hots-khh {
  margin-right: 0.4rem;
}
.hots-yc {
  position: absolute;
  width: 100%;
  height: 3rem;
  /* border: 1px solid red; */
  background-color: rgb(153, 153, 153);
}
.hots-yc > div {
  font-size: 0.6rem;
  margin-left: 7%;
  margin-top: 3%;
  color: #fff;
}
.hots-x {
  display: flex;
  padding: 0.5rem 0.6rem 0.5rem 0.6rem;
}
.hots-xu {
  width: 50%;
}
.hots-xu > div > img {
  height: 10rem;
}
.hots-xu > div {
  font-size: 0.7rem;
  margin-bottom: 0.3rem;
}
.hots-xu > div > p {
  font-size: 0.2rem;
}
.hots-xu > div > span {
  font-size: 0.8rem;
  color: red;
}
</style>