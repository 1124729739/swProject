<template>
    <div class="Exhibition_bt">
        <div>
          <img  style="width:100%" src="../../assets/新华推荐.jpg" alt="">
          <img  style="width:100%" src="../../assets/新华推荐2.jpg" alt="">
        </div>

        <div class="home_zst">
          <div>
          <img src="../../assets/展示图1.jpg" alt="">
          <p>中文全益本</p>
        </div>
        <div>
          <img src="../../assets/展示图1.jpg" alt="">
          <p>中文全益本</p>
        </div>
        <div>
          <img src="../../assets/展示图1.jpg" alt="">
          <p>中文全益本</p>
        </div>
      </div> 
    </div>
</template>
<style scoped>
.Exhibition_bt{
    padding: 0.5rem 0.6rem 0.5rem 0.6rem;
    margin-bottom: 3%;
    margin-top: 1%;
}
.home_zst{
  display: flex;
  margin-top: 3%;
}
.home_zst>div>img{
  width: 6.1rem;
  height: 6.1rem; 
  
}
.home_zst{
  display: flex;
  justify-content: space-around;
}
.home_zst p{
  font-size: 0.5rem;
  color: rgb(54, 52, 51);
  text-align: center;
}
</style>