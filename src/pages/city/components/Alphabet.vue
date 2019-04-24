<template>
     <ul class="list">
        <li 
        class="item" 
        v-for="item of letters"
        :ref="item"
        :key="item"
        @click="handLetterClick"
        @touchstart="handTouchStart"
        @touchmove="handTouchMove"
        @touchend="handTouchEnd"
        >{{item}}</li>
    </ul>
</template>

<script>

export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    computed:{
        letters () {
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    data () {
        return {
            touch:false,
            startY:0,
            timers:null
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handLetterClick (e) {
            this.$emit('change',e.target.innerText)
        },
        handTouchStart () {
            this.touch=true
        },
        handTouchMove (e) {
            if(this.touch){
                if(this.timers){
                    clearTimeout(this.timers)
                }
                this.timers = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY) / 20)
                    if(index >=0 && index<this.letters.length){
                        this.$emit('change',this.letters[index])
                    }    
                },16)
            }
        },
        handTouchEnd () {
            this.touch=false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    position absolute
    display flex
    flex-direction column
    justify-content center
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
        line-height .4rem
        color $bgColor
        text-align center
</style>
