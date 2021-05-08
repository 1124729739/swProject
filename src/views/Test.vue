
<template>
  <div>
       <router-link  to="">
          <div class='product' v-for="(item,i) of 5" :key="i">
          <img src="../assets/展示图1.jpg" alt="">
          <p>关键时刻能救命——急症用药必知</p>
          <p>87</p>
          </div>
       </router-link>
  </div>
  
</template>

<style lang="scss">
  div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
 .product{
      width: 8rem;
      border: 1px solid #000;
      font-size: 0.7rem;
      img{
        width: 100%;
        height: 8rem;
      }
    }
  }
   
</style>

<script>
  export default {
  
  };
</script>
