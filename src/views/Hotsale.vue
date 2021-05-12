<template>
  <div class="hots">
    <!-- 顶部搜索框 -->
    <div class="tops">
      <div>
        <van-icon
          @click="fanhui"
          name="arrow-left"
          color="#f00"
          size="1.5rem"
        />
      </div>
      <div>
        <van-search placeholder="请输入搜索关键词" />
      </div>
    </div>
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
      <div class="hots-xu" v-for="item of list" :key="item.pid">
        <router-link :to="`/article/${item.pid}`">
          <div class="showImage">
            <img :src="item.image" alt="" width="100" height="100" />
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="author">
            <p>{{ item.author }}</p>
          </div>
          <div class="price">
            <span>¥{{ item.price }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['className'],
  data() {
    return {
      isshow: true,
      productsList: [],
      offset: 0,
      list: [],
    }
  },

  mounted() {
    this.axios
      .get('/sw/productList/', {
        params: {
          cname: this.className,
          offset: this.offset,
        },
      })
      .then((res) => {
        // console.log(res.data);
        let i = res.data.data
        i.forEach((item) => {
          try {
            if (item.image[0]) {
              item.image = JSON.parse(item.image)[0]
              item.image = require('../assets/image/' + item.image)
            }
          } catch {
            console.log(item.image)
          }
        })
        console.log(i)
        this.list = i
      })
  },

  methods: {
    fanhui() {
      this.$router.push('/fenlei')
    },
    xial() {
      if (this.isshow == true) {
        this.isshow = false
      } else {
        this.isshow = true
      }
    },
  },
}
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
  flex-wrap: wrap;
}
.hots-xu {
  width: 50%;
  padding-bottom: 1.5rem;
}
.hots-xu .showImage img {
  width: 100%;
  height: 100%;
}
.hots-xu .title {
  -webkit-line-clamp: 2;
  color: rgb(54, 52, 51);
  font-size: 0.7rem;
  line-height: 0.9rem;
  margin-bottom: 0.2rem;
  min-height: 1.75rem;
  margin-top: 0.6rem;
}
.hots-xu .author {
  color: rgb(153, 153, 153);
  font-size: 0.6rem;
  margin-bottom: 0.4rem;
}
.hots-xu .price {
  color: rgb(198, 47, 46);
  font-size: 0.8rem;
  line-height: 1.1rem;
}
.hots-xu .showImage {
  width: 8.6rem;
  height: 8.6rem;
}
.hots .tops {
  width: 100%;
  height: 2.5rem;
  display: flex;
}
.hots .tops div:first-child {
  width: 10%;
  height: 100%;
}
.hots .tops div:last-child {
  width: 90%;
  height: 100%;
}
.hots .van-icon {
  margin-top: 0.5rem;
}
</style>
