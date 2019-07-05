// 兄弟组件ABC C组件如何获取A、B组件的数据
<template>
    <div>
        <brother-a></brother-a>
        <brother-b></brother-b>
        <brother-c></brother-c>
    </div>
</template>

<script>
import A from '@/views/third/A'
import B from '@/views/third/B'
import C from '@/views/third/C'

export default {
    name: 'BrotherABC',
    components: {
        'brother-a' : A,
        'brother-b': B,
        'brother-c': C,
    },
    created() {
        // // 定义一个空的VUE实例
        // var Event = new Vue()
    },
    data() {
        return {
            
        }
    },
    methods: {

    }
}
    // var A = {
    //     template: '#a',
    //     data() {
    //         return {
    //             name: "LiLy"
    //         }
    //     }
    // }
    // var vm = new Vue({
    //     el: '#virtual',
    //     components: {
    //         'brother-a' : A,

    //     }
    // })
</script>
<style scoped>
   
</style>


