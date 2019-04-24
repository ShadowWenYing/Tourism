<template>
<div>
    <div class="icons">
    <swiper :options="swiperOption" v-if="icon.length">

      <swiper-slide v-for="(page,index) of pages" :key="index">
        <a href="">
        <div class="icon" v-for="item of page" :key="item.id" v-if="icon.length">
          <div class="icon-img">
              <img class="icon-img-conter" :src="item.imgUrl">
          </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
        </a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>          
    </div>
    <div class="">
        <ul class="ul border">
            <li>
                <a class="one border-right" href="">
                    <span class="iconfont">&#xe8ab;</span>
                    定位失败
                </a>
            </li>
            <li >
                <a class="two border" href="">
                    <span class="iconfont">&#xe66e;</span>
                    玩水季
                </a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name:'HomeIcons',
    props:{
        icon:Array
    },
    data:function(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true,
                autoplay:false
            }
        }
    },
    computed:{
        pages (){
            const pages = []
            this.icon.forEach((item,index) => {
                const page = Math.floor(index/8)
                if(!pages[page]) {
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'

.icons >>>.swiper-container
    height 0
    padding-bottom 50%
    // height 3.8rem

    
    .icon
        position relative
        float left
        width 25%
        height 1.5rem
        padding-top .1rem
        text-align center

        .icon-img
            position absolute
            top 0rem
            left 0
            right 0
            
            box-sizing border-box
            padding .1rem
            bottom .44rem

            .icon-img-conter
                display block
                margin 0 auto
                opacity 1
                height 100%

        .icon-desc
            margin-top 1.13rem
            line-height .28rem
            font-size .28rem
            color $darkTextColor
            ellipsis()

.ul{
    width 100%
    height 0.98rem
    background #fff

}
.one{
    float left
    display block
    width 50%
    height .98rem
    line-height .98rem
    text-align center
}
.two{
    float right 
    display block
    width 50%
    height .98rem
    line-height .98rem
    text-align center
}
</style>
