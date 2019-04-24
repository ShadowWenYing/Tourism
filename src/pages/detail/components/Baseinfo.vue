<template>
    <div>
        <div class="conter">
        <div class="flexx">
            <div class="left border-right border-bottom">
                <div class="sss">
                    <span class="left-score">5.0</span>
                    <span class="left-text">分</span>
                    <span class="left-desc">超赞</span>
                </div>
                <div class="ssss">
                    <span class="left-total">166480条评论</span>
                    <span class="left-total">31条攻略</span>
                    <span class="iconfont left-rightarrow">&#xe612;</span>
                </div>
            </div>
            <div class="right border-right border-bottom">
                <div>
                    <span class="right-title">景点简介</span>
                </div>
                <div>
                    <span class="right-text">开放时间、贴士</span>
                    <span class="iconfont right-desc">&#xe612;</span>
                </div>
            </div>
        </div>
         <div class="button border">
             <span class="iconfont button-d">&#xe611;</span>
             <span class="button-t">{{pase}}</span>
             <span class="iconfont button-j">&#xe612;</span>
         </div>
    </div>
        <div class="back"></div>
    </div>
</template>

<script>
export default {
    name:'Baseinfo',
    props:{
      pase:String
    }
}
</script>

<style lang='stylus' scoped>
.back
    position relative
    top -.1rem
    left 0
    right 0
    botton 0
    height .2rem
    background #f5f5f5

.button
    width 100%
    height .76rem
    line-height .76rem
    .button-d
        position relative
        left .3rem
        font-size .28rem
    .button-t
        position relative
        left .5rem

    .button-j
        position relative
        left .8rem
        font-size .36rem

.conter
    width 100%
    position relative
    top -0.1rem
    background #fff
    height 1.98rem
    border-radius .15rem .15rem 0 0
.flexx
    height 1.22rem
    .left
        height 1.2rem
        width 50%
        float left
    .right
        width 50%
        float left
        height 1.2rem

    .sss
        position relative
        left .2rem
        top .15rem

    .left-score
        font-size .44rem
        color #ff8300
        line-height .44rem
    .left-text
        font-size .28rem
        color #ff8300
        line-height .48rem
    .left-desc
        font-size .28rem
        color #ff8300
        line-height .48rem
        margin-left .2rem

    .ssss
        position relative
        left .1rem
        top 0.15rem

    .left-total
        font-size .24rem
        color #9e9e9e
        line-height .32rem
        margin-right .2rem
    .left-rightarrow
        position absolute
        top -0.2rem
        left 3.2rem
        color #9e9e9e
        font-size .34rem

    .right-title
        font-size .3rem
        color #212121
        line-height .48rem
        padding-left .4rem
        position relative
        top .15rem

    .right-text
            color #9e9e9e
            font-size .24rem
            padding-left .3rem
            position relative
            top .15rem
    .right-desc
            position absolute
            top .4rem
            right .25rem
            font-size .34rem
            color #9e9e9e
</style>
