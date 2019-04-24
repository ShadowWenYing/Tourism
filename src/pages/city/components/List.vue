<template>
<div class="list" ref="wraper">
    <div>
    <div class="area">
        <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.city}}</div>
                </div>
            </div>
    </div>

<div class="area">
        <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handCityClick(item.name)">
                    <div class="button">{{item.name}}</div>
                </div>           
            </div>
    </div>

    <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
            <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handCityClick(innerItem.name)" >{{innerItem.name}}</div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        handCityClick(city){
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }
    },
    watch:{
        letter () {
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wraper)
    }
}
</script>

<style lang="stylus" scoped>
.list
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0

.border-topbottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc 
.border-bottom
    &:before
        border-color:#ccc
.title
    line-height .54rem
    background #eee
    padding-left .2rem
    color $666
    font-size .26rem

.button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .button-wrapper
        float left
        width 33.33%
        .button
            padding .1rem 0
            margin .1rem
            text-align center
            border .02rem solid  #ccc
            border-radius .06rem

.item-list
    .item
        line-height .76rem
        padding-left .2rem
</style>
