<template>
<div>
  <div class="banner" @click="handeClick">
        <img class="banner-img" :src="bannerImg">
        <div class="banner-info">
            <div class='banner-title'>{{this.sightName}}</div>
            <div class="banner-number">
                <span class="iconfont">&#xe626; </span>{{this.gallaryImgs.length}}
            </div>
        </div>
    </div>
    <common-gallary :imgs='gallaryImgs' v-show="showGallary" @close="handeClose"></common-gallary>
</div>

</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'DetailBanner',
    components:{
        CommonGallary,
    },
    props:{
      sightName:String,
        bannerImg:String,
        gallaryImgs:Array
    },
    data () {
        return {
            showGallary:false,

        }
    },
    methods:{
        handeClick:function(){
            this.showGallary=true
        },
        handeClose () {
            this.showGallary=false
        }
    }

}
</script>

<style lang='stylus' scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
        width 100%

.banner-info
    position absolute
    right .2rem
    bottom .03rem
    left .2rem
    min-height .4rem
    color #fff
    line-height .6rem
    background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))

.banner-title
        position relative
        line-height .4rem
        font-size .36rem
        bottom .2rem
        text-shadow 0 1px 2px rgba(0,0,0,0.70)
        flex  1
.banner-number
        padding 0 .4rem
        height .4rem
        left 0rem
        bottom .70rem
        position absolute
        line-height .4rem
        border-radius .2rem
        background rgba(0,0 ,0,.3)
</style>
