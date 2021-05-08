<template>
    <div class="hots">
        <mt-search class="aa"></mt-search>
        <div class="hots-wb">
            <div class="hots-zh" @click="xial">综合</div> 
            <div class="host-xl">销量</div> 
            <div class="host-jg">价格</div> 
            <div class="host-sx">筛选</div>
        </div>
        <div class="hots-yc" v-show="isshow==false">
            <div>综合排列</div>
            <div>新品优先</div>
        </div>
        <!--循环-->
        <div class="hots-x">
            <div class="hots-xu">
                <div><img src="../../assets/猫.jpg" alt=""></div>
                <div>王安忆短篇小说编年(卷4黑弄堂2001-2007)</div>
                <div><p>王安石</p></div>
                <div><span>¥15.2</span> </div>
            </div>
            <div class="hots-xu">
                <div><img src="../../assets/猫.jpg" alt=""></div>
                <div>王安忆短篇小说编年(卷4黑弄堂2001-2007)</div>
                <div><p>王安石</p></div>
                <div><span>¥15.2</span> </div>
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            isshow:true
        }
    },
    methods:{
        xial(){
           if(this.isshow==true){
               this.isshow=false
           } else{
               this.isshow=true
           }
        }
    }
}
</script>
<style scoped>
.hots{
    padding: 0.5rem 0.6rem 0.5rem 0.6rem;
}
.aa{
    height: 100%;
}
.hots-wb{
    width: 100%;
    border: 1px solid red;
    display: flex;
    justify-content: space-around;
}
.hots-wb>div{
    font-size: 0.7rem;
    color: rgb(153, 153, 153);
}
.hots-yc{
    width: 100%;
    height: 3rem;
    border: 1px solid red;
    background-color: rgb(153, 153, 153);
}
.hots-yc>div{
    font-size: 0.6rem;
    margin-left: 7%;
    margin-top: 3%;
    color: #fff;
}
.hots-x{
    display: flex;
}
.hots-xu{
    width: 50%;
}
.hots-xu>div>img{
    height: 10rem;
}
.hots-xu>div{
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
}
.hots-xu>div>p{
    font-size: 0.2rem;
}
.hots-xu>div>span{
    font-size: 0.8rem;
    color: red;
}

</style>