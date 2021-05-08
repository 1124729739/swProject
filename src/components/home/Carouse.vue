<template>
  <div class="carouse">
    <div class="container">
      <div class="boxs">
        <div class="row1">
          <div class="t1">
            <div class="s-18">虚构类热门榜</div>
            <div class="s-10">豆瓣榜单</div>
          </div>
          <div class="t2">
            <div class="item" v-for="(item, i) of 3" :key="i">
              <div>{{ item }}</div>
              <div class="imgs">
                <img src="../../assets/1.jpg" alt="" />
              </div>
              <span class="s-14">妈妈的女闺蜜</span>
            </div>
            <!-- <div class="item"></div>
            <div class="item"></div> -->
          </div>
        </div>
        <div class="row2"></div>
        <div class="row3"></div>
        <div class="row4">
          <div class="more">
            更多
            <img src="../../assets/3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.carouse .container {
  padding: 0.5rem 0.6rem 0.5rem 0.6rem;
  box-sizing: border-box;
  width: 100%;
  height: 12.5rem;
  overflow: auto;
  color: #fff;
}
/* 消除默认滚动条的显示 */
.carouse .container::-webkit-scrollbar {
  display: none;
}
.carouse .boxs {
  box-sizing: border-box;
  width: 260%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.carouse .boxs > div {
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #ded8d8;
}
.carouse .boxs .row1 {
  box-sizing: border-box;
  width: 31%;
  padding: 0.8rem;
  background: url('../../assets/2.jpg') no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  overflow: hidden;
}

.carouse .t1 {
  box-sizing: border-box;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
}
.carouse .t1 .s-18 {
  font-size: 0.9rem;
  /* padding-top: 0.8rem; */
}
.carouse .t1 .s-10 {
  font-size: 0.5rem;
  padding-top: 0.2rem;
  /* padding-top: 1rem; */
}
.carouse .t2 {
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  font-size: 0.7rem;
  padding-left: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.carouse .t2 .item {
  box-sizing: border-box;
  width: 100%;
  height: 30%;
  padding-top: 0.5rem;
}
.carouse .t2 .item div {
  display: inline-block;
  vertical-align: middle;
}
.carouse .t2 .item div:first-child {
  border-bottom: 0.02rem solid #fff;
}
.carouse .t2 .item .imgs {
  width: 1.25rem; /**25px */
  height: 2rem;
  border-radius: 0.15rem;
  margin-left: 0.4rem;
  margin-right: 0.5rem;
  overflow: hidden;
}
.carouse .t2 .item .imgs img {
  width: 100%;
  height: 100%;
  transform: scale(1);
}

.carouse .boxs .row2 {
  box-sizing: border-box;
  width: 31%;
}
.carouse .boxs .row3 {
  box-sizing: border-box;
  width: 31%;
}
.carouse .boxs .row4 {
  box-sizing: border-box;
  width: 4%;
  background-color: #ded8d8;
  color: #333;
  position: relative;
}
.carouse .boxs .row4 .more {
  font-size: 0.9rem;
  width: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
