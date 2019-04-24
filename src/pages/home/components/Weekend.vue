<template>
    <div>
        <div class="title">
            <span class="iconfont ccc "></span>
            周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of List" :key="item.id">
                <a href="">
                    <div class="item-img-wrapper">
                        <img class="item-img" :src="item.imgUrl">
                    </div> 
                        <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        List:Array
    }

}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    line-height .8rem
    background #f5f5f5
    text-indent .2rem

.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%

.item-img
    width 100%

.item-info
    flex 1
    padding .1rem
    min-width 0

.item-title
    line-height .48rem
    font-size .28rem
    color #212121
    padding-right 1.4rem
    ellipsis()

.item-desc
    line-height .42rem
    padding-right 1.4rem
    font-size .24rem
    color #616161
    ellipsis()
</style>
