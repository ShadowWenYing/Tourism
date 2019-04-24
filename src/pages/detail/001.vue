<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header :sightName="sightName"></detail-header>
        <detail-baseinfo :pase="pase"></detail-baseinfo>
        <detail-weekend :week="week"></detail-weekend>
        <detail-list :list="list"></detail-list>
    </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailBaseinfo from './components/Baseinfo'
import DetailWeekend from './components/Weekend'
import DetailList from './components/List'
export default {
    components:{
        DetailBanner,
        DetailHeader,
        DetailBaseinfo,
        DetailWeekend,
        DetailList
    },
    data () {
      return {
        sightName:'',
        bannerImg:'',
        gallaryImgs:[],
        week:[],
        list:[],
        pase:'',
      }
    },
    methods:{
        getHomeInfo () {
            axios.get('/api/detail.json')
                .then(this.getHomeInfoSucc)

        },
        getHomeInfoSucc (res) {
            res = res.data
            if(res.ret &&res.data){
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.week = data.week
                this.list = data.list
                this.pase = data.pase
            }
            }
        },
        mounted () {
          this.getHomeInfo()
        }
    }
</script>

<style lang='stylus' scoped>
.conters
    height 50rem
</style>
