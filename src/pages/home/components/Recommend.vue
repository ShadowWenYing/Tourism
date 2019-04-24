<template>
    <div>
        <div class="title">
            <span class="iconfont ccc">&#xe78d;</span>
            猜你喜欢</div>
        <ul>
            <router-link  :to=" '/detail/'+ item.id"  tag="li" class="item border-bottom" v-for="item of List" :key="item.id">
                  <img class="item-img" :src="item.imgUrl">
                  <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">
                        <span class="iconfont clo">&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;</span>
                        <span class="num">{{item.numpj}}</span>
                    </div>
                    <div class="item-desc">
                        <span class="mpg-price">￥<em class="mpg-price-num">{{item.numb}}</em></span>起
                        <span class="mp-like-address">{{item.desc}}</span>
                    </div>
                  </div>
            </router-link>
        </ul>
        <a href="" class="more border-top">查看所有产品</a>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        List:Array
    },
   data () {
       return {
           message:1
       }
   }
   }
</script>

<style lang="stylus" scoped>
.more{
    display block
    padding .2rem 0
    color #00afc7;
    font-size .28rem
    line-height .4rem
    text-align center
}

.mp-like-address{
    position absolute
    right .24rem
    bottom .4rem
}
.mpg-price-num{
    font-size .4rem
}
.mpg-price{
    color #ff8300
}

.clo{
    color #feb655
    display inline-block
    position relative
    width 1.5rem
    height .28rem
    line-height .28rem
    letter-spacing .02rem
}
.num{
    color #616161
    font-size .24rem
    line-height .34rem
    vertical-align text-bottom
    margin-left .5rem
}
.ccc{
    color #ff585b
}
.title{
    margin-top .2rem
    margin-left .2rem
    display inline-block
    height .44rem
    line-height .44rem
    background #ffffff
    font-size .32rem
}
.item
    overflow hidden
    display flex
    height 2.4rem

    .item-img
        width 1.8rem
        height 1.8rem
        padding .28rem

    .item-info
        float right
        margin-top .18rem


        .item-title
            margin-top .26rem
            height .44rem
            color #212121
            font-size .32rem
            line-height .44rem

        .item-desc
            margin-top .20rem
            height .34rem
            color #616161
</style>
