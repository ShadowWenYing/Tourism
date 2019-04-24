<template>
    <div>
        <div class="title border">
            <span class="iconfont ccc">&#xe78d;</span>
            去哪儿推荐
        </div>

        <div class="title-one border-bottom" v-for="item of week" :key="item.id">
            <div class="left">
                <ul>
                    <h6 class="title-h">{{item.title}}</h6>
                    <li class="title-l1">
                        <span class="iconfont title-icon">&#xe74f;</span>
                        12:00前可定今日，预定后30分钟可用
                    </li>
                    <li class="title-l2">
                        <span class="title-border">自营</span>
                        <span class="title-border">无需换票</span>
                        <span class="title-border">不可退</span>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="right-number">
                    <span class="right-span">￥</span>
                    {{item.mony}}
                </div>
                <div class="right-button">预定</div>
            </div>
        </div>

    <div class="back"></div>
    </div>
</template>

<script>
export default {
    name:'DetailWeekend',
    props:{
      week:Array
    }
}
</script>

<style lang='stylus' scoped>
.right-span
    font-size .25rem
    left .1rem
    position relative
.right-number
    font-size .42rem
    margin-left .38rem
    position relative
    top .35rem
    color #ffa726
.right-button
    height .6rem
    width 1.61rem
    margin-left .2rem
    margin-top .35rem
    //background #ff9415
    background-image linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
    line-height .6rem
    text-align center
    font-size .29rem
    font-weight normal
    color #fff
    border-radius .1rem
.title-border
    color #00afc7
    border 1px solid #bfdbde
    margin .04rem
    font-size .20rem
.title-l2
    margin .2rem
.title-h
    font-size .30rem
    margin-top .1rem
    line-height .48rem
.title-icon
    font-size .18rem
    color #00bcd4
.title-l1
    margin .1rem
    font-size .18rem
    color #00bcd4
.left
    width 5.2888rem
    height 1.76rem
    float left
.right
    float left
    width 1.8112rem
    height 1.76rem
.title-one
    height 2.2rem
    margin .2rem .2rem
    color #616161
    background #fff
.title
    height .88rem
    line-height .88rem
    font-size .32rem
    margin-left .3rem
    margin-top -.1rem
    position relative
    .ccc
        color #ff585b
        font-size .38rem
        position relative
        top .04rem
        right .1rem
.back
    position relative
    top -.2rem
    left 0
    right 0
    botton 0
    height .15rem
    background #f5f5f5
</style>
