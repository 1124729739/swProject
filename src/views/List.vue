<template>
  <div>
    <!-- 头部搜索-->
    <mt-search placeholder="搜索想要的内容" fixed></mt-search>
    <!-- 侧边导航 -->
    <div class="tabbar">
      <!-- 左侧选项按钮 -->
      <div class="tab">
        <button
          v-for="item of fenleiList.category1"
          :key="item.cid"
          :class="{active:show==`${item.cid}`? true :false}"
          class="tablinks"
          :id="item.cid"
          @click="open(`${item.cid}`)"
        >{{item.category_name}}
        </button>
        <!-- <button :class="{active:show=='two'? true :false}" class="tablinks" id="2" @click="open('two')">类别二</button>
        <button :class="{active:show=='three'? true :false}" class="tablinks" id="3" @click="open('three')">类别三</button>
        <button :class="{active:show=='four'? true :false}" class="tablinks" id="4" @click="open('four')">类别四</button>-->
      </div>
      <!-- 右侧显示内容 -->
      <div class="cards">
        <div
          class="card"
          v-for="(i,index) of fenleiList.category2"
          :key="index"
        >
          <!-- 二级分类框 -->
          <div>
            <!-- 标题 -->
            <div class="cardTi">{{i.category_name}}</div>
            <!-- 图书表 -->
            <div class="cdBiao">
              <div class="cardChild" v-for="(j,index2) of fenleiList.text_obj[index]" :key="index2">
                <img :src="j.imgs" style="width:100%;" alt />
               <div>{{j.titls}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div id="2" v-show="show=='人文社科'"  class="card" >类别详2情显示区域</div>
        <div id="3" v-show="show=='three'"  class="card" >类别详3情显示区域</div>
        <div id="4" v-show="show=='four'"  class="card" >类别详4情显示区域</div>-->
      </div>
    </div>

    <!-- 底部导航 -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home_sy">
        <img v-if="selected=='home_sy'" src="../assets/首页2.png" alt slot="icon" />
        <img v-else src="../assets/首页1.png" alt slot="icon" />
        <span v-if="selected=='home_sy'" style="color:red">首页</span>
        <span v-else>首页</span>
      </mt-tab-item>
      <mt-tab-item id="home_fl">
        <img v-if="selected=='home_fl'" src="../assets/分类2.png" alt slot="icon" />
        <img v-else src="../assets/分类1.png" alt slot="icon" />
        <span v-if="selected=='home_fl'" style="color:red">分类</span>
        <span v-else>分类</span>
      </mt-tab-item>
      <mt-tab-item id="home_gwc">
        <img v-if="selected=='home_gwc'" src="../assets/购物车2.png" alt slot="icon" />
        <img v-else src="../assets/购物车1.png" alt slot="icon" />
        <span v-if="selected=='home_gwc'" style="color:red">购物车</span>
        <span v-else>购物车</span>
      </mt-tab-item>
      <mt-tab-item id="home_wd">
        <img v-if="selected=='home_wd'" src="../assets/我2.png" alt slot="icon" />
        <img v-else src="../assets/我1.png" alt slot="icon" />
        <span v-if="selected=='home_wd'" style="color:red">我</span>
        <span v-else>我</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "home_fl",
      show: "1",
      fenleiList: {
        category1: {}, //表一
        category2: [], //表二
        text_obj: [] //表三
      }
    };
  },
  mounted() {
    //请求商品类别数据
    this.axios.get("sw/prc").then(result => {
      // console.log(result);
      //用data中的category去接收axios中的category
      //一级表
      this.fenleiList.category1 = result.data.category1;
      //二级表
      this.fenleiList.category2 = result.data.category2;
      //三级表
      for (let i = 0; i < result.data.category2.length; i++) {
        // 将不标准的格式json对象用eval方法进行处理转化为数组对象
        let obj = eval(result.data.category2[i].text_obj);
        // 将每次取出,转化后的数据push到text_obj
        this.fenleiList.text_obj.push(obj);
      }
    });
  },
  methods: {
    open(show) {
      this.show = show;
      this.fenleiList.text_obj=[]
      // console.log(show);
      this.axios.get(`/sw/prc/towTable?firstId=${show}`).then(result => {
        this.fenleiList.category2 = result.data;
           //三级表
        for (let i = 0; i <this.fenleiList.category2.length;  i++) {
        // 将不标准的格式json对象用eval方法进行处理转化为数组对象
          let obj = eval(this.fenleiList.category2[i].text_obj);
         // 将每次取出,转化后的数据push到text_obj
          this.fenleiList.text_obj.push(obj);
      }
        console.log( this.fenleiList.text_obj);
        }); 
    
    }
  },

  watch: {
    selected() {
      if (this.selected == "home_sy") {
        this.$router.push("/");
      } else if (this.selected == "home_fl") {
        this.$router.push("/list");
      } else if (this.selected == "home_gwc") {
        this.$router.push("/gwc");
      } else {
        this.$router.push("/me");
      }
    }
  }
};
</script>

<style scoped>
.tabbar {
  position: fixed;
  display: flex;
  top: 2.75rem; /*55*/
  width: 100%;
  bottom: 2.5rem;
}
.tabbar .tab {
  width: 30%;
  /* float: left; */
  /* height: 10rem; */
}
.tabbar .tab .tablinks {
  width: 100%;
  /* display: block; */
  font-size: 1rem; /*20*/
  height: 2.5rem; /*50*/
  border: none;
}
/* .tabbar .tab .tablinks:hover {
  background: #ccc;
} */
.tabbar .cards {
  width: 70%;
  /* float: right; */
  display: block;
  height: 90%;
  overflow: auto;
}
.tabbar .cards .card {
  padding: 0.5rem 0.6rem;
}
.tabbar .cards .card .cardTi {
  width: 100%;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
}
.tabbar .cards .card .cdBiao {
  /* border: 1px solid #f00; */
  display: flex;
  flex-wrap: wrap;
}
.tabbar .cards .card .cdBiao .cardChild {
  width: 30%;
  font-size: 0.5rem;
  text-align: center;
  margin: 3px;
}
.active {
  background: #ccc;
}
</style>