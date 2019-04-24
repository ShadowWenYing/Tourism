<template>
    <div>
       <home-header></home-header>
       <home-swiper :List="swiperList"></home-swiper>
       <home-icons :icon="iconList"></home-icons>
       <home-list></home-list>
       <home-recommend :List="recommendList"></home-recommend>
       <home-weekend :List="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import HomeList from './components/List'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name:'Home',
    data () {
        return {
            lastCity:'上海',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
        HomeList
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo () {
            axios.get('/api/index.json?city='+this.city)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if(res.ret && res.data) {
                const data = res.data
                this.swiperList=data.swiperList
                this.iconList=data.iconList
                this.recommendList=data.recommendList
                this.weekendList=data.weekendList
            }
        }
    },
    mounted() {
        this.lastCity=this.city
    },
    activated () {
        if(this.lastCity==this.city){
             axios.get('/api/index.json?city='+this.city)
                .then(this.getHomeInfoSucc)
        }else{
            axios.get('/api/home.json?city='+this.city)
                .then(this.getHomeInfoSucc)
        }
    }
}
</script>

<style>

</style>
