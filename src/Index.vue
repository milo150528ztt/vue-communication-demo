// 首页VUE
<template>
    <div class="index">
        <h1>父子组件之间传值</h1>
        <ul>
            <li>
                <a href="javascript:;" @click="toParentA">第一种：父组件通过props的方式向子组件传递值</a>
            </li>
            <li>
                <a href="javascript:;" @click="toParentB">第二种：子组件通过events  $emit 向父组件传值，实际上就是子组件把自己的数据发送到父组件</a>
            </li>
            <li>
                <a href="javascript:;" @click="toBrotherABC">第三种：（暂时没明白）</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Index',
    components: {},
    props: {},
    data() {
        return {
        }
    },
    methods: {
        // 去父组件
        toParentA() {
            let vm = this
            console.log('路由器输出===', vm.$router)
            vm.$router.push({
                name: 'ParentA',
            })
        },
        toParentB() {
            let vm = this
            vm.$router.push({
                name: 'ParentB'
            })
        },
        toBrotherABC() {
            this.$router.push({
                name: 'BrotherABC'
            })
        }
    }
}
</script>
<style>
    h1 {
      text-align: center  
    }
    ul > li {
        list-style: none
    }
</style>


