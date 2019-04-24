<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
            <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            {{sightName}}
        </div>
    </div>  
</template>

<script>
export default {
    name:'DetailHeader',
    props:{
      sightName:String
    },
    data () {
        return {
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handScroll:function () {
            const top = document.documentElement.scrollTop
            if(top>50){
                let opacity =top / 140
                opacity = opacity>1 ? 1:opacity
                this.opacityStyle={ opacity }
                this.showAbs=false
            }else{
                this.showAbs=true
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handScroll)
    },
    deactivated () {
        window.removeEventListener('scroll',this.handScroll)
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.header-abs
    position absolute
    left .1rem
    top .1rem
    width .7rem
    height .7rem
    border-radius .4rem
    text-align center
    line-height .7rem
    background rgba(0,0,0,.5)
    .header-abs-back
        color #fff
        font-size .36rem

.header-fixed
    position fixed
    overflow hidden
    z-index 1
    top 0
    left 0
    right 0
    height .86rem
    line-height .86rem
    font-size .32rem
    text-align center
    color #fff
    background $bgColor

    .header-fixed-back
        position absolute
        top 0
        left 0
        width .64rem
        text-align center
        font-size .4rem
        color #fff
</style>
