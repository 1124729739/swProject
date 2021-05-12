<template>
  <div class="cart">
    <div class="header">
      <div class="title">
        <span>购物车</span>
        <i class="iconfont icon-dizhi"></i>
      </div>
      <!-- <div class="promot">
        <van-button plain type="danger">登入</van-button>
        <span>登入后台商品将合并到你账号中</span>
      </div> -->
    </div>

    <div class="unlogin" v-show="false">
      <div class="cartImg">
        <img src="../assets/empty-cart.a81ec2ef723ec415.png" alt="" />
        <p>购物车没有商品</p>
      </div>
      <div class="buttonGroup">
        <button>随便逛逛</button>
        <button>查看订单</button>
      </div>
    </div>

    <div class="payment">
      <van-checkbox-group
        v-model="result"
        ref="checkboxGroup"
        checked-color="#c62f2e"
      >
        <!-- 商品卡片 -->
        <div class="commodity" v-for="(item, index) of 5" :key="index">
          <van-swipe-cell>
            <div class="card-and-checkbox">
              <van-checkbox :name="index"> </van-checkbox>
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              >
                <template #tags>
                  <van-tag plain type="danger">标签</van-tag>
                  <van-tag plain type="danger">标签</van-tag>
                </template>
                <template #footer>
                  <van-stepper />
                </template>
              </van-card>
            </div>
          </van-swipe-cell>
        </div>
      </van-checkbox-group>

      <div class="bottom-handle">
        <van-checkbox v-model="isAll" @click="checkAll" checked-color="#c62f2e"
          >全选</van-checkbox
        >
        <div class="bottom-right">
          <span class="heji"
            >合计:<b class="price">¥{{ 123 }}</b></span
          >
          <van-button color="#c62f2e" size="nomore">结算({{ 2 }})</van-button>
        </div>
      </div>
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
      result: [],
      //用来判断商品是否全选中
      isAll: false,
      value: 1,
      
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
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(this.isAll ? true : "");
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
    result(x,o){
         
      if(x.length==5){
           this.isAll= true
      }else{
          this.isAll= false
      }
    }
  },
};
</script>  

<style lang="scss">
.payment {
  margin-top: 2.3rem;
  height: 25rem;
  background: #f7f7f7;
  overflow: auto;
  .commodity {
    .van-checkbox {
      height: 6.6rem;
      margin-top: 0.4rem;
    }
  }
}
.goods-card {
  margin: 0;
}
.delete-button {
  height: 100% !important;
}
.card-and-checkbox {
  display: flex;
  .van-card {
    flex-grow: 1;
    background: #fff;
  }
}

.bottom-handle {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 2.77rem;
  background: white;
  font-size: 0.8rem;
  padding: 0 1rem;
  box-sizing: border-box;
  .bottom-right {
    display: flex;
    align-items: center;
    .heji {
      margin-right: 0.7rem;
      .price {
        margin-left: 0.5rem;
        color: crimson;
      }
    }
  }
  .van-button {
    width: 6rem;
    // color: #333333 !important;
  }
}
.van-checkbox {
  background: #fff;
}
</style>