<template>
  <div class="cart">
    <div class="header">
      <div class="title">
        <span>购物车</span>
        <i class="iconfont icon-dizhi"></i>
      </div>
      <div class="promot">
        <van-button plain type="danger">登入</van-button>
        <span>登入后台商品将合并到你账号中</span>
      </div>
    </div>
    <div class="unlogin">
      <div class="cartImg">
        <img src="../assets/empty-cart.a81ec2ef723ec415.png" alt="" />
        <p>购物车没有商品</p>
      </div>
      <div class="buttonGroup">
        <button>去看收藏</button>
        <button>随便逛逛</button>
      </div>
    </div>
    <div class="login"></div>
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
      <mt-tab-item id="fenlei">
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

<style lang='scss'>
@import "../assets/css/Cart.scss";
</style>






<script>
export default {
  data() {
    return {
      sku: {
        id: 4,
        title: "一加",
        images: "dsads",
        price: 2999,
        num: 1,
        ownSpec: "{'机身颜色':'陶瓷黑尊享版','内存':'6GB','机身存储':'128GB'}",
      },
      arr: [
        {
          skuId: 1,
          title: "苹果",
          image: "",
          price: 2999,
          num: 1,
          ownSpec:
            "{'机身颜色':'陶瓷黑尊享版','内存':'6GB','机身存储':'128GB'}",
        },
        {
          skuId: 2,
          title: "小米6",
          image: "",
          price: 3999,
          num: 4,
          ownSpec:
            "{'机身颜色':'陶瓷黑尊享版','内存':'6GB','机身存储':'128GB'}",
        },
        {
          skuId: 3,
          title: "华为",
          image: "",
          price: 4999,
          num: 3,
          ownSpec:
            "{'机身颜色':'陶瓷黑尊享版','内存':'6GB','机身存储':'128GB'}",
        },
      ],
      carts: [], //购物车数据
      selected: "cart",
    };
  },
  methods: {
    loadCarts() {
      //先判断登录状态
      if (sessionStorage.getItem("islogin")) {
        //已登入
      } else {
        this.cats = JSON.parse(localStorage.getItem("carts"));
      }
    },
    addCart() {
      if (sessionStorage.getItem("islogin")) {
        //已登入发送信息到后代,保存到数据库中
      } else {
        //未登录保存在浏览器本地localstorage中
        //1.查询本地购物车
        let carts = JSON.parse(localStorage.getItem("carts")) || [];
        let cart = carts.find((c) => c.skuId === this.sku.id);
        //2.判断是否存在
        if (cart) {
          //3.存在更新数量
          cart.num += this.num;
        } else {
          console.log(2);
          cart = {
            skuId: this.sku.id,
            title: this.sku.title,
            price: this.sku.price,
            image: this.sku.images,
            num: this.sku.num,
            ownSpec: JSON.stringify(this.sku.ownSpec),
          };
          carts.push(cart);
          // 把 carts写回localstorage
          localStorage.setItem("carts", JSON.stringify(carts));
        }
      }
    },
  },
  watch: {
    selected(newval, oldav1) {
      if (newval == "fenlei") {
        this.$router.push("fenlei");
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

 <!--  <div class="item" v-for="(item, i) of arr" :key="i">
        <p>商品id:{{ item.skuId }}</p>
        <p>商品名称:{{ item.title }}</p>
        <p>商品图片:{{ item.img }}</p>
        <p>商品价格:{{ item.price }}</p>
        <p>商品数量{{ item.num }}</p>
        <button @click="addCart">加入购物</button> -->