<template>
<div>
   <mt-swipe
      class="a"
      :auto='4000'
      :speed="3000"
      :show-indicators="false"
      >
        <mt-swipe-item><img width="100%" src="../../assets/轮播1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img width="100%" src="../../assets/轮播2.jpg" alt=""></mt-swipe-item>   
        <mt-swipe-item><img width="100%" src="../../assets/轮播3.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
</div>
</template>
<style scoped>
.a{
  width: 96%;
  height: 7.5rem;
  margin-top: 2%;
  margin-left: 0.5rem;
  border-radius: 0.5rem;
}
</style>