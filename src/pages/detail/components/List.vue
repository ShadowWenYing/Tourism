<template>
    <div>
      <div v-for="item of list" :key="item.id">
        <div class="title-one border-bottom">
            <span class="iconfont title-icon">&#xe8ab;</span>
            <span>{{item.title}}</span>
        </div>

      <!-- <div v-if="item.chile">
        <detail-list :list="item.chile"></detail-list>
      </div> -->

        <div class="title-two border-bottom">
            <div class="text">
                <span class="ttt">{{item.one}}</span>
            </div>
            <div class="text1">
                <span class="mony">￥</span>
                <span class="one">{{item.mony[0]}}</span>
                <span class="two">起</span>
                <span class="iconfont tree">&#xe612;</span>
            </div>
        </div>

        <div class="title-tree border-bottom">
            <div class="text">
                <span class="ttt">{{item.two}}</span>
            </div>
            <div class="text1">
                <span class="mony">￥</span>
                <span class="one">{{item.mony[1]}}</span>
                <span class="two">起</span>
                <span class="iconfont tree">&#xe612;</span>
            </div>
        </div>

        <div class="con">
               查看剩余产品
               <span class="iconfont conn">&#xe612;</span>
            </div>
        <div class="back"></div>
      </div>
    </div>
</template>

<script>
export default {
    name:'DetailList',
    props:{
      list:Array
    }
}
</script>

<style lang='stylus' scoped>
.conn
    color #616161
    position relative
    top .03rem
.con
    height .77rem
    line-height .77rem
    font-size .30rem
    color #616161
    background #fff
    text-align center

.back
    position relative
    top 0rem
    left 0
    right 0
    botton 0
    height .2rem
    background #f5f5f5

.ttt
    line-height .88rem
    font-size .28rem
    margin-left .2rem
.mony
    line-height .88rem
    font-size .18rem
    margin-left .5rem
    color #ff9800
    position relative
    top .07rem
    right -.1rem
.one
    font-size .38rem
    color #ff9800
    position relative
    top .08rem
.two
    font-size .18rem
    color #9e9e9e
    position relative
    top .07rem
    left -.06rem
.tree
    font-size .20rem
    color #9e9e9e
    position relative
    top .08rem
    right .08rem
.text
    width 70%
    float left
    height 100%
.text1
    width 30%
    float left
    height 100%
.title-icon
    color #00bcd4

.title-one
    height .90rem
    line-height .90rem
    font-size .32rem
    margin-top -.2rem
    margin-left .15rem

.title-one,.title-two,.title-tree
    height .88rem
</style>
