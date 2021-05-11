<template>
  <div class="jiageyhu">
    <!-- 价格 -->
    <div class="jia">
      <div class="price">
        <div>
          <div class="shiji">¥{{ listxiabiao.price }}</div>
          <div class="miaosha">¥19.29</div>
        </div>
        <div>
          <router-link to="/">
            <svg viewBox="0 0 1024 1024" class="svg1">
              <path
                d="M800.914286 468.114286c25.6-29.257143 29.257143-76.8 7.314285-109.714286l-32.914285-47.542857c-25.6-36.571429-69.485714-43.885714-102.4-21.942857L512 384 354.742857 285.257143c-36.571429-21.942857-80.457143-10.971429-102.4 21.942857l-36.571428 51.2c-21.942857 32.914286-21.942857 80.457143 7.314285 109.714286l288.914286 325.485714 288.914286-325.485714z m-160.914286-230.4c58.514286-36.571429 135.314286-21.942857 179.2 40.228571l32.914286 51.2c36.571429 54.857143 32.914286 128-10.971429 179.2l-303.542857 340.114286c-14.628571 14.628571-36.571429 18.285714-51.2 3.657143l-3.657143-3.657143L182.857143 504.685714c-43.885714-47.542857-47.542857-124.342857-10.971429-179.2l32.914286-47.542857C245.028571 219.428571 321.828571 201.142857 384 237.714286L512 318.171429l128-80.457143z"
                fill="#363433"
              ></path>
            </svg>
            <p>收藏</p>
          </router-link>
        </div>
      </div>
      <!-- 标题 -->
      <div class="title">{{ listxiabiao.title }}</div>
    </div>
    <div class="jianju"></div>
    <div class="jia1">
      <!-- 作者 -->
      <div class="zuozhe2">
        <div>
          <div class="zuozhe1">
            <div class="author">作者</div>
            <div class="isauthor">{{ listxiabiao.author }}</div>
          </div>
        </div>
        <div class="gend">
          <router-link to="/">
            <span>更多作品</span>
            <svg viewBox="0 0 1035 1024" class="svg2">
              <path
                d="M955.733333 512L546.133333 108.088889c-11.377778-11.377778-11.377778-28.444444 0-39.822222 11.377778-11.377778 28.444444-11.377778 39.822223 0L1035.377778 512l-443.733334 443.733333c-11.377778 11.377778-28.444444 11.377778-39.822222 0-11.377778-11.377778-11.377778-28.444444 0-39.822222L955.733333 512z"
                fill="#363433"
              ></path>
            </svg>
          </router-link>
        </div>
      </div>
      <!-- 出版社 -->
      <div class="zuozhe2">
        <div>
          <div class="zuozhe1">
            <div class="author">出版社</div>
            <div class="isauthor">{{ listxiabiao.publishing }}</div>
          </div>
        </div>
        <div class="gend">
          <router-link to="/">
            <span>更多作品</span>
            <svg viewBox="0 0 1035 1024" class="svg2">
              <path
                d="M955.733333 512L546.133333 108.088889c-11.377778-11.377778-11.377778-28.444444 0-39.822222 11.377778-11.377778 28.444444-11.377778 39.822223 0L1035.377778 512l-443.733334 443.733333c-11.377778 11.377778-28.444444 11.377778-39.822222 0-11.377778-11.377778-11.377778-28.444444 0-39.822222L955.733333 512z"
                fill="#363433"
              ></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <div class="jianju"></div>
    <!-- 用户评论 -->
    <div class="user">
      <div>用户评论(0)</div>
      <div>
        <router-link to="/">
          <svg viewBox="0 0 1035 1024" class="svg2">
            <path
              d="M955.733333 512L546.133333 108.088889c-11.377778-11.377778-11.377778-28.444444 0-39.822222 11.377778-11.377778 28.444444-11.377778 39.822223 0L1035.377778 512l-443.733334 443.733333c-11.377778 11.377778-28.444444 11.377778-39.822222 0-11.377778-11.377778-11.377778-28.444444 0-39.822222L955.733333 512z"
              fill="#363433"
            ></path>
          </svg>
        </router-link>
      </div>
    </div>
    <div class="jianju"></div>
  </div>
</template>
<script>
export default {
  props: ["listxiabiao"],
};
</script>
<style>
.jiageyhu .jia {
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}
.jiageyhu .price {
  display: flex;
  justify-content: space-between;
}
.jiageyhu .svg1 {
  width: 1.4rem;
  height: 1.4rem;
}
.jiageyhu .shiji {
  color: rgb(198, 47, 46);
  font-size: 0.70313rem;
  margin-top: 0.5rem;
}
.jiageyhu .miaosha {
  color: rgb(153, 153, 153);
  font-size: 0.35156rem;
  text-decoration-line: line-through;
}
.jiageyhu .price p {
  color: rgb(54, 52, 51);
  font-size: 0.29297rem;
}
.jiageyhu .jia1 {
  box-sizing: border-box;
  padding-top: 0.38086rem;
  padding-bottom: 0.38086rem;
  padding-right: 0.6rem;
  padding-left: 0.6rem;
  font-size: 0.75rem;
}

.jiageyhu .zuozhe2 {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  border-bottom: 0.0293rem solid rgb(238, 238, 238);
  height: 2.8rem;
  justify-content: space-between;
  line-height: 2.8rem;
}
.jiageyhu .router-link-active {
  color: rgb(153, 153, 153);
  font-size: 0.7rem;
}
.jiageyhu .gend {
  box-sizing: border-box;
  width: 30%;
  text-align: right;
}
.jiageyhu .zuozhe1 {
  box-sizing: border-box;
  display: flex;
  width: 105rpx;
  /* overflow: hidden; */
  white-space: nowrap;
  /* text-overflow: ellipsis; */
}
.jiageyhu .author {
  font-weight: 500;
  color: #363433;
}
.jiageyhu .isauthor {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: rgb(153, 153, 153);
  margin-left: 0.29297rem;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  /* max-width: 100%; */
}
.jiageyhu .title {
  color: rgb(54, 52, 51);
  font-size: 0.52734rem;
  font-weight: 500;
  line-height: 0.73242rem;
}
.jiageyhu .jianju {
  background-color: rgb(247, 247, 247);
  height: 0.6rem;
}
.jiageyhu .svg2 {
  width: 0.5rem;
  height: 0.5rem;
}
.jiageyhu .user {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  font-weight: 500;
  color: #363433;
  padding: 0.65rem 0.6rem;
  text-align: center;
}
.jiageyhu span {
  margin-right: 0.5rem;
}
</style>