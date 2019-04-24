<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="List.length">
    <!-- slides -->
    <swiper-slide v-for='item of List' :key="item.id" >
        <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props:{
        List:Array
    },
    data:function(){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true,
                autoplay:2000
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active
    background #fff


.wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.67%
    background #eee

.swiper-img
    width 100%
</style>
